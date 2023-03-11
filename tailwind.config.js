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
                'menu-accent': '#FBC9C9',
                'menu-accent-text': '#971A1A',
                'foot': '#FFFFFF',
                'foot-text': '#656565',
                'foot-accent': '#BFDDFB',
                'foot-accent-text': '#4279CE',
                'body': '#F1F1F1',
                'cell': '#FFFFFF',
                'cell-text': '#797979',
                'cell-accent': '#E7E7E7',
                'cell-accent-text': '#4279CE',
                'primary': '#971A1A',
                'primary-text': '#FFFFFF',
                'primary-accent': '#BFDDFB',
                'primary-accent-text': '#4279CE',
                'secondary': '#FBC9C9',
                'secondary-text': '#971A1A',
                'secondary-accent': '#971A1A',
                'secondary-accent-text': '#FFFFFF',
                'h1': '#101A29',
                'h2': '#101A29',
                'h3': '#101A29',
                'h4': '#101A29',
                'h5': '#334256',
                'h6': '#979797',
                'p': '#515151',
                'a': '#4279CE',
                'heading': '#101A29',
                'subtitle': '#979797',
                'border': '#E7E7E7',
            }
        }
    }
}