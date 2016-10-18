'use strict';

define(function (require) {

    var angular = require('angular');

    var service = angular.module('appService',[]);

    /* 在此处注册 service 或是 factory 就能直接在 controller 中使用 */
    service.service('$touch',require('./service/touchService'));
    service.service('ajaxService',require('./service/ajaxService'));

});
