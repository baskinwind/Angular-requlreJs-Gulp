'use strict';

define(function () {

    /* appInit 用于注册 $rootScope window 上的方法 */
    var service = function ($rootScope,$location) {

        $rootScope.toAddress = function (add) {
            $rootScope.nowPath = add;
            $location.path(add);
        }

    };

    service.$inject = ['$rootScope','$location'];

    return service;
});
