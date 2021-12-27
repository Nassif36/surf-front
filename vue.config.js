// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '' :
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
