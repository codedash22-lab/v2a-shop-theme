module.exports = {
    important: false,
    content: [
        "src/views/**/*.twig",
        "src/assets/js/**/*.js",
    ],
    darkMode: 'class',
    theme   : {
        container : {
            center : true,
            padding: '16px',
            screens: {
                '2xl': "1240px"
            }
        },
        fontFamily: {
            sans: [
                'var(--font-main)',
                '-apple-system',
                'BlinkMacSystemFont',
            ],
            primary: "var(--font-main)",
            display: [
                'Orbitron',
                'sans-serif',
            ],
        },
        extend    : {
            colors: {
                'dark'            : 'var(--color-ink)',
                'darker'          : 'var(--color-ink-strong)',
                'danger'          : '#EF4444',
                'primary'         : 'var(--color-primary)',
                'primary-d'       : 'var(--color-primary-dark)',
                'primary-l'       : 'var(--color-primary-light)',
                'primary-reverse' : 'var(--color-primary-reverse)',
                'primary-dark'    : 'var(--color-primary-dark)',
                /* V2A palette tokens — usable as bg-v2a-violet, text-v2a-green, etc. */
                'v2a-bg'          : 'var(--v2a-bg)',
                'v2a-bg-soft'     : 'var(--v2a-bg-soft)',
                'v2a-surface'     : 'var(--v2a-surface)',
                'v2a-ink'         : 'var(--v2a-ink)',
                'v2a-muted'       : 'var(--v2a-muted)',
                'v2a-line'        : 'var(--v2a-line)',
                'v2a-violet'      : 'var(--v2a-violet)',
                'v2a-violet-deep' : 'var(--v2a-violet-deep)',
                'v2a-green'       : 'var(--v2a-green)',
                'v2a-header'      : 'var(--v2a-header)',
                'v2a-header-2'    : 'var(--v2a-header-2)',
            },
            borderRadius: {
                DEFAULT: '10px',
                'pill': '999px',
            },
            boxShadow: {
                'default': '0 10px 30px rgba(0,0,0,.35)',
                'v2a-glow': '0 8px 24px rgba(124,58,237,.35)',
            },
            screens: {
                'xxs': {'min': '380px', 'max': '479px'},
                'xs': '480px',
            },
        },
    },
    corePlugins: {
      outline: false,
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
    ],
}
