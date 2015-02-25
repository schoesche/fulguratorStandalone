module.exports = {
    dev : {
        files : [
            {
                expand : true,
                flatten : true,
                src : [
                    '<%= config.files.vendor.js.full %>', '<%= config.files.vendor.js.fullNgloader %>'
                ],
                dest : '<%= config.dir.target %>/scripts/vendor'
            }, {
                expand : true,
                flatten : false,
                cwd : '<%= config.dir.src %>/app',
                src : [
                    '**/*.js'
                ],
                dest : '<%= config.dir.target %>/scripts'
            }
        ],
        verbose : true
    },
};