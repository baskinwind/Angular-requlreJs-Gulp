'use strict';

/**
 * 为项目添加 $touch 服务
 */

define(function () {

    var service = function () {

        var POINTER_EVENTS = {
            'mouse': {
                start: 'mousedown',
                move: 'mousemove',
                end: 'mouseup'
            },
            'touch': {
                start: 'touchstart',
                move: 'touchmove',
                end: 'touchend',
                cancel: 'touchcancel'
            },
            'pointer': {
                start: 'pointerdown',
                move: 'pointermove',
                end: 'pointerup',
                cancel: 'pointercancel'
            }
        };

        function getCoordinates(event) {
            var originalEvent = event.originalEvent || event;
            var touches = originalEvent.touches && originalEvent.touches.length ? originalEvent.touches : [originalEvent];
            var e = (originalEvent.changedTouches && originalEvent.changedTouches[0]) || touches[0];

            return {
                x: e.clientX,
                y: e.clientY
            };
        }

        function getEvents(pointerTypes, eventType) {
            var res = [];
            angular.forEach(pointerTypes, function (pointerType) {
                var eventName = POINTER_EVENTS[pointerType][eventType];
                if (eventName) {
                    res.push(eventName);
                }
            });
            return res.join(' ');
        }

        this.bind = function (element, eventHandlers, pointerTypes) {

            pointerTypes = pointerTypes || ['mouse', 'touch', 'pointer'];

            var active = false;

            element.on(getEvents(pointerTypes, 'start'), function (event) {
                active = true;
                eventHandlers['start'] && eventHandlers['start'](getCoordinates(event), event);
            });

            // 当浏览器判定为滚动时，会触发touchcancel事件
            var events = getEvents(pointerTypes, 'cancel');
            if (events) {
                element.on(events, function(event) {
                    active = false;
                    eventHandlers['cancel'] && eventHandlers['cancel'](event);
                });
            }

            element.on(getEvents(pointerTypes, 'move'), function (event) {
                eventHandlers['move'] && eventHandlers['move'](getCoordinates(event), event);
            });

            element.on(getEvents(pointerTypes, 'end'), function (event) {
                eventHandlers['end'] && eventHandlers['end'](getCoordinates(event), event);
            });

        };

    };


    service.$inject = [];

    return service;
});
