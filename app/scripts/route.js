define(function (require) {

    var angular = require('angular');

    angular.module('appRoute', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('state', {
                    url: "",
                    template: require('text!template/all.html'),
                    controller: require('scripts/controllers/allController.js')
                })
                .state('state.home', {
                    url: "/home",
                    template: require('text!template/home.html'),
                    controller: require('scripts/controllers/homeController.js')
                })
                .state('state.moment', {
                    url: "/moment",
                    template: require('text!template/moment.html'),
                    controller: require('scripts/controllers/momentController.js')
                })
                .state('state.directive', {
                    url: "/directive",
                    template: require('text!template/directive.html'),
                    controller: require('scripts/controllers/directiveController.js')
                })
                .state('state.my', {
                    url: "/my",
                    template: require('text!template/my.html'),
                    controller: require('scripts/controllers/myController.js')
                });
        }])
});