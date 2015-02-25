module.exports = {
    common : {
        files : [
            {
                flatten : true,
                src : '<%= config.dir.src %>/index.tpl.html',
                dest : '<%= config.dir.target %>/index.html'
            }
        ]
    },
    dist : {
        files : [
            {
                flatten : true,
                expand : true,
                src : '<%= config.files.vendor.js.minNgloader %>',
                dest : '<%= config.dir.target %>/scripts/vendor'
            }
        ]
    }
};