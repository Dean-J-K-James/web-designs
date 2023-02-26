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
                'cook': '#1F1F1F',
                'cook-text': '#C9C9C9',
                'cook-accent': '#333333',
                'cook-accent-text': '#C9C9C9',
                'menu': '#FFFFFF',
                'menu-text': '#656565',
                'menu-accent': '#BFDDFB',
                'menu-accent-text': '#4279CE',
                'foot': '#FFFFFF',
                'foot-text': '#656565',
                'foot-accent': '#BFDDFB',
                'foot-accent-text': '#4279CE',
                'body': '#F1F1F1',
                'cell': '#FFFFFF',
                'cell-text': '#797979',
                'cell-accent': '#E7E7E7',
                'cell-accent-text': '#4279CE',
                'primary': '#4279CE',
                'primary-text': '#FFFFFF',
                'primary-accent': '#BFDDFB',
                'primary-accent-text': '#4279CE',
                'secondary': '#BFDDFB',
                'secondary-text': '#4279CE',
                'secondary-accent': '#4279CE',
                'secondary-accent-text': '#FFFFFF',
                'tags': '#F1F1F1',
                'tags-text': '#797979',
                'tags-accent': '#E7E7E7',
                'tags-accent-text': '#4279CE',
                'h1': '#334256',
                'h2': '#2E65BA',
                'h3': '#2E65BA',
                'h4': '#334256',
                'p': '#515151',
                'a': '#4279CE',
                'heading': '#334256',
                'subtitle': '#979797',
                'border': '#E7E7E7',
            }
        }
    }
}