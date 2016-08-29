'use strict';

define(function () {

    var page1Controller = function ($scope) {
        /* Controller code here */
        alert('now in page1');
    };


    page1Controller.$inject = ['$scope'];

    return page1Controller;
});
