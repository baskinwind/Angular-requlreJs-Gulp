'use strict';

define(function (require) {

    var angular = require('angular');

    require('angular.route');
    require('route');

    return angular.module('Demo', [
        'ngRoute',
        'appRoute'
    ]);
});
