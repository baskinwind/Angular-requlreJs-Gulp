'use strict';

define(function () {

    var controller = function ($scope) {
        /* controller code here */
        $scope.text = 'use directive'
    };


    controller.$inject = ['$scope'];

    return controller;
});
