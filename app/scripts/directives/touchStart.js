'use strict';

define(function () {

    var touchStart = function ($parse, $touch) {

        return function (scope, element, attr) {

            var handler = $parse(attr['touchStart']);
            var handlerEnd = $parse(attr['touchEnd']);
            var xRange = {
                min: element[0].offsetLeft - 10,
                max: element[0].offsetLeft + element[0].offsetWidth + 10
            };
            var yRange = {
                min: element[0].offsetTop - 10,
                max: element[0].offsetTop + element[0].offsetHeight + 10
            };

            var touch = false;

            $touch.bind(element, {
                'start': function (coords, event) {
                    touch = true;
                    scope.$apply(function () {
                        handler(scope, {$event: event})
                    })
                },
                'move': function (coords, event) {
                    // 允许touch时在元素上小范围移动,当touch点移出元素范围时触发end事件
                    if (!touch)return;
                    if (xRange.min > coords.x || xRange.max < coords.x || yRange.max < coords.y || yRange.min > coords.y) {
                        touch = false;
                        element.unbind('touchend');
                        scope.$apply(function () {
                            handlerEnd(scope, {$event: event})
                        })
                    }
                }
            });
        };

    };

    touchStart.$inject = ['$parse', '$touch'];

    return touchStart;

});
