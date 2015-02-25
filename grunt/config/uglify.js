module.exports = {
    options : {
        mangle : true
    },
    app : {
        src : '<%= config.dir.temp %>/app.js',
        dest : '<%= config.dir.target %>/scripts/app.min.js'
    }
};