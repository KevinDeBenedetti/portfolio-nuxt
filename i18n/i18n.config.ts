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
            home: {
                socials: 'FIND ME ON',
                projects_featured: 'Featured projects',
                projects_link: 'All projects',
                articles_featured: 'Recent articles',
                articles_link: 'All articles',
            },
            error: {
                title: 'Error',
                projects: 'No projects found.',
            }
        },
        fr: {
            change_language: 'Anglais',
            toggle_theme: 'Changer de thème',
            nav: {
                home_title: 'Accueil',
                projects_title: 'Réalisations',
                articles_title: 'Articles',
            },
            home: {
                socials: 'Réseaux',
                projects_featured: 'Rélisations récentes',
                projects_link: 'Toutes les réalisations',
                articles_featured: 'Articles récents',
                articles_link: 'Tous les articles',
            },
            error: {
                title: 'Erreur',
                projects: 'Pas de projets trouvés.',
            }
        }
    }
}))