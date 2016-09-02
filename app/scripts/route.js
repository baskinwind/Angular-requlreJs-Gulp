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
                .state('state.message', {
                    url: "/message",
                    template: require('text!template/message.html'),
                    controller: require('scripts/controllers/messageController.js')
                })
                .state('state.mark', {
                    url: "/mark",
                    template: require('text!template/mark.html'),
                    controller: require('scripts/controllers/markController.js')
                })
                .state('state.my', {
                    url: "/my",
                    template: require('text!template/my.html'),
                    controller: require('scripts/controllers/myController.js')
                });
        }])
});