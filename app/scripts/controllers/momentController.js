'use strict';

define(function () {

    var controller = function ($scope) {
        /* controller code here */
        $scope.momentTime = new moment();
    };


    controller.$inject = ['$scope'];

    return controller;
});
