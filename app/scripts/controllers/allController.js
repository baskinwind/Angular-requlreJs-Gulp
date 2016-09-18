'use strict';

define(function () {

    /* 整个页面最大的controller */
    var controller = function ($scope, $location) {
        /* controller code here */
        $location.path('/home');
    };


    controller.$inject = ['$scope', '$location'];

    return controller;
});
