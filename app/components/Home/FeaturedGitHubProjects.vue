<script lang="ts" setup>
const localePath = useLocalePath();
const { t } = useI18n();

const { repos, isLoading } = useGitHubRepos();

// Get only the 3 most recent repos
const latestRepos = computed(() => repos.value?.slice(0, 3) ?? []);
</script>

<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      {{ t('home.github_projects') }}
    </h2>

    <div v-if="isLoading" class="flex items-center justify-center py-8">
      <UIcon name="i-heroicons-arrow-path" class="w-5 h-5 animate-spin text-gray-400" />
    </div>

    <div v-else-if="latestRepos.length" class="space-y-4">
      <FeatureGitHubRepoCard v-for="repo in latestRepos" :key="repo.id" :repo="repo" />
    </div>

    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        :label="t('home.projects_link')"
        :to="localePath('projects')"
        variant="link"
        color="primary"
      />
    </div>
  </div>
</template>
