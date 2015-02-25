module.exports = {
    options : {
        beautify : true,
        relative : true
    },

    main : {
        src : '<%= config.dir.target %>/index.html',
        dest : '<%= config.dir.target %>',

        options : {
            scripts : {
                main : '<%= config.dir.target %>/scripts/vendor/angular-loader*.js',
                bundle : [
                    '<%= config.dir.target %>/scripts/**/*.js',
                    '!<%= config.dir.target %>/scripts/vendor/angular-loader*.js'
                ]
            },
            styles : {
                bundle : [
                    '<%= config.dir.target %>/styles/*.css'
                ]
            }
        }
    }
};