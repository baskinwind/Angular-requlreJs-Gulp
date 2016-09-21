'use strict';

define(function (require) {

    var angular = require('angular');

    require('angular.ui.router');
    require('route');
    require('appService');
    require('appDirective');

    var app = angular.module('Demo', [
        'ui.router',
        'appRoute',
        'appService',
        'appDirective'
    ]);

    app.run(require('appInit'));

    return app;
});
