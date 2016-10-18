'use strict';

define(function (require) {

    var angular = require('angular');

    var directive = angular.module('appDirective',[]);

    /* 在此处注册 Directive 就能直接在页面中使用 */
    directive.directive('userCircle',require('./directives/circleDirective'));
    directive.directive('userSquire',require('./directives/squireDirective'));
    directive.directive('touchStart',require('./directives/touchStart'));
    directive.directive('touchEnd',require('./directives/touchEnd'));

});
