module.exports = function(grunt) {

    // load build config
    var options = require('./build.config');

    // load task configurations
    var configs = require('load-grunt-configs')(grunt, options);

    // initialize loaded configs
    grunt.initConfig(configs);

    // load tasks dynamically
    require('jit-grunt')(grunt, {
        htmlbuild : 'grunt-html-build',
        ngconstant : 'grunt-ng-constant',
        includereplace : 'grunt-include-replace'
    });

    require('time-grunt')(grunt);

    /**
     * Register tasks
     */

    grunt.registerTask('default', 'the default task', [
        'run:dev:local'
    ]);

    grunt.registerTask('run:dev:local', 'run the application on a local server and watching files', [
        'clean', 'build:dev:local', 'connect:server', 'concurrent:watchingDevLocal'
    ]);

    grunt.registerTask('watching:dev', 'watch source file for changes (for rappit develop)', [
        'build:dev', 'concurrent:watchingDev'
    ]);

    grunt.registerTask('build:dev:local', 'build for local development (without backend)', [
        'clean',
        'jshint',
        /*'less:dev',*/
        'html2js:dev',
        'ngconstant:devLocal',
        'copy:common',
        'sync:dev',
        'includereplace:devLocal',
        'htmlbuild'
    ]);

    grunt.registerTask('build:dev', 'build for local development', [
        'clean',
        'jshint',
        /*'less:dev',*/
        'html2js:dev',
        'ngconstant:dist',
        'copy:common',
        'sync:dev',
        'includereplace:dist',
        'htmlbuild'
    ]);

    grunt.registerTask('build:dist', 'build the full distribution', [
        'clean',
        'jshint',
        /*'less:dist',*/
        'html2js:dist',
        'ngconstant:dist',
        'concat',
        'ngAnnotate',
        'uglify',
        'copy:common',
        'copy:dist',
        'includereplace:dist',
        'htmlbuild'
    ]);

};
