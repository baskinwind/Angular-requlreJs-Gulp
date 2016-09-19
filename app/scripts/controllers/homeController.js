'use strict';

define(function () {

    var controller = function ($scope,ajaxService) {
        /* controller code here */
        alert('home page');
        alert(ajaxService.getName())
    };


    controller.$inject = ['$scope','ajaxService'];

    return controller;
});
