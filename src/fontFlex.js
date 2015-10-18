/*jslint browser: true*/
/*global define, module, exports*/
(function (root, factory) {
    'use strict'; // For jslint

    // AMD. Register as an anonymous module. Wrap in function so we have access
    // to root via `this`.
    if (typeof define === 'function' && define.amd) {
        define([], factory);

    // Node. Does not work with strict CommonJS, but only CommonJS-like
    // environments that support module.exports, like Node.
    } else if (typeof exports === 'object') {
        module.exports = factory();

    // Browser globals.
    } else {
        root.FontFlex = factory();
    }
}(this, function () {
    'use strict';

    var FontFlex = function (options) {
        if (!this || !(this instanceof FontFlex)) {
            return new FontFlex(options);
        }

        if (!options) {
            options = {};
        }

        if (!options.target) {
            throw 'Provide a target to apply FontFlex';
        }

        this.target = Array.prototype.slice.call(document.querySelectorAll(options.target), 0);
        this.min    = options.min;
        this.max    = options.max;
        this.mid    = options.mid;

        this.ready();
    };

    FontFlex.prototype = {
        trigger: function (eventName) {
            var event = document.createEvent('HTMLEvents');
            event.initEvent(eventName, true, false);

            window.dispatchEvent(event);
        },
        ready: function () {
            window.addEventListener('resize', function () {
                var size = window.innerWidth / this.mid;

                if (size < this.min) {
                    size = this.min;
                }

                if (size > this.max) {
                    size = this.max;
                }

                this.target.forEach(function (els) {
                    els.style.fontSize = size + 'px';
                });
            }.bind(this), false);

            this.trigger('resize');
        }
    };

    return FontFlex;
}));