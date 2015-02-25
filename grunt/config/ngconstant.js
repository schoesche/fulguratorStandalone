module.exports = {
    options : {
        name : 'app.config',
        space : ' ',
        wrap : true
    },
    devLocal : {
        options : {
            dest : '<%= config.dir.target %>/scripts/app.config.js',
        },
        constants : '<%= config.dir.src %>/config/app.config.devLocal.json'
    },
    dist : {
        options : {
            dest : '<%= config.dir.target %>/scripts/app.config.js',
        },
        constants : '<%= config.dir.src %>/config/app.config.json'
    }
};