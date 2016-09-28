"use strict";

require.config({
    baseUrl: 'scripts',

    paths: {
        'angular': '../lib/bower/angular/angular.min',
        'angular.ui.router': '../lib/bower/angular-ui-router/release/angular-ui-router.min',
        'text': '../lib/bower/requirejs-text/text',
        'moment':'../lib/bower/moment/min/moment.min',
        'fastclick':'../lib/bower/fastclick/lib/fastclick',
        'underscore':'../lib/bower/underscore/underscore-min',
        'template': '../template'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular.ui.router': ['angular']
    }
});

