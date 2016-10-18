'use strict';

define(function (require) {

    /* appInit 用于注册 $rootScope window 上的方法，初始化一些东西 */
    var service = function ($rootScope, $location) {

        function initFunction(functionName, init) {
            $rootScope[functionName] = window[functionName] = init;
        }

        // 地址跳转，可使用search为地址添加queryString。
        $rootScope.toAddress = function (add,search) {
            search = angular.extend({},search);
            $location.path(add).search(search);
        };

        $rootScope.goBack = function () {
            $window.history.back();
        };

        $rootScope.$on('$stateChangeStart', function (event, toState) {
            $rootScope.nowPath = toState.url;
        });

        initFunction('moment',require('moment'));
        initFunction('_',require('underscore'));

        // 手机端点击加速
        require('fastclick').attach(document.body);
        // BUG : contenteditable 为 true 不能够正常点击，需要添加 needsclick class 作为钩子，略过点击加速。
    };

    service.$inject = ['$rootScope', '$location'];

    return service;
});
