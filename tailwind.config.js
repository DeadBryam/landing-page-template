/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,ts,tsx}', './*.html'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                'dark-primary': 'var(--dark-primary)',
                secondary: 'var(--secondary)',
                tertiary: 'var(--tertiary)',
            },
            fontSize: {
                '10xl': ['10rem', { lineHeight: '1.2' }],
                '11xl': ['11rem', { lineHeight: '1.2' }],
                '12xl': ['12rem', { lineHeight: '1.2' }],
            },
        },
    },
    plugins: [],
};
