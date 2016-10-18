'use strict';

define(function () {

    var touchStart = function ($parse, $touch) {

        return function (scope, element, attr) {

            var handler = $parse(attr['touchEnd']);

            $touch.bind(element, {
                'end': function (coords, event) {
                    scope.$apply(function () {
                        handler(scope, {$event: event})
                    })
                }
            });
        };

    };

    touchStart.$inject = ['$parse', '$touch'];

    return touchStart;

});
