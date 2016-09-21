'use strict';

define(function () {

    var controller = function ($scope,ajaxService) {
        /* controller code here */
        $scope.text = 'use service:'+ajaxService.getName();
    };


    controller.$inject = ['$scope','ajaxService'];

    return controller;
});
