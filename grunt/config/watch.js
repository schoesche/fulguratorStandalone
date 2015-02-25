module.exports = {

    options : {
        livereload : false
    },
    js : {
        files : [
            '<%= config.files.app.js %>'
        ],
        tasks : [
            'jshint', 'sync:dev'
        ]
    },
    styles : {
        files : [
            '<%= config.files.app.styles %>'
        ],
        tasks : [
            'less:dev'
        ]
    },
    tpls : {
        files : [
            '<%= config.files.app.tpls %>'
        ],
        tasks : [
            'html2js:dev'
        ]
    },
    devLocal : {
        files : [
            '<%= config.dir.src %>/index.tpl.html', '<%= config.dir.src %>/config/*.json'
        ],
        tasks : [
            'copy:common', 'includereplace:devLocal', 'htmlbuild', 'ngconstant:devLocal'
        ]
    },
    dev : {
        files : [
            '<%= config.dir.src %>/index.tpl.html', '<%= config.dir.src %>/config/*.json'
        ],
        tasks : [
            'copy:common', 'includereplace:dev', 'htmlbuild', 'ngconstant:dist'
        ]
    }
};
