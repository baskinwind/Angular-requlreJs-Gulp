'use strict';

define(function (require) {

    var angular = require('angular');

    require('angular.ui.router');
    require('route');
    require('appService');
    require('appDirective');

    return angular.module('Demo', [
        'ui.router',
        'appRoute',
        'appService',
        'appDirective'
    ]);
});
