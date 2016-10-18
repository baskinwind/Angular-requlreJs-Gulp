'use strict';

define(function () {

    // 小工具的整合，方便注入和使用。
    var service = function ($stateParams, $location, $window) {

        this.parmas = function (name) {
            return $stateParams[name];
        };

        this.query = function (name) {
            return $location.search()[name];
        };

        this.toAdd = function (add, search) {
            search = angular.extend({}, search);
            $location.path(add).search(search);
        };

        this.goBack = function () {
            $window.history.back();
        };

    };


    service.$inject = ['$stateParams', '$location', '$window'];

    return service;
});
