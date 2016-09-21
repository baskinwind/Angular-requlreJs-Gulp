'use strict';

define(function (require) {

    /* appInit 用于注册 $rootScope window 上的方法 */
    var service = function ($rootScope, $location) {

        $rootScope.toAddress = function (add) {
            $rootScope.nowPath = add;
            $location.path(add);
        };

        $rootScope.moment = window.moment = require('moment');
        $rootScope._ = window._ = require('underscore');

    };

    service.$inject = ['$rootScope', '$location'];

    return service;
});
