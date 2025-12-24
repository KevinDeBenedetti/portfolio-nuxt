import type { H3Event } from 'h3';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event);
  const username = config.public.githubUsername || 'KevinDeBenedetti';

  // Optional: Use GitHub token for higher rate limits
  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'Portfolio-Nuxt',
  };

  if (config.githubToken) {
    headers.Authorization = `Bearer ${config.githubToken}`;
  }

  try {
    const repos = await $fetch<GitHubRepo[]>(`https://api.github.com/users/${username}/repos`, {
      headers,
      query: {
        sort: 'updated',
        direction: 'desc',
        per_page: 30,
        type: 'owner', // Only repos owned by user, not forks
      },
    });

    // Filter out forks and archived repos, and format the response
    const filteredRepos = repos
      .filter((repo) => !repo.fork && !repo.archived)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        title: formatRepoName(repo.name),
        description: repo.description,
        url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics,
        updatedAt: repo.updated_at,
        pushedAt: repo.pushed_at,
      }));

    return filteredRepos;
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch GitHub repositories',
    });
  }
});

// Helper to format repo name (e.g., "my-repo-name" -> "My Repo Name")
function formatRepoName(name: string): string {
  return name.replace(/[-_]/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}
