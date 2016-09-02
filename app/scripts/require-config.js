"use strict";

require.config({
    baseUrl: 'scripts',

    paths: {
        'angular': '../lib/bower/angular/angular',
        'angular.ui.router': '../lib/bower/angular-ui-router/release/angular-ui-router',
        'text': '../lib/bower/requirejs-text/text',
        'template': '../template'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular.ui.router': ['angular']
    }
});

