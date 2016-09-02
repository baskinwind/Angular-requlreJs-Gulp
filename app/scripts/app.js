'use strict';

define(function (require) {

    var angular = require('angular');

    require('angular.ui.router');
    require('route');

    return angular.module('Demo', [
        'ui.router',
        'appRoute'
    ]);
});
