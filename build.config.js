module.exports.config = {

    // load-grunt-configs path
    src : 'grunt/config/*.js',

    // directories
    dir : {
        target: 'target/webapp',
        src : '',
        temp : 'target/tmp-ui'
    },

    // files in our application
    files : {
        // all 3th party stuff
        vendor : {
            js : {
                fullNgloader : 'bower_components/angular-loader/angular-loader.js',
                full : [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-animate/angular-animate.js',
                    'bower_components/angular-route/angular-route.js'
                ],
                minNgloader : 'bower_components/angular-loader/angular-loader.min.js',
                min : [
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-animate/angular-animate.min.js',
                    'bower_components/angular-route/angular-route.min.js'
                ]
            },

            styles : {
                full : [
                    'bower_components/bootstrap/dist/css/bootstrap.css'
                ],
                min : [
                    'bower_components/bootstrap/dist/css/bootstrap.min.css'
                ]
            }
        },

        // application file stuff
        app : {
            tpls : [
                'app/**/*.tpl.html'
            ],
            js : [
                'app/**/*.js',
                'app.js'
            ],
            styles : [
                'app/**/*.css',
                'app.css'
            ]
        }
    }
};
