import type { H3Event } from 'h3';
import type { GitHubRepo } from '~~/shared/types/github';

import { EXCLUDED_REPOS, formatRepoName } from '~~/server/utils/github';

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

    // Filter out forks, archived repos, and excluded repos, then format the response
    const filteredRepos = repos
      .filter((repo) => !repo.fork && !repo.archived && !EXCLUDED_REPOS.includes(repo.name))
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
