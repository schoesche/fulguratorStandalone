module.exports = {
    options : {
        // to clean outside working directory
        force : true
    },
    src : [
        '<%= config.dir.target %>', '<%= config.dir.temp %>'
    ]
};