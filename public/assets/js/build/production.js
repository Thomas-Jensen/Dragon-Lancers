/**
 * Created by ThomasJensen on 23/12/14.
 */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-54943135-1', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');
/*!
 * Stellar.js v0.6.2
 * http://markdalgleish.com/projects/stellar.js
 *
 * Copyright 2014, Mark Dalgleish
 * This content is released under the MIT license
 * http://markdalgleish.mit-license.org
 */

;(function($, window, document, undefined) {

    var pluginName = 'stellar',
        defaults = {
            scrollProperty: 'scroll',
            positionProperty: 'position',
            horizontalScrolling: true,
            verticalScrolling: true,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: false,
            parallaxBackgrounds: true,
            parallaxElements: true,
            hideDistantElements: true,
            hideElement: function($elem) { $elem.hide(); },
            showElement: function($elem) { $elem.show(); }
        },

        scrollProperty = {
            scroll: {
                getLeft: function($elem) { return $elem.scrollLeft(); },
                setLeft: function($elem, val) { $elem.scrollLeft(val); },

                getTop: function($elem) { return $elem.scrollTop();	},
                setTop: function($elem, val) { $elem.scrollTop(val); }
            },
            position: {
                getLeft: function($elem) { return parseInt($elem.css('left'), 10) * -1; },
                getTop: function($elem) { return parseInt($elem.css('top'), 10) * -1; }
            },
            margin: {
                getLeft: function($elem) { return parseInt($elem.css('margin-left'), 10) * -1; },
                getTop: function($elem) { return parseInt($elem.css('margin-top'), 10) * -1; }
            },
            transform: {
                getLeft: function($elem) {
                    var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
                    return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0);
                },
                getTop: function($elem) {
                    var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
                    return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0);
                }
            }
        },

        positionProperty = {
            position: {
                setLeft: function($elem, left) { $elem.css('left', left); },
                setTop: function($elem, top) { $elem.css('top', top); }
            },
            transform: {
                setPosition: function($elem, left, startingLeft, top, startingTop) {
                    $elem[0].style[prefixedTransform] = 'translate3d(' + (left - startingLeft) + 'px, ' + (top - startingTop) + 'px, 0)';
                }
            }
        },

    // Returns a function which adds a vendor prefix to any CSS property name
        vendorPrefix = (function() {
            var prefixes = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                style = $('script')[0].style,
                prefix = '',
                prop;

            for (prop in style) {
                if (prefixes.test(prop)) {
                    prefix = prop.match(prefixes)[0];
                    break;
                }
            }

            if ('WebkitOpacity' in style) { prefix = 'Webkit'; }
            if ('KhtmlOpacity' in style) { prefix = 'Khtml'; }

            return function(property) {
                return prefix + (prefix.length > 0 ? property.charAt(0).toUpperCase() + property.slice(1) : property);
            };
        }()),

        prefixedTransform = vendorPrefix('transform'),

        supportsBackgroundPositionXY = $('<div />', { style: 'background:#fff' }).css('background-position-x') !== undefined,

        setBackgroundPosition = (supportsBackgroundPositionXY ?
            function($elem, x, y) {
                $elem.css({
                    'background-position-x': x,
                    'background-position-y': y
                });
            } :
            function($elem, x, y) {
                $elem.css('background-position', x + ' ' + y);
            }
        ),

        getBackgroundPosition = (supportsBackgroundPositionXY ?
            function($elem) {
                return [
                    $elem.css('background-position-x'),
                    $elem.css('background-position-y')
                ];
            } :
            function($elem) {
                return $elem.css('background-position').split(' ');
            }
        ),

        requestAnimFrame = (
        window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback) {
            setTimeout(callback, 1000 / 60);
        }
        );

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {
        init: function() {
            this.options.name = pluginName + '_' + Math.floor(Math.random() * 1e9);

            this._defineElements();
            this._defineGetters();
            this._defineSetters();
            this._handleWindowLoadAndResize();
            this._detectViewport();

            this.refresh({ firstLoad: true });

            if (this.options.scrollProperty === 'scroll') {
                this._handleScrollEvent();
            } else {
                this._startAnimationLoop();
            }
        },
        _defineElements: function() {
            if (this.element === document.body) this.element = window;
            this.$scrollElement = $(this.element);
            this.$element = (this.element === window ? $('body') : this.$scrollElement);
            this.$viewportElement = (this.options.viewportElement !== undefined ? $(this.options.viewportElement) : (this.$scrollElement[0] === window || this.options.scrollProperty === 'scroll' ? this.$scrollElement : this.$scrollElement.parent()) );
        },
        _defineGetters: function() {
            var self = this,
                scrollPropertyAdapter = scrollProperty[self.options.scrollProperty];

            this._getScrollLeft = function() {
                return scrollPropertyAdapter.getLeft(self.$scrollElement);
            };

            this._getScrollTop = function() {
                return scrollPropertyAdapter.getTop(self.$scrollElement);
            };
        },
        _defineSetters: function() {
            var self = this,
                scrollPropertyAdapter = scrollProperty[self.options.scrollProperty],
                positionPropertyAdapter = positionProperty[self.options.positionProperty],
                setScrollLeft = scrollPropertyAdapter.setLeft,
                setScrollTop = scrollPropertyAdapter.setTop;

            this._setScrollLeft = (typeof setScrollLeft === 'function' ? function(val) {
                setScrollLeft(self.$scrollElement, val);
            } : $.noop);

            this._setScrollTop = (typeof setScrollTop === 'function' ? function(val) {
                setScrollTop(self.$scrollElement, val);
            } : $.noop);

            this._setPosition = positionPropertyAdapter.setPosition ||
            function($elem, left, startingLeft, top, startingTop) {
                if (self.options.horizontalScrolling) {
                    positionPropertyAdapter.setLeft($elem, left, startingLeft);
                }

                if (self.options.verticalScrolling) {
                    positionPropertyAdapter.setTop($elem, top, startingTop);
                }
            };
        },
        _handleWindowLoadAndResize: function() {
            var self = this,
                $window = $(window);

            if (self.options.responsive) {
                $window.bind('load.' + this.name, function() {
                    self.refresh();
                });
            }

            $window.bind('resize.' + this.name, function() {
                self._detectViewport();

                if (self.options.responsive) {
                    self.refresh();
                }
            });
        },
        refresh: function(options) {
            var self = this,
                oldLeft = self._getScrollLeft(),
                oldTop = self._getScrollTop();

            if (!options || !options.firstLoad) {
                this._reset();
            }

            this._setScrollLeft(0);
            this._setScrollTop(0);

            this._setOffsets();
            this._findParticles();
            this._findBackgrounds();

            // Fix for WebKit background rendering bug
            if (options && options.firstLoad && /WebKit/.test(navigator.userAgent)) {
                $(window).load(function() {
                    var oldLeft = self._getScrollLeft(),
                        oldTop = self._getScrollTop();

                    self._setScrollLeft(oldLeft + 1);
                    self._setScrollTop(oldTop + 1);

                    self._setScrollLeft(oldLeft);
                    self._setScrollTop(oldTop);
                });
            }

            this._setScrollLeft(oldLeft);
            this._setScrollTop(oldTop);
        },
        _detectViewport: function() {
            var viewportOffsets = this.$viewportElement.offset(),
                hasOffsets = viewportOffsets !== null && viewportOffsets !== undefined;

            this.viewportWidth = this.$viewportElement.width();
            this.viewportHeight = this.$viewportElement.height();

            this.viewportOffsetTop = (hasOffsets ? viewportOffsets.top : 0);
            this.viewportOffsetLeft = (hasOffsets ? viewportOffsets.left : 0);
        },
        _findParticles: function() {
            var self = this,
                scrollLeft = this._getScrollLeft(),
                scrollTop = this._getScrollTop();

            if (this.particles !== undefined) {
                for (var i = this.particles.length - 1; i >= 0; i--) {
                    this.particles[i].$element.data('stellar-elementIsActive', undefined);
                }
            }

            this.particles = [];

            if (!this.options.parallaxElements) return;

            this.$element.find('[data-stellar-ratio]').each(function(i) {
                var $this = $(this),
                    horizontalOffset,
                    verticalOffset,
                    positionLeft,
                    positionTop,
                    marginLeft,
                    marginTop,
                    $offsetParent,
                    offsetLeft,
                    offsetTop,
                    parentOffsetLeft = 0,
                    parentOffsetTop = 0,
                    tempParentOffsetLeft = 0,
                    tempParentOffsetTop = 0;

                // Ensure this element isn't already part of another scrolling element
                if (!$this.data('stellar-elementIsActive')) {
                    $this.data('stellar-elementIsActive', this);
                } else if ($this.data('stellar-elementIsActive') !== this) {
                    return;
                }

                self.options.showElement($this);

                // Save/restore the original top and left CSS values in case we refresh the particles or destroy the instance
                if (!$this.data('stellar-startingLeft')) {
                    $this.data('stellar-startingLeft', $this.css('left'));
                    $this.data('stellar-startingTop', $this.css('top'));
                } else {
                    $this.css('left', $this.data('stellar-startingLeft'));
                    $this.css('top', $this.data('stellar-startingTop'));
                }

                positionLeft = $this.position().left;
                positionTop = $this.position().top;

                // Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
                marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
                marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

                offsetLeft = $this.offset().left - marginLeft;
                offsetTop = $this.offset().top - marginTop;

                // Calculate the offset parent
                $this.parents().each(function() {
                    var $this = $(this);

                    if ($this.data('stellar-offset-parent') === true) {
                        parentOffsetLeft = tempParentOffsetLeft;
                        parentOffsetTop = tempParentOffsetTop;
                        $offsetParent = $this;

                        return false;
                    } else {
                        tempParentOffsetLeft += $this.position().left;
                        tempParentOffsetTop += $this.position().top;
                    }
                });

                // Detect the offsets
                horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
                verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

                // Add our object to the particles collection
                self.particles.push({
                    $element: $this,
                    $offsetParent: $offsetParent,
                    isFixed: $this.css('position') === 'fixed',
                    horizontalOffset: horizontalOffset,
                    verticalOffset: verticalOffset,
                    startingPositionLeft: positionLeft,
                    startingPositionTop: positionTop,
                    startingOffsetLeft: offsetLeft,
                    startingOffsetTop: offsetTop,
                    parentOffsetLeft: parentOffsetLeft,
                    parentOffsetTop: parentOffsetTop,
                    stellarRatio: ($this.data('stellar-ratio') !== undefined ? $this.data('stellar-ratio') : 1),
                    width: $this.outerWidth(true),
                    height: $this.outerHeight(true),
                    isHidden: false
                });
            });
        },
        _findBackgrounds: function() {
            var self = this,
                scrollLeft = this._getScrollLeft(),
                scrollTop = this._getScrollTop(),
                $backgroundElements;

            this.backgrounds = [];

            if (!this.options.parallaxBackgrounds) return;

            $backgroundElements = this.$element.find('[data-stellar-background-ratio]');

            if (this.$element.data('stellar-background-ratio')) {
                $backgroundElements = $backgroundElements.add(this.$element);
            }

            $backgroundElements.each(function() {
                var $this = $(this),
                    backgroundPosition = getBackgroundPosition($this),
                    horizontalOffset,
                    verticalOffset,
                    positionLeft,
                    positionTop,
                    marginLeft,
                    marginTop,
                    offsetLeft,
                    offsetTop,
                    $offsetParent,
                    parentOffsetLeft = 0,
                    parentOffsetTop = 0,
                    tempParentOffsetLeft = 0,
                    tempParentOffsetTop = 0;

                // Ensure this element isn't already part of another scrolling element
                if (!$this.data('stellar-backgroundIsActive')) {
                    $this.data('stellar-backgroundIsActive', this);
                } else if ($this.data('stellar-backgroundIsActive') !== this) {
                    return;
                }

                // Save/restore the original top and left CSS values in case we destroy the instance
                if (!$this.data('stellar-backgroundStartingLeft')) {
                    $this.data('stellar-backgroundStartingLeft', backgroundPosition[0]);
                    $this.data('stellar-backgroundStartingTop', backgroundPosition[1]);
                } else {
                    setBackgroundPosition($this, $this.data('stellar-backgroundStartingLeft'), $this.data('stellar-backgroundStartingTop'));
                }

                // Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
                marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
                marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

                offsetLeft = $this.offset().left - marginLeft - scrollLeft;
                offsetTop = $this.offset().top - marginTop - scrollTop;

                // Calculate the offset parent
                $this.parents().each(function() {
                    var $this = $(this);

                    if ($this.data('stellar-offset-parent') === true) {
                        parentOffsetLeft = tempParentOffsetLeft;
                        parentOffsetTop = tempParentOffsetTop;
                        $offsetParent = $this;

                        return false;
                    } else {
                        tempParentOffsetLeft += $this.position().left;
                        tempParentOffsetTop += $this.position().top;
                    }
                });

                // Detect the offsets
                horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
                verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

                self.backgrounds.push({
                    $element: $this,
                    $offsetParent: $offsetParent,
                    isFixed: $this.css('background-attachment') === 'fixed',
                    horizontalOffset: horizontalOffset,
                    verticalOffset: verticalOffset,
                    startingValueLeft: backgroundPosition[0],
                    startingValueTop: backgroundPosition[1],
                    startingBackgroundPositionLeft: (isNaN(parseInt(backgroundPosition[0], 10)) ? 0 : parseInt(backgroundPosition[0], 10)),
                    startingBackgroundPositionTop: (isNaN(parseInt(backgroundPosition[1], 10)) ? 0 : parseInt(backgroundPosition[1], 10)),
                    startingPositionLeft: $this.position().left,
                    startingPositionTop: $this.position().top,
                    startingOffsetLeft: offsetLeft,
                    startingOffsetTop: offsetTop,
                    parentOffsetLeft: parentOffsetLeft,
                    parentOffsetTop: parentOffsetTop,
                    stellarRatio: ($this.data('stellar-background-ratio') === undefined ? 1 : $this.data('stellar-background-ratio'))
                });
            });
        },
        _reset: function() {
            var particle,
                startingPositionLeft,
                startingPositionTop,
                background,
                i;

            for (i = this.particles.length - 1; i >= 0; i--) {
                particle = this.particles[i];
                startingPositionLeft = particle.$element.data('stellar-startingLeft');
                startingPositionTop = particle.$element.data('stellar-startingTop');

                this._setPosition(particle.$element, startingPositionLeft, startingPositionLeft, startingPositionTop, startingPositionTop);

                this.options.showElement(particle.$element);

                particle.$element.data('stellar-startingLeft', null).data('stellar-elementIsActive', null).data('stellar-backgroundIsActive', null);
            }

            for (i = this.backgrounds.length - 1; i >= 0; i--) {
                background = this.backgrounds[i];

                background.$element.data('stellar-backgroundStartingLeft', null).data('stellar-backgroundStartingTop', null);

                setBackgroundPosition(background.$element, background.startingValueLeft, background.startingValueTop);
            }
        },
        destroy: function() {
            this._reset();

            this.$scrollElement.unbind('resize.' + this.name).unbind('scroll.' + this.name);
            this._animationLoop = $.noop;

            $(window).unbind('load.' + this.name).unbind('resize.' + this.name);
        },
        _setOffsets: function() {
            var self = this,
                $window = $(window);

            $window.unbind('resize.horizontal-' + this.name).unbind('resize.vertical-' + this.name);

            if (typeof this.options.horizontalOffset === 'function') {
                this.horizontalOffset = this.options.horizontalOffset();
                $window.bind('resize.horizontal-' + this.name, function() {
                    self.horizontalOffset = self.options.horizontalOffset();
                });
            } else {
                this.horizontalOffset = this.options.horizontalOffset;
            }

            if (typeof this.options.verticalOffset === 'function') {
                this.verticalOffset = this.options.verticalOffset();
                $window.bind('resize.vertical-' + this.name, function() {
                    self.verticalOffset = self.options.verticalOffset();
                });
            } else {
                this.verticalOffset = this.options.verticalOffset;
            }
        },
        _repositionElements: function() {
            var scrollLeft = this._getScrollLeft(),
                scrollTop = this._getScrollTop(),
                horizontalOffset,
                verticalOffset,
                particle,
                fixedRatioOffset,
                background,
                bgLeft,
                bgTop,
                isVisibleVertical = true,
                isVisibleHorizontal = true,
                newPositionLeft,
                newPositionTop,
                newOffsetLeft,
                newOffsetTop,
                i;

            // First check that the scroll position or container size has changed
            if (this.currentScrollLeft === scrollLeft && this.currentScrollTop === scrollTop && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight) {
                return;
            } else {
                this.currentScrollLeft = scrollLeft;
                this.currentScrollTop = scrollTop;
                this.currentWidth = this.viewportWidth;
                this.currentHeight = this.viewportHeight;
            }

            // Reposition elements
            for (i = this.particles.length - 1; i >= 0; i--) {
                particle = this.particles[i];

                fixedRatioOffset = (particle.isFixed ? 1 : 0);

                // Calculate position, then calculate what the particle's new offset will be (for visibility check)
                if (this.options.horizontalScrolling) {
                    newPositionLeft = (scrollLeft + particle.horizontalOffset + this.viewportOffsetLeft + particle.startingPositionLeft - particle.startingOffsetLeft + particle.parentOffsetLeft) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionLeft;
                    newOffsetLeft = newPositionLeft - particle.startingPositionLeft + particle.startingOffsetLeft;
                } else {
                    newPositionLeft = particle.startingPositionLeft;
                    newOffsetLeft = particle.startingOffsetLeft;
                }

                if (this.options.verticalScrolling) {
                    newPositionTop = (scrollTop + particle.verticalOffset + this.viewportOffsetTop + particle.startingPositionTop - particle.startingOffsetTop + particle.parentOffsetTop) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionTop;
                    newOffsetTop = newPositionTop - particle.startingPositionTop + particle.startingOffsetTop;
                } else {
                    newPositionTop = particle.startingPositionTop;
                    newOffsetTop = particle.startingOffsetTop;
                }

                // Check visibility
                if (this.options.hideDistantElements) {
                    isVisibleHorizontal = !this.options.horizontalScrolling || newOffsetLeft + particle.width > (particle.isFixed ? 0 : scrollLeft) && newOffsetLeft < (particle.isFixed ? 0 : scrollLeft) + this.viewportWidth + this.viewportOffsetLeft;
                    isVisibleVertical = !this.options.verticalScrolling || newOffsetTop + particle.height > (particle.isFixed ? 0 : scrollTop) && newOffsetTop < (particle.isFixed ? 0 : scrollTop) + this.viewportHeight + this.viewportOffsetTop;
                }

                if (isVisibleHorizontal && isVisibleVertical) {
                    if (particle.isHidden) {
                        this.options.showElement(particle.$element);
                        particle.isHidden = false;
                    }

                    this._setPosition(particle.$element, newPositionLeft, particle.startingPositionLeft, newPositionTop, particle.startingPositionTop);
                } else {
                    if (!particle.isHidden) {
                        this.options.hideElement(particle.$element);
                        particle.isHidden = true;
                    }
                }
            }

            // Reposition backgrounds
            for (i = this.backgrounds.length - 1; i >= 0; i--) {
                background = this.backgrounds[i];

                fixedRatioOffset = (background.isFixed ? 0 : 1);
                bgLeft = (this.options.horizontalScrolling ? (scrollLeft + background.horizontalOffset - this.viewportOffsetLeft - background.startingOffsetLeft + background.parentOffsetLeft - background.startingBackgroundPositionLeft) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueLeft);
                bgTop = (this.options.verticalScrolling ? (scrollTop + background.verticalOffset - this.viewportOffsetTop - background.startingOffsetTop + background.parentOffsetTop - background.startingBackgroundPositionTop) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueTop);

                setBackgroundPosition(background.$element, bgLeft, bgTop);
            }
        },
        _handleScrollEvent: function() {
            var self = this,
                ticking = false;

            var update = function() {
                self._repositionElements();
                ticking = false;
            };

            var requestTick = function() {
                if (!ticking) {
                    requestAnimFrame(update);
                    ticking = true;
                }
            };

            this.$scrollElement.bind('scroll.' + this.name, requestTick);
            requestTick();
        },
        _startAnimationLoop: function() {
            var self = this;

            this._animationLoop = function() {
                requestAnimFrame(self._animationLoop);
                self._repositionElements();
            };
            this._animationLoop();
        }
    };

    $.fn[pluginName] = function (options) {
        var args = arguments;
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            return this.each(function () {
                var instance = $.data(this, 'plugin_' + pluginName);
                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }
                if (options === 'destroy') {
                    $.data(this, 'plugin_' + pluginName, null);
                }
            });
        }
    };

    $[pluginName] = function(options) {
        var $window = $(window);
        return $window.stellar.apply($window, Array.prototype.slice.call(arguments, 0));
    };

    // Expose the scroll and position property function hashes so they can be extended
    $[pluginName].scrollProperty = scrollProperty;
    $[pluginName].positionProperty = positionProperty;

    // Expose the plugin class so it can be modified
    window.Stellar = Plugin;
}(jQuery, this, document));
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-flexbox-cssclasses-testprop-testallprops-domprefixes
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.flexbox=function(){return D("flexWrap")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document);
(function (root, factory) {
    if ( typeof define === 'function' && define.amd ) {
        define('smoothScroll', factory(root));
    } else if ( typeof exports === 'object' ) {
        module.exports = factory(root);
    } else {
        root.smoothScroll = factory(root);
    }
})(window || this, function (root) {

    'use strict';

    //
    // Variables
    //

    var smoothScroll = {}; // Object for public APIs
    var supports = !!document.querySelector && !!root.addEventListener; // Feature test
    var settings, eventTimeout, fixedHeader;

    // Default settings
    var defaults = {
        speed: 500,
        easing: 'easeInOutCubic',
        offset: 0,
        updateURL: true,
        callbackBefore: function () {},
        callbackAfter: function () {}
    };


    //
    // Methods
    //

    /**
     * A simple forEach() implementation for Arrays, Objects and NodeLists
     * @private
     * @param {Array|Object|NodeList} collection Collection of items to iterate
     * @param {Function} callback Callback function for each iteration
     * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
     */
    var forEach = function (collection, callback, scope) {
        if (Object.prototype.toString.call(collection) === '[object Object]') {
            for (var prop in collection) {
                if (Object.prototype.hasOwnProperty.call(collection, prop)) {
                    callback.call(scope, collection[prop], prop, collection);
                }
            }
        } else {
            for (var i = 0, len = collection.length; i < len; i++) {
                callback.call(scope, collection[i], i, collection);
            }
        }
    };

    /**
     * Merge defaults with user options
     * @private
     * @param {Object} defaults Default settings
     * @param {Object} options User options
     * @returns {Object} Merged values of defaults and options
     */
    var extend = function ( defaults, options ) {
        var extended = {};
        forEach(defaults, function (value, prop) {
            extended[prop] = defaults[prop];
        });
        forEach(options, function (value, prop) {
            extended[prop] = options[prop];
        });
        return extended;
    };

    /**
     * Get the closest matching element up the DOM tree
     * @param {Element} elem Starting element
     * @param {String} selector Selector to match against (class, ID, or data attribute)
     * @return {Boolean|Element} Returns false if not match found
     */
    var getClosest = function (elem, selector) {
        var firstChar = selector.charAt(0);
        for ( ; elem && elem !== document; elem = elem.parentNode ) {
            if ( firstChar === '.' ) {
                if ( elem.classList.contains( selector.substr(1) ) ) {
                    return elem;
                }
            } else if ( firstChar === '#' ) {
                if ( elem.id === selector.substr(1) ) {
                    return elem;
                }
            } else if ( firstChar === '[' ) {
                if ( elem.hasAttribute( selector.substr(1, selector.length - 2) ) ) {
                    return elem;
                }
            }
        }
        return false;
    };

    /**
     * Get the height of an element
     * @private
     * @param  {Node]} elem The element
     * @return {Number}     The element's height
     */
    var getHeight = function (elem) {
        return Math.max( elem.scrollHeight, elem.offsetHeight, elem.clientHeight );
    };

    /**
     * Escape special characters for use with querySelector
     * @private
     * @param {String} id The anchor ID to escape
     * @author Mathias Bynens
     * @link https://github.com/mathiasbynens/CSS.escape
     */
    var escapeCharacters = function ( id ) {
        var string = String(id);
        var length = string.length;
        var index = -1;
        var codeUnit;
        var result = '';
        var firstCodeUnit = string.charCodeAt(0);
        while (++index < length) {
            codeUnit = string.charCodeAt(index);
            // Note: there’s no need to special-case astral symbols, surrogate
            // pairs, or lone surrogates.

            // If the character is NULL (U+0000), then throw an
            // `InvalidCharacterError` exception and terminate these steps.
            if (codeUnit === 0x0000) {
                throw new InvalidCharacterError(
                    'Invalid character: the input contains U+0000.'
                );
            }

            if (
                // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
            // U+007F, […]
            (codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
                // If the character is the first character and is in the range [0-9]
                // (U+0030 to U+0039), […]
            (index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
                // If the character is the second character and is in the range [0-9]
                // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
            (
            index === 1 &&
            codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
            firstCodeUnit === 0x002D
            )
            ) {
                // http://dev.w3.org/csswg/cssom/#escape-a-character-as-code-point
                result += '\\' + codeUnit.toString(16) + ' ';
                continue;
            }

            // If the character is not handled by one of the above rules and is
            // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
            // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
            // U+005A), or [a-z] (U+0061 to U+007A), […]
            if (
                codeUnit >= 0x0080 ||
                codeUnit === 0x002D ||
                codeUnit === 0x005F ||
                codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
                codeUnit >= 0x0041 && codeUnit <= 0x005A ||
                codeUnit >= 0x0061 && codeUnit <= 0x007A
            ) {
                // the character itself
                result += string.charAt(index);
                continue;
            }

            // Otherwise, the escaped character.
            // http://dev.w3.org/csswg/cssom/#escape-a-character
            result += '\\' + string.charAt(index);

        }
        return result;
    };

    /**
     * Calculate the easing pattern
     * @private
     * @link https://gist.github.com/gre/1650294
     * @param {String} type Easing pattern
     * @param {Number} time Time animation should take to complete
     * @returns {Number}
     */
    var easingPattern = function ( type, time ) {
        var pattern;
        if ( type === 'easeInQuad' ) pattern = time * time; // accelerating from zero velocity
        if ( type === 'easeOutQuad' ) pattern = time * (2 - time); // decelerating to zero velocity
        if ( type === 'easeInOutQuad' ) pattern = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
        if ( type === 'easeInCubic' ) pattern = time * time * time; // accelerating from zero velocity
        if ( type === 'easeOutCubic' ) pattern = (--time) * time * time + 1; // decelerating to zero velocity
        if ( type === 'easeInOutCubic' ) pattern = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
        if ( type === 'easeInQuart' ) pattern = time * time * time * time; // accelerating from zero velocity
        if ( type === 'easeOutQuart' ) pattern = 1 - (--time) * time * time * time; // decelerating to zero velocity
        if ( type === 'easeInOutQuart' ) pattern = time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time; // acceleration until halfway, then deceleration
        if ( type === 'easeInQuint' ) pattern = time * time * time * time * time; // accelerating from zero velocity
        if ( type === 'easeOutQuint' ) pattern = 1 + (--time) * time * time * time * time; // decelerating to zero velocity
        if ( type === 'easeInOutQuint' ) pattern = time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time; // acceleration until halfway, then deceleration
        return pattern || time; // no easing, no acceleration
    };

    /**
     * Calculate how far to scroll
     * @private
     * @param {Element} anchor The anchor element to scroll to
     * @param {Number} headerHeight Height of a fixed header, if any
     * @param {Number} offset Number of pixels by which to offset scroll
     * @returns {Number}
     */
    var getEndLocation = function ( anchor, headerHeight, offset ) {
        var location = 0;
        if (anchor.offsetParent) {
            do {
                location += anchor.offsetTop;
                anchor = anchor.offsetParent;
            } while (anchor);
        }
        location = location - headerHeight - offset;
        return location >= 0 ? location : 0;
    };

    /**
     * Determine the document's height
     * @private
     * @returns {Number}
     */
    var getDocumentHeight = function () {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    };

    /**
     * Convert data-options attribute into an object of key/value pairs
     * @private
     * @param {String} options Link-specific options as a data attribute string
     * @returns {Object}
     */
    var getDataOptions = function ( options ) {
        return !options || !(typeof JSON === 'object' && typeof JSON.parse === 'function') ? {} : JSON.parse( options );
    };

    /**
     * Update the URL
     * @private
     * @param {Element} anchor The element to scroll to
     * @param {Boolean} url Whether or not to update the URL history
     */
    var updateUrl = function ( anchor, url ) {
        if ( history.pushState && (url || url === 'true') ) {
            history.pushState( null, null, [root.location.protocol, '//', root.location.host, root.location.pathname, root.location.search, anchor].join('') );
        }
    };

    /**
     * Start/stop the scrolling animation
     * @public
     * @param {Element} toggle The element that toggled the scroll event
     * @param {Element} anchor The element to scroll to
     * @param {Object} options
     */
    smoothScroll.animateScroll = function ( toggle, anchor, options ) {

        // Options and overrides
        var settings = extend( settings || defaults, options || {} );  // Merge user options with defaults
        var overrides = getDataOptions( toggle ? toggle.getAttribute('data-options') : null );
        settings = extend( settings, overrides );
        anchor = '#' + escapeCharacters(anchor.substr(1)); // Escape special characters and leading numbers

        // Selectors and variables
        var anchorElem = anchor === '#' ? document.documentElement : document.querySelector(anchor);
        var startLocation = root.pageYOffset; // Current location on the page
        if ( !fixedHeader ) { fixedHeader = document.querySelector('[data-scroll-header]'); }  // Get the fixed header if not already set
        var headerHeight = fixedHeader === null ? 0 : ( getHeight( fixedHeader ) + fixedHeader.offsetTop ); // Get the height of a fixed header if one exists
        var endLocation = getEndLocation( anchorElem, headerHeight, parseInt(settings.offset, 10) ); // Scroll to location
        var animationInterval; // interval timer
        var distance = endLocation - startLocation; // distance to travel
        var documentHeight = getDocumentHeight();
        var timeLapsed = 0;
        var percentage, position;

        // Update URL
        updateUrl(anchor, settings.updateURL);

        /**
         * Stop the scroll animation when it reaches its target (or the bottom/top of page)
         * @private
         * @param {Number} position Current position on the page
         * @param {Number} endLocation Scroll to location
         * @param {Number} animationInterval How much to scroll on this loop
         */
        var stopAnimateScroll = function (position, endLocation, animationInterval) {
            var currentLocation = root.pageYOffset;
            if ( position == endLocation || currentLocation == endLocation || ( (root.innerHeight + currentLocation) >= documentHeight ) ) {
                clearInterval(animationInterval);
                anchorElem.focus();
                settings.callbackAfter( toggle, anchor ); // Run callbacks after animation complete
            }
        };

        /**
         * Loop scrolling animation
         * @private
         */
        var loopAnimateScroll = function () {
            timeLapsed += 16;
            percentage = ( timeLapsed / parseInt(settings.speed, 10) );
            percentage = ( percentage > 1 ) ? 1 : percentage;
            position = startLocation + ( distance * easingPattern(settings.easing, percentage) );
            root.scrollTo( 0, Math.floor(position) );
            stopAnimateScroll(position, endLocation, animationInterval);
        };

        /**
         * Set interval timer
         * @private
         */
        var startAnimateScroll = function () {
            settings.callbackBefore( toggle, anchor ); // Run callbacks before animating scroll
            animationInterval = setInterval(loopAnimateScroll, 16);
        };

        /**
         * Reset position to fix weird iOS bug
         * @link https://github.com/cferdinandi/smooth-scroll/issues/45
         */
        if ( root.pageYOffset === 0 ) {
            root.scrollTo( 0, 0 );
        }

        // Start scrolling animation
        startAnimateScroll();

    };

    /**
     * If smooth scroll element clicked, animate scroll
     * @private
     */
    var eventHandler = function (event) {
        var toggle = getClosest(event.target, '[data-scroll]');
        if ( toggle && toggle.tagName.toLowerCase() === 'a' ) {
            event.preventDefault(); // Prevent default click event
            smoothScroll.animateScroll( toggle, toggle.hash, settings); // Animate scroll
        }
    };

    /**
     * On window scroll and resize, only run events at a rate of 15fps for better performance
     * @private
     * @param  {Function} eventTimeout Timeout function
     * @param  {Object} settings
     */
    var eventThrottler = function (event) {
        if ( !eventTimeout ) {
            eventTimeout = setTimeout(function() {
                eventTimeout = null; // Reset timeout
                var headerHeight;
                headerHeight = fixedHeader === null ? 0 : ( getHeight( fixedHeader ) + fixedHeader.offsetTop ); // Get the height of a fixed header if one exists
            }, 66);
        }
    };

    /**
     * Destroy the current initialization.
     * @public
     */
    smoothScroll.destroy = function () {

        // If plugin isn't already initialized, stop
        if ( !settings ) return;

        // Remove event listeners
        document.removeEventListener( 'click', eventHandler, false );
        root.removeEventListener( 'resize', eventThrottler, false );

        // Reset varaibles
        settings = null;
        eventTimeout = null;
        fixedHeader = null;
    };

    /**
     * Initialize Smooth Scroll
     * @public
     * @param {Object} options User settings
     */
    smoothScroll.init = function ( options ) {

        // feature test
        if ( !supports ) return;

        // Destroy any existing initializations
        smoothScroll.destroy();

        // Selectors and variables
        settings = extend( defaults, options || {} ); // Merge user options with defaults
        fixedHeader = document.querySelector('[data-scroll-header]'); // Get the fixed header

        // When a toggle is clicked, run the click handler
        document.addEventListener('click', eventHandler, false );
        if ( fixedHeader ) { root.addEventListener( 'resize', eventThrottler, false ); }

    };


    //
    // Public APIs
    //

    return smoothScroll;

});
/**
 * Created by ThomasJensen on 23/12/14.
 */
(function() {
    'use strict';

    // Set the name of the "hidden" property and the change event for visibility
    var hidden, visibilityChange;
    if (typeof document.hidden !== "undefined") {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else if (typeof document.mozHidden !== "undefined") { // Firefox up to v17
        hidden = "mozHidden";
        visibilityChange = "mozvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") { // Chrome up to v32, Android up to v4.4, Blackberry up to v10
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }

    var videoElement = document.getElementById("videoElement");

    // If the page is hidden, pause the video;
    // if the page is shown, play the video
    function handleVisibilityChange() {
        if (document[hidden]) {
            videoElement.pause();
        } else {
            videoElement.play();
        }
    }

    // Warn if the browser doesn't support addEventListener or the Page Visibility API
    if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
        alert("This demo requires a modern browser that supports the Page Visibility API.");
    } else {
        // Handle page visibility change
        document.addEventListener(visibilityChange, handleVisibilityChange, false);
    }

})();
/**
 * Created by ThomasJensen on 23/12/14.
 */
$(document).ready(function(){
    $('.menu-button').click(function(event){
        event.stopPropagation();
        $('.menu').toggle();
    });

    $(document).click(function(event) {


        if(!$(event.target).closest('.menu').length) { //checks if clicked element is ancestor
            if($('.menu').is(":visible")) {
                $('.menu').removeClass('animate fadeIn');
                $('.menu').addClass('animate fadeOut');
                $('.bar-1').removeClass('cross-icon1');
                $('.bar-2').removeClass('cross-icon2');
                $('.bar-3').removeClass('cross-icon3');
                $('.menu').hide();
            }
        }
    })

    $('.menu-button').hover(function() {
        $('.bar1').addClass('menu-hover');
        $('.bar2').toggleClass('menu-hover');
        $('.bar3').toggleClass('menu-hover');
    });

    $('.menu-button').hover(function(){
        $('.bar-1').toggleClass('menu-hover');
        $('.bar-2').toggleClass('menu-hover');
        $('.bar-3').toggleClass('menu-hover');
    });

    $('.menu-button').click(function(){
        $('.bar-1').toggleClass('cross-icon1');
        $('.bar-2').toggleClass('cross-icon2');
        $('.bar-3').toggleClass('cross-icon3');
        $('.menu').removeClass('animate fadeOut');
        $('.menu').toggleClass('animate fadeIn');
    });

    $('.thomas').hover(function() {
        $('.dl-text').toggle();
        $('.thomas-text').toggle();
        $(this).toggleClass('active');
    })

    $('.ilona').hover(function() {
        $('.dl-text').toggle();
        $('.ilona-text').toggle();
        $(this).toggleClass('active');
        $('.1').focus();

    })

    $('.1').hover(function(){
        $('.title1').toggle();
        $('.1').toggleClass('team-spanHover');
        $('.text1').toggle();
        $('.text1').toggleClass('team-headerHover');

    })

    $('.2').hover(function(){
        $('.title2').toggle();
        $('.2').toggleClass('team-spanHover');
        $('.text2').toggle();
        $('.text2').toggleClass('team-headerHover');

    })

    $('.3').hover(function(){
        $('.title3').toggle();
        $('.3').toggleClass('team-spanHover');
        $('.text3').toggle();
        $('.text3').toggleClass('team-headerHover');

    })

    $('.4').hover(function(){
        $('.title4').toggle();
        $('.4').toggleClass('team-spanHover');
        $('.text4').toggle();
        $('.text4').toggleClass('team-headerHover');

    })

    $('.5').hover(function(){
        $('.title5').toggle();
        $('.5').toggleClass('team-spanHover');
        $('.text5').toggle();
        $('.text5').toggleClass('team-headerHover');

    })

    $.fn.is_on_screen = function(){

        var win = $(window);

        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    };

    if( $('.home').length > 0 ) { // if target element exists in DOM
        if( $('.home').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.home-link').addClass('active'); // log info
        } else {
            $('.home-link').removeClass('active'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.home').length > 0 ) { // if target element exists in DOM
            if( $('.home').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.home-link').addClass('active'); // log info
            } else {
                $('.home-link').removeClass('active'); // log info
            }
        }
    });


    if( $('#videoElement').length > 0 ) { // if target element exists in DOM
        if( $('#videoElement').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('#videoElement')[0].play(); // log info
        } else {
            $('#videoElement')[0].pause(); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('#videoElement').length > 0 ) { // if target element exists in DOM
            if( $('#videoElement').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('#videoElement')[0].play(); // log info
            } else {
                $('#videoElement')[0].pause(); // log info
            }
        }
    });


    if( $('#videoElement1').length > 0 ) { // if target element exists in DOM
        if( $('#videoElement1').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('#videoElement1')[0].play(); // log info
        } else {
            $('#videoElement1')[0].pause(); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('#videoElement1').length > 0 ) { // if target element exists in DOM
            if( $('#videoElement1').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('#videoElement1')[0].play(); // log info
            } else {
                $('#videoElement1')[0].pause(); // log info
            }
        }
    });


    if( $('.philosophy').length > 0 ) { // if target element exists in DOM
        if( $('.philosophy').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.philosophy-link').addClass('active'); // log info
        } else {
            $('.philosophy-link').removeClass('active'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.philosophy').length > 0 ) { // if target element exists in DOM
            if( $('.philosophy').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.philosophy-link').addClass('active'); // log info
            } else {
                $('.philosophy-link').removeClass('active'); // log info
            }
        }
    });



    if( $('.services').length > 0 ) { // if target element exists in DOM
        if( $('.services').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.services-link').addClass('active'); // log info
        } else {
            $('.services-link').removeClass('active'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.services').length > 0 ) { // if target element exists in DOM
            if( $('.services').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.services-link').addClass('active'); // log info
            } else {
                $('.services-link').removeClass('active'); // log info
            }
        }
    });




    if( $('.work').length > 0 ) { // if target element exists in DOM
        if( $('.work').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.work-link').addClass('active'); // log info
        } else {
            $('.work-link').removeClass('active'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.work').length > 0 ) { // if target element exists in DOM
            if( $('.work').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.work-link').addClass('active'); // log info
            } else {
                $('.work-link').removeClass('active'); // log info
            }
        }
    });


    if( $('.philosophy-right-top h2').length > 0 ) { // if target element exists in DOM
        if( $('.philosophy-right-top h2').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.philosophy-right-top h2').addClass('animate fadeIn'); // log info
        } else {
            $('.philosophy-right-top h2').removeClass('animate fadeIn'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.philosophy-right-top h2').length > 0 ) { // if target element exists in DOM
            if( $('.philosophy-right-top h2').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.philosophy-right-top h2').addClass('animate fadeIn'); // log info
            } else {
                $('.philosophy-right-top h2').removeClass('animate fadeIn'); // log info
            }
        }
    });


    if( $('.philosophy-left article h2').length > 0 ) { // if target element exists in DOM
        if( $('.philosophy-left article h2').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.philosophy-left article h2').addClass('animate fadeIn'); // log info
        } else {
            $('.philosophy-left article h2').removeClass('animate fadeIn'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.philosophy-left article h2').length > 0 ) { // if target element exists in DOM
            if( $('.philosophy-left article h2').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.philosophy-left article h2').addClass('animate fadeIn'); // log info
            } else {
                $('.philosophy-left article h2').removeClass('animate fadeIn'); // log info
            }
        }
    });


    if( $('.work-more').length > 0 ) { // if target element exists in DOM
        if( $('.work-more').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.work-more').addClass('animate fadeInUp'); // log info
        } else {
            $('.work-more').removeClass('animate fadeInUp'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.work-more').length > 0 ) { // if target element exists in DOM
            if( $('.work-more').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.work-more').addClass('animate fadeInUp'); // log info
            } else {
                $('.work-more').removeClass('animate fadeInUp'); // log info
            }
        }
    });


    if( $('.print').length > 0 ) { // if target element exists in DOM
        if( $('.print').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.print').addClass('animate fadeInLeft'); // add animate class
            $('.web').addClass('animate fadeInLeft'); // add animate class
            $('.apps').addClass('animate fadeInRight'); // add animate class
            $('.subs').addClass('animate fadeInRight'); // add animate class
        } else {
            $('.print').removeClass('animate fadeInLeft'); // remove animate class
            $('.web').removeClass('animate fadeInLeft'); // remove animate class
            $('.apps').removeClass('animate fadeInRight'); // remove animate class
            $('.subs').removeClass('animate fadeInRight'); // remove animate class
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.print').length > 0 ) { // if target element exists in DOM
            if( $('.print').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.print').addClass('animate fadeInLeft'); // add animate class
                $('.web').addClass('animate fadeInLeft'); // add animate class
                $('.apps').addClass('animate fadeInRight'); // add animate class
                $('.subs').addClass('animate fadeInRight'); // add animate class

            } else {
                $('.print').removeClass('animate fadeInLeft'); // remove animate class
                $('.web').removeClass('animate fadeInLeft'); // remove animate class
                $('.apps').removeClass('animate fadeInRight'); // remove animate class
                $('.subs').removeClass('animate fadeInRight'); // remove animate class
            }
        }
    });

    if( $('.qualities-small').length > 0 ) { // if target element exists in DOM
        if( $('.qualities-small').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.qualities-small').addClass('animate fadeIn'); // log info
        } else {
            $('.qualities-small').removeClass('animate fadeIn'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.qualities-small').length > 0 ) { // if target element exists in DOM
            if( $('.qualities-small').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.qualities-small').addClass('animate fadeIn'); // log info
            } else {
                $('.qualities-small').removeClass('animate fadeIn'); // log info
            }
        }
    });


    if( $('.team').length > 0 ) { // if target element exists in DOM
        if( $('.team').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.team-link').addClass('active'); // log info
            $('.left').addClass('animate fadeIn'); // add animate class
            $('.center').addClass('animate fadeIn'); // add animate class
            $('.right').addClass('animate fadeIn'); // add animate class
        } else {
            $('.team-link').removeClass('active'); // log info
            $('.left').removeClass('animate fadeIn'); // add animate class
            $('.center').removeClass('animate fadeIn'); // add animate class
            $('.right').removeClass('animate fadeIn'); // add animate class
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.team').length > 0 ) { // if target element exists in DOM
            if( $('.team').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.team-link').addClass('active'); // log info
                $('.left').addClass('animate fadeIn'); // add animate class
                $('.center').addClass('animate fadeIn'); // add animate class
                $('.right').addClass('animate fadeIn'); // add animate class
            } else {
                $('.team-link').removeClass('active'); // log info
                $('.left').removeClass('animate fadeIn'); // add animate class
                $('.center').removeClass('animate fadeIn'); // add animate class
                $('.right').removeClass('animate fadeIn'); // add animate class
            }
        }
    });




    if( $('.submit').length > 0 ) { // if target element exists in DOM
        if( $('.submit').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.submit').addClass('animate fadeIn'); // log info
            $('.name').addClass('animate fadeInLeft'); // log info
            $('.email').addClass('animate fadeInLeft'); // log info
            $('.message').addClass('animate fadeInLeft'); // log info

        } else {
            $('.submit').removeClass('animate fadeIn'); // log info
            $('.name').removeClass('animate fadeInLeft'); // log info
            $('.email').removeClass('animate fadeInLeft'); // log info
            $('.message').removeClass('animate fadeInLeft'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.submit').length > 0 ) { // if target element exists in DOM
            if( $('.submit').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.submit').addClass('animate fadeIn'); // log info
                $('.name').addClass('animate fadeInLeft'); // log info
                $('.email').addClass('animate fadeInLeft'); // log info
                $('.message').addClass('animate fadeInLeft'); // log info
            } else {
                $('.submit').removeClass('animate fadeIn'); // log info
                $('.name').removeClass('animate fadeInLeft'); // log info
                $('.email').removeClass('animate fadeInLeft'); // log info
                $('.message').removeClass('animate fadeInLeft'); // log info
            }
        }
    });



    if( $('.contact').length > 0 ) { // if target element exists in DOM
        if( $('.contact').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.contact-link').addClass('active'); // log info
        } else {
            $('.contact-link').removeClass('active'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.contact').length > 0 ) { // if target element exists in DOM
            if( $('.contact').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.contact-link').addClass('active'); // log info
            } else {
                $('.contact-link').removeClass('active'); // log info
            }
        }
    });

    function checkPosition() {
        if (window.matchMedia('(max-width: 480px)').matches) {
            $('.philosophy-right-top').prepend('<img src="/img/POSTER-LANDING%20PAGE.png">');
        } else {
            $('.philosophy-right-top').prepend('')
        }
    }

    if( $('.videoElement').length > 0 ) { // if target element exists in DOM
        if( $('.videoElement').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.videoElement')[0].play(); // log info
        } else {
            $('.videoElement')[0].pause(); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.videoElement').length > 0 ) { // if target element exists in DOM
            if( $('.videoElement').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.videoElement')[0].play(); // log info
            } else {
                $('.videoElement')[0].pause(); // log info
            }
        }
    });

    $('.services-print').click(function() {
        $('.service-txt-print').show();
        $('.service-txt-web').hide();
        $('.service-txt-apps').hide();
        $('.service-txt-subs').hide();
        $('.service-img-print').show();
        $('.service-img-web').hide();
        $('.service-img-apps').hide();
        $('.service-img-subs').hide();
        $('.services-print').addClass('active-svg');
        $('.services-web').removeClass('active-svg');
        $('.services-apps').removeClass('active-svg');
        $('.services-subs').removeClass('active-svg');

    })

    $('.services-web').click(function() {
        $('.service-txt-web').show();
        $('.service-txt-print').hide();
        $('.service-txt-apps').hide();
        $('.service-txt-subs').hide();
        $('.service-img-print').hide();
        $('.service-img-web').show();
        $('.service-img-apps').hide();
        $('.service-img-subs').hide();
        $('.services-web').addClass('active-svg');
        $('.services-print').removeClass('active-svg');
        $('.services-apps').removeClass('active-svg');
        $('.services-subs').removeClass('active-svg');
    })

    $('.services-apps').click(function() {
        $('.service-txt-apps').show();
        $('.service-txt-print').hide();
        $('.service-txt-web').hide();
        $('.service-txt-subs').hide();
        $('.service-img-print').hide();
        $('.service-img-web').hide();
        $('.service-img-apps').show();
        $('.service-img-subs').hide();
        $('.services-apps').addClass('active-svg');
        $('.services-print').removeClass('active-svg');
        $('.services-web').removeClass('active-svg');
        $('.services-subs').removeClass('active-svg');
    })

    $('.services-subs').click(function() {
        $('.service-txt-subs').show();
        $('.service-txt-print').hide();
        $('.service-txt-web').hide();
        $('.service-txt-apps').hide();
        $('.service-img-print').hide();
        $('.service-img-web').hide();
        $('.service-img-apps').hide();
        $('.service-img-subs').show();
        $('.services-subs').addClass('active-svg');
        $('.services-print').removeClass('active-svg');
        $('.services-apps').removeClass('active-svg');
        $('.services-web').removeClass('active-svg');
    })

    $('.service-contact').click(function() {
        $(this).toggleClass('clicked');
    });

    $('.print').hover(function(){
        $('.print').toggleClass('active-svg-text');

    });
    $('.web').hover(function(){
        $('.web').toggleClass('active-svg-text');

    });
    $('.apps').hover(function(){
        $('.apps').toggleClass('active-svg-text2');

    });
    $('.subs').hover(function(){
        $('.subs').toggleClass('active-svg-text3');

    });




});