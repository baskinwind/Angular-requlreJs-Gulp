'use strict';

define(function (require) {

    /* appInit 用于注册 $rootScope window 上的方法，初始化一些东西 */
    var service = function ($rootScope, $location) {

        function initFunction(functionName, init) {
            $rootScope[functionName] = window[functionName] = init;
        }

        $rootScope.toAddress = function (add) {
            $location.path(add);
        };

        $rootScope.goBack = function () {
            $window.history.back();
        };

        $rootScope.$on('$stateChangeStart', function (event, toState) {
            console.log(toState.url);
            $rootScope.nowPath = toState.url;
        });

        initFunction('moment',require('moment'));
        initFunction('_',require('underscore'));

        // 手机端点击加速
        require('fastclick').attach(document.body);
    };

    service.$inject = ['$rootScope', '$location'];

    return service;
});
