/**
 * List of repository names to exclude from the results
 */
export const EXCLUDED_REPOS: string[] = [
  // Add repository names to exclude here, e.g.:
  // 'old-project',
  // 'test-repo',
  'KevinDeBenedetti',
];

/**
 * Helper to format repo name (e.g., "my-repo-name" -> "My Repo Name")
 */
export function formatRepoName(name: string): string {
  return name.replace(/[-_]/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}
