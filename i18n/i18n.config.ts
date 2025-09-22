export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  messages: {
    en: {
      change_language: 'French',
      toggle_theme: 'Toggle theme',
      nav: {
        home_title: 'Home',
        projects_title: 'Projects',
        articles_title: 'Articles',
      },
      error: {
        title: 'Error',
        projects: 'No projects found.',
      },
      footer: {
        legals: 'Legal Notice',
      },
    },
    fr: {
      change_language: 'Anglais',
      toggle_theme: 'Changer de thème',
      nav: {
        home_title: 'Accueil',
        projects_title: 'Réalisations',
        articles_title: 'Articles',
      },
      error: {
        title: 'Erreur',
        projects: 'Pas de projets trouvés.',
      },
      footer: {
        legals: 'Mentions légales',
      },
    },
  },
}))
