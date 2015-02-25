module.exports = {
    devLocal : {
        options : {
            globals : {
                appName : 'app.devLocal'
            }
        },
        src : '<%= config.dir.target %>/index.html',
        dest : '<%= config.dir.target %>/index.html'
    },

    dist : {
        options : {
            globals : {
                appName : 'app'
            }
        },
        src : '<%= config.dir.target %>/index.html',
        dest : '<%= config.dir.target %>/index.html'
    }
};