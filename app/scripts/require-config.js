"use strict";

require.config({
    baseUrl: 'scripts',

    paths: {
        'angular': '../lib/bower/angular/angular',
        'angular.route': '../lib/bower/angular-route/angular-route',
        'text': '../lib/bower/requirejs-text/text',
        'template': '../template'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular.route': ['angular']
    }
});

