'use strict';

define(function () {

    /* ajaxService */
    var service = function ($http) {
        /* service code here */
        var name = 'ajaxService';
        this.getName = function () {
            return name;
        };
    };


    service.$inject = ['$http'];

    return service;
});
