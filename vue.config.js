// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/surfyarte-front/' :
        '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "@/assets/sass/_variables.scss";
                `
            }
        }
    }
}
