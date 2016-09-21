'use strict';

define(function () {

    var controller = function ($scope) {
        /* controller code here */
        $scope.github = 'https://github.com/acccco';
        $scope.homepage = 'http://acohome.cn/';
    };


    controller.$inject = ['$scope'];

    return controller;
});
