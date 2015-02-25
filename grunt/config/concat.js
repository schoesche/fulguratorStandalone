module.exports = {
    options : {
        separator : ';'
    },
    app : {
        src : [
            '<%= config.dir.src %>/app/**/*.js',
            '<%= config.dir.temp %>/*.js',
            '!<%= config.dir.src %>/app/app.devLocal.js',
            '!<%= config.dir.src %>/app/**/*mock*.js'
        ],
        dest : '<%= config.dir.temp %>/app.js'
    },
    vendor : {
        src : [
            '<%= config.files.vendor.js.min %>'
        ],
        dest : '<%= config.dir.target %>/scripts/vendor/vendor.min.js'
    }
};