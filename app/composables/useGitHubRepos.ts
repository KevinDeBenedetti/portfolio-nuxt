export interface GitHubRepoFormatted {
  id: number;
  name: string;
  title: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  updatedAt: string;
  pushedAt: string;
}

export function useGitHubRepos() {
  const {
    data: repos,
    status,
    error,
    refresh,
  } = useFetch<GitHubRepoFormatted[]>('/api/github/repos', {
    key: 'github-repos',
    default: () => [],
  });

  const isLoading = computed(() => status.value === 'pending');
  const hasError = computed(() => status.value === 'error');

  return {
    repos,
    isLoading,
    hasError,
    error,
    refresh,
  };
}
