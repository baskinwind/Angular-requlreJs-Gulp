'use strict';

define(function () {

    return function () {
        /* directive code here */
        return {
            restrict: 'E',
            scope: {
                size: "="
            },
            template: '<div ng-style="{width:size,height:size}" class="squire"></div>',
            replace: true
        }
    };

});
