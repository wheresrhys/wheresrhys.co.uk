module.exports = {
    dev: {
        options: {
            style: 'expanded'
        },
        files: {
            './main.css': './style/main.scss'
        }
    },
    dist: {
        options: {
            style: 'compressed'
        },
        files: {
            './_site/main.css': './style/main.scss'
        }
    }
};