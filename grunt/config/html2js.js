module.exports = {
    options : {
        base : 'src/app',
        module : 'templates-app'
    },
    dev : {
        src : [
            '<%= config.files.app.tpls %>'
        ],
        dest : '<%= config.dir.target %>/scripts/app.tpls.js'
    },
    dist : {
        options : {
            htmlmin : {
                collapseWhitespace : true,
                removeComments : true
            }
        },
        src : [
            '<%= config.files.app.tpls %>'
        ],
        dest : '<%= config.dir.temp %>/app.tpls.js'
    }
};