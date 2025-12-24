import type { GitHubRepoFormatted } from '~~/shared/types/github';

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
