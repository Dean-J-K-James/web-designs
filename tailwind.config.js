module.exports = {
    content: ["./_site/**/*.{html,js}"],
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
    theme: {
        fontFamily: {
            'sans': ['Arial'],
            'text': ['Verdana'],
        },
        extend: {
            colors: {
                /* */
                'menu': '#FFFFFF',
                'body': '#F1F1F1',
                'foot': '#FFFFFF',
                
                /* */
                'brand': '#4279CE',
                'brand-text': '#FFFFFF',
                'brand-accent': '#BFDDFB',
                'brand-accent-text': '#4279CE',
                'secondary': '#BFDDFB',
                'secondary-text': '#4279CE',
                'secondary-accent': '#4279CE',
                'secondary-accent-text': '#FFFFFF',
                'light': '#FFFFFF',
                'light-text': '#333333',
                'light-accent': '#F1F1F1',
                'light-accent-text': '#333333',
            }
        }
    }
}