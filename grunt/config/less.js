module.exports = {
    options : {
        strictMath : true,
        ieCompat : false
    },
    dev : {
        options : {
            dumpLineNumbers : 'all',
            sourceMap : false
        },
        src : [
            '<%= config.files.app.styles %>', '<%= config.files.vendor.styles.full %>'
        ],
        dest : '<%= config.dir.target %>/styles/app.css'
    },
    dist : {
        options : {
            cleancss : true,
            compress : true
        },
        src : [
            '<%= config.files.app.styles %>', '<%= config.files.vendor.styles.min %>'
        ],
        dest : '<%= config.dir.target %>/styles/app.min.css'
    }
};