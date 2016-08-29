define(function (require) {

    var angular = require('angular');

    var page1Temp = require('text!template/page1.html'),
        page2Temp = require('text!template/page2.html');

    angular.module('appRoute', ['ngRoute'])
        .config(['$routeProvider', '$httpProvider', function($routeProvider) {
            $routeProvider.when('/page1', {
                    template: page1Temp,
                    controller: require('controllers/page1Controller')
                })
                .when('/page2', {
                    template: page2Temp,
                    controller: require('controllers/page2Controller')
                })
                .when('/', {
                    redirectTo: '/page1'
                });
        }])
});