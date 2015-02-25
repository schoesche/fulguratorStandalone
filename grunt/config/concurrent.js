module.exports = {
    options : {
        logConcurrentOutput : true
    },
    watchingDevLocal : {
        tasks : [
            'watch:js', 'watch:styles', 'watch:tpls', 'watch:devLocal'
        ]
    },
    watchingDev : {
        tasks : [
            'watch:js', 'watch:styles', 'watch:tpls', 'watch:dev'
        ]
    }
};
