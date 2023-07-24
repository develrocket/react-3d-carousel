import * as React from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".Carousel-module_verticalContainer__payvU {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  overflow: hidden;\n  z-index: 100;\n}\n\n.Carousel-module_horizontalContainer__K5hH2 {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.Carousel-module_horizontalContainer__K5hH2 button {\n  z-index: 100;\n}\n\n.Carousel-module_arrowButtonContainer__xW7M2 {\n  overflow: hidden;\n  background: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.1s;\n  margin: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.Carousel-module_arrowButtonContainer__xW7M2:hover {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.Carousel-module_arrowButtonContainer__xW7M2.Carousel-module_threed__xcY2m {\n  height: 92%;\n}\n.Carousel-module_arrowButtonContainer__xW7M2.Carousel-module_flat__Z4cEC {\n  height: 100%;\n}\n.Carousel-module_arrowButtonContainer__xW7M2.Carousel-module_left__21poc {\n  position: absolute;\n  left: max((100% - 1310px) / 2, 20px);\n  z-index: 100;\n  width: 40px;\n  height: 40px;\n  background: #272B30;\n  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.0784313725);\n  border: 1px solid rgba(255, 255, 255, 0.0392156863);\n  border-radius: 40px;\n  color: transparent;\n  font-size: 0;\n  line-height: 0;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.Carousel-module_arrowButtonContainer__xW7M2.Carousel-module_left__21poc:hover {\n  filter: brightness(1.5);\n}\n.Carousel-module_arrowButtonContainer__xW7M2.Carousel-module_left__21poc::before {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 2px;\n  transform: rotate(45deg) translate(2.5px, 2.5px);\n  background: #fff;\n  left: 12px;\n}\n.Carousel-module_arrowButtonContainer__xW7M2.Carousel-module_left__21poc::after {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 2px;\n  transform: rotate(-45deg) translate(2.5px, -2.5px);\n  background: #fff;\n  left: 12px;\n}\n.Carousel-module_arrowButtonContainer__xW7M2.Carousel-module_right__XvjKu {\n  position: absolute;\n  right: max((100% - 1310px) / 2, 20px);\n  z-index: 100;\n  width: 40px;\n  height: 40px;\n  background: #272B30;\n  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.0784313725);\n  border: 1px solid rgba(255, 255, 255, 0.0392156863);\n  border-radius: 40px;\n  color: transparent;\n  font-size: 0;\n  line-height: 0;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.Carousel-module_arrowButtonContainer__xW7M2.Carousel-module_right__XvjKu:hover {\n  filter: brightness(1.5);\n}\n.Carousel-module_arrowButtonContainer__xW7M2.Carousel-module_right__XvjKu::before {\n  content: \"\";\n  position: absolute !important;\n  width: 10px;\n  height: 2px;\n  transform: rotate(45deg) translate(-2.5px, -2.5px);\n  background: #fff;\n  right: 12px;\n}\n.Carousel-module_arrowButtonContainer__xW7M2.Carousel-module_right__XvjKu::after {\n  content: \"\";\n  position: absolute !important;\n  width: 10px;\n  height: 2px;\n  transform: rotate(-45deg) translate(-2.5px, 2.5px);\n  background: #fff;\n  right: 12px;\n}\n\n.Carousel-module_navContainer__KFnsV {\n  margin-top: 20px;\n  z-index: 200;\n  width: auto;\n}\n.Carousel-module_navContainer__KFnsV.Carousel-module_inside__Ko54Z {\n  position: relative;\n  bottom: 64px;\n  padding: 4px;\n  border-radius: 8px;\n}\n\n.Carousel-module_swipeContainer__lDozS {\n  display: grid;\n  grid-template-columns: auto;\n  align-items: center;\n  justify-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.Carousel-module_itemContainer__yTu7G {\n  grid-column: 1;\n  grid-row: 1;\n  width: 0;\n  z-index: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.5s, width 0.5s, height 0.5s;\n  height: 100%;\n  opacity: 0;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_threed__xcY2m {\n  width: 53%;\n  transform: scale(0.4);\n  transition: all 0.5s;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_flat__Z4cEC {\n  width: 100%;\n  transform: translateX(0%);\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_showing__9fo-5 {\n  opacity: 1;\n  z-index: 10;\n  transition: transform 0.5s, width 0.5s, height 0.5s;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_showing__9fo-5.Carousel-module_threed__xcY2m {\n  transform: scale(1);\n  transition: transform 0.5s, width 0.5s, height 0.5s, z-index 0.1s cubic-bezier(0, 1, 1, 0);\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_showing__9fo-5.Carousel-module_flat__Z4cEC {\n  animation: none;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_prev__ndFbQ {\n  z-index: 9;\n  opacity: 0.5 !important;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_prev__ndFbQ.Carousel-module_leftClick__asWrf {\n  z-index: 9;\n  opacity: 0.4;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_prev__ndFbQ.Carousel-module_threed__xcY2m {\n  opacity: 1;\n  transform: translateX(-40%) scale(0.8);\n  cursor: pointer;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_prev__ndFbQ.Carousel-module_flat__Z4cEC {\n  opacity: 0;\n  transform: translateX(-100%);\n  cursor: pointer;\n  transition: transform 0.5s, width 0.5s, height 0.5s, opacity 0.5s;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_doublePrev__8FOli {\n  z-index: 8;\n  opacity: 0.15 !important;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_doublePrev__8FOli.Carousel-module_leftClick__asWrf {\n  z-index: 8;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_doublePrev__8FOli.Carousel-module_threed__xcY2m {\n  opacity: 1;\n  transform: translateX(-65%) scale(0.5);\n  cursor: pointer;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_doublePrev__8FOli.Carousel-module_flat__Z4cEC {\n  opacity: 0;\n  transform: translateX(-100%);\n  cursor: pointer;\n  transition: transform 0.5s, width 0.5s, height 0.5s, opacity 0.5s;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_next__jDsrB {\n  z-index: 9;\n  opacity: 0.5 !important;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_next__jDsrB.Carousel-module_leftClick__asWrf {\n  z-index: 9;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_next__jDsrB.Carousel-module_threed__xcY2m {\n  opacity: 1;\n  transform: translateX(40%) scale(0.8);\n  cursor: pointer;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_next__jDsrB.Carousel-module_flat__Z4cEC {\n  opacity: 0;\n  transform: translateX(100%);\n  cursor: pointer;\n  transition: transform 0.5s, width 0.5s, height 0.5s, opacity 0.5s;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_doubleNext__Nnn4q {\n  z-index: 8;\n  opacity: 0.15 !important;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_doubleNext__Nnn4q.Carousel-module_leftClick__asWrf {\n  z-index: 8;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_doubleNext__Nnn4q.Carousel-module_threed__xcY2m {\n  opacity: 1;\n  transform: translateX(65%) scale(0.5);\n  cursor: pointer;\n}\n.Carousel-module_itemContainer__yTu7G.Carousel-module_doubleNext__Nnn4q.Carousel-module_flat__Z4cEC {\n  opacity: 0;\n  transform: translateX(100%);\n  cursor: pointer;\n  transition: transform 0.5s, width 0.5s, height 0.5s, opacity 0.5s;\n}\n\n.Carousel-module_avoid-clicks__Vre3z {\n  pointer-events: none;\n}\n\n@keyframes Carousel-module_opacityAnimation__N9Dhr {\n  0% {\n    opacity: 1;\n  }\n  25% {\n    opacity: 0.85;\n  }\n  100% {\n    opacity: 1;\n  }\n}";
var styles$2 = {"verticalContainer":"Carousel-module_verticalContainer__payvU","horizontalContainer":"Carousel-module_horizontalContainer__K5hH2","arrowButtonContainer":"Carousel-module_arrowButtonContainer__xW7M2","threed":"Carousel-module_threed__xcY2m","flat":"Carousel-module_flat__Z4cEC","left":"Carousel-module_left__21poc","right":"Carousel-module_right__XvjKu","navContainer":"Carousel-module_navContainer__KFnsV","inside":"Carousel-module_inside__Ko54Z","swipeContainer":"Carousel-module_swipeContainer__lDozS","itemContainer":"Carousel-module_itemContainer__yTu7G","showing":"Carousel-module_showing__9fo-5","prev":"Carousel-module_prev__ndFbQ","leftClick":"Carousel-module_leftClick__asWrf","doublePrev":"Carousel-module_doublePrev__8FOli","next":"Carousel-module_next__jDsrB","doubleNext":"Carousel-module_doubleNext__Nnn4q","avoid-clicks":"Carousel-module_avoid-clicks__Vre3z","opacityAnimation":"Carousel-module_opacityAnimation__N9Dhr"};
styleInject(css_248z$2);

var css_248z$1 = ".CarouselItem-module_imageContainer__oAFTk {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: auto;\n  min-width: 300px;\n}\n\n.CarouselItem-module_firstRowColumn__9wvOz {\n  grid-column: 1;\n  grid-row: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 300px;\n}\n\n.CarouselItem-module_overlay__3ut3b {\n  pointer-events: none;\n  grid-column: 1;\n  grid-row: 1;\n  z-index: 2;\n}\n\n.CarouselItem-module_outOfFocus__hxTdF {\n  grid-column: 1;\n  grid-row: 1;\n  pointer-events: all;\n}\n\n.CarouselItem-module_darkened__YQrzB {\n  transition: all 0.6s;\n  background: none;\n  opacity: 0.62;\n  pointer-events: all;\n}";
var styles$1 = {"imageContainer":"CarouselItem-module_imageContainer__oAFTk","firstRowColumn":"CarouselItem-module_firstRowColumn__9wvOz","overlay":"CarouselItem-module_overlay__3ut3b","outOfFocus":"CarouselItem-module_outOfFocus__hxTdF","darkened":"CarouselItem-module_darkened__YQrzB"};
styleInject(css_248z$1);

const CarouselItem = (props) => {
    const getStyle = (isShowing, isDarken) => {
        let style = `${styles$1["overlay"]}`;
        if (!isShowing)
            style += ` ${styles$1["outOfFocus"]}`;
        if (!isShowing && isDarken)
            style += ` ${styles$1["darkened"]}`;
        return style;
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles$1.imageContainer },
            React.createElement("div", { className: styles$1.firstRowColumn, style: {
                    height: props.height,
                    width: "100%",
                    objectFit: "cover",
                } }, React.Children.only(props.children)),
            React.createElement("div", { className: getStyle(props.isShowing, props.outOfFocusDarken) }))));
};

var css_248z = ".DotsNavigation-module_dotsContainer__DmLIK {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.DotsNavigation-module_dot__uAcx7 {\n  box-sizing: border-box;\n  width: 16px;\n  height: 16px;\n  background: none;\n  margin-left: 4px;\n  margin-right: 4px;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);\n}";
var styles = {"dotsContainer":"DotsNavigation-module_dotsContainer__DmLIK","dot":"DotsNavigation-module_dot__uAcx7"};
styleInject(css_248z);

const DotsNavigation = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.dotsContainer }, props.items &&
            React.Children.map(props.items, (item, index) => {
                let fillColor = props.dotNavigationFillColor
                    ? `${props.dotNavigationFillColor}`
                    : `gray`;
                let outlineColor = props.dotNavigationOutlineColor
                    ? `${props.dotNavigationOutlineColor}`
                    : `gray`;
                let style = !(index === props.selectedIndex)
                    ? { border: `1px solid ${outlineColor}` }
                    : {
                        border: `1px solid ${outlineColor}`,
                        background: `${fillColor}`,
                    };
                return (React.createElement("span", { className: styles["dot"], style: style, key: index, onClick: () => props.jumpToIndex(index) }));
            }))));
};

const LEFT = "Left";
const RIGHT = "Right";
const UP = "Up";
const DOWN = "Down";

/* global document */
const defaultProps = {
    delta: 10,
    preventScrollOnSwipe: false,
    rotationAngle: 0,
    trackMouse: false,
    trackTouch: true,
    swipeDuration: Infinity,
    touchEventOptions: { passive: true },
};
const initialState = {
    first: true,
    initial: [0, 0],
    start: 0,
    swiping: false,
    xy: [0, 0],
};
const mouseMove = "mousemove";
const mouseUp = "mouseup";
const touchEnd = "touchend";
const touchMove = "touchmove";
const touchStart = "touchstart";
function getDirection(absX, absY, deltaX, deltaY) {
    if (absX > absY) {
        if (deltaX > 0) {
            return RIGHT;
        }
        return LEFT;
    }
    else if (deltaY > 0) {
        return DOWN;
    }
    return UP;
}
function rotateXYByAngle(pos, angle) {
    if (angle === 0)
        return pos;
    const angleInRadians = (Math.PI / 180) * angle;
    const x = pos[0] * Math.cos(angleInRadians) + pos[1] * Math.sin(angleInRadians);
    const y = pos[1] * Math.cos(angleInRadians) - pos[0] * Math.sin(angleInRadians);
    return [x, y];
}
function getHandlers(set, handlerProps) {
    const onStart = (event) => {
        const isTouch = "touches" in event;
        // if more than a single touch don't track, for now...
        if (isTouch && event.touches.length > 1)
            return;
        set((state, props) => {
            // setup mouse listeners on document to track swipe since swipe can leave container
            if (props.trackMouse && !isTouch) {
                document.addEventListener(mouseMove, onMove);
                document.addEventListener(mouseUp, onUp);
            }
            const { clientX, clientY } = isTouch ? event.touches[0] : event;
            const xy = rotateXYByAngle([clientX, clientY], props.rotationAngle);
            props.onTouchStartOrOnMouseDown &&
                props.onTouchStartOrOnMouseDown({ event });
            return Object.assign(Object.assign(Object.assign({}, state), initialState), { initial: xy.slice(), xy, start: event.timeStamp || 0 });
        });
    };
    const onMove = (event) => {
        set((state, props) => {
            const isTouch = "touches" in event;
            // Discount a swipe if additional touches are present after
            // a swipe has started.
            if (isTouch && event.touches.length > 1) {
                return state;
            }
            // if swipe has exceeded duration stop tracking
            if (event.timeStamp - state.start > props.swipeDuration) {
                return state.swiping ? Object.assign(Object.assign({}, state), { swiping: false }) : state;
            }
            const { clientX, clientY } = isTouch ? event.touches[0] : event;
            const [x, y] = rotateXYByAngle([clientX, clientY], props.rotationAngle);
            const deltaX = x - state.xy[0];
            const deltaY = y - state.xy[1];
            const absX = Math.abs(deltaX);
            const absY = Math.abs(deltaY);
            const time = (event.timeStamp || 0) - state.start;
            const velocity = Math.sqrt(absX * absX + absY * absY) / (time || 1);
            const vxvy = [deltaX / (time || 1), deltaY / (time || 1)];
            const dir = getDirection(absX, absY, deltaX, deltaY);
            // if swipe is under delta and we have not started to track a swipe: skip update
            const delta = typeof props.delta === "number"
                ? props.delta
                : props.delta[dir.toLowerCase()] ||
                    defaultProps.delta;
            if (absX < delta && absY < delta && !state.swiping)
                return state;
            const eventData = {
                absX,
                absY,
                deltaX,
                deltaY,
                dir,
                event,
                first: state.first,
                initial: state.initial,
                velocity,
                vxvy,
            };
            // call onSwipeStart if present and is first swipe event
            eventData.first && props.onSwipeStart && props.onSwipeStart(eventData);
            // call onSwiping if present
            props.onSwiping && props.onSwiping(eventData);
            // track if a swipe is cancelable (handler for swiping or swiped(dir) exists)
            // so we can call preventDefault if needed
            let cancelablePageSwipe = false;
            if (props.onSwiping ||
                props.onSwiped ||
                props[`onSwiped${dir}`]) {
                cancelablePageSwipe = true;
            }
            if (cancelablePageSwipe &&
                props.preventScrollOnSwipe &&
                props.trackTouch &&
                event.cancelable) {
                event.preventDefault();
            }
            return Object.assign(Object.assign({}, state), { 
                // first is now always false
                first: false, eventData, swiping: true });
        });
    };
    const onEnd = (event) => {
        set((state, props) => {
            let eventData;
            if (state.swiping && state.eventData) {
                // if swipe is less than duration fire swiped callbacks
                if (event.timeStamp - state.start < props.swipeDuration) {
                    eventData = Object.assign(Object.assign({}, state.eventData), { event });
                    props.onSwiped && props.onSwiped(eventData);
                    const onSwipedDir = props[`onSwiped${eventData.dir}`];
                    onSwipedDir && onSwipedDir(eventData);
                }
            }
            else {
                props.onTap && props.onTap({ event });
            }
            props.onTouchEndOrOnMouseUp && props.onTouchEndOrOnMouseUp({ event });
            return Object.assign(Object.assign(Object.assign({}, state), initialState), { eventData });
        });
    };
    const cleanUpMouse = () => {
        // safe to just call removeEventListener
        document.removeEventListener(mouseMove, onMove);
        document.removeEventListener(mouseUp, onUp);
    };
    const onUp = (e) => {
        cleanUpMouse();
        onEnd(e);
    };
    /**
     * The value of passive on touchMove depends on `preventScrollOnSwipe`:
     * - true => { passive: false }
     * - false => { passive: true } // Default
     *
     * NOTE: When preventScrollOnSwipe is true, we attempt to call preventDefault to prevent scroll.
     *
     * props.touchEventOptions can also be set for all touch event listeners,
     * but for `touchmove` specifically when `preventScrollOnSwipe` it will
     * supersede and force passive to false.
     *
     */
    const attachTouch = (el, props) => {
        let cleanup = () => { };
        if (el && el.addEventListener) {
            const baseOptions = Object.assign(Object.assign({}, defaultProps.touchEventOptions), props.touchEventOptions);
            // attach touch event listeners and handlers
            const tls = [
                [touchStart, onStart, baseOptions],
                // preventScrollOnSwipe option supersedes touchEventOptions.passive
                [
                    touchMove,
                    onMove,
                    Object.assign(Object.assign({}, baseOptions), (props.preventScrollOnSwipe ? { passive: false } : {})),
                ],
                [touchEnd, onEnd, baseOptions],
            ];
            tls.forEach(([e, h, o]) => el.addEventListener(e, h, o));
            // return properly scoped cleanup method for removing listeners, options not required
            cleanup = () => tls.forEach(([e, h]) => el.removeEventListener(e, h));
        }
        return cleanup;
    };
    const onRef = (el) => {
        // "inline" ref functions are called twice on render, once with null then again with DOM element
        // ignore null here
        if (el === null)
            return;
        set((state, props) => {
            // if the same DOM el as previous just return state
            if (state.el === el)
                return state;
            const addState = {};
            // if new DOM el clean up old DOM and reset cleanUpTouch
            if (state.el && state.el !== el && state.cleanUpTouch) {
                state.cleanUpTouch();
                addState.cleanUpTouch = void 0;
            }
            // only attach if we want to track touch
            if (props.trackTouch && el) {
                addState.cleanUpTouch = attachTouch(el, props);
            }
            // store event attached DOM el for comparison, clean up, and re-attachment
            return Object.assign(Object.assign(Object.assign({}, state), { el }), addState);
        });
    };
    // set ref callback to attach touch event listeners
    const output = {
        ref: onRef,
    };
    // if track mouse attach mouse down listener
    if (handlerProps.trackMouse) {
        output.onMouseDown = onStart;
    }
    return [output, attachTouch];
}
function updateTransientState(state, props, previousProps, attachTouch) {
    // if trackTouch is off or there is no el, then remove handlers if necessary and exit
    if (!props.trackTouch || !state.el) {
        if (state.cleanUpTouch) {
            state.cleanUpTouch();
        }
        return Object.assign(Object.assign({}, state), { cleanUpTouch: undefined });
    }
    // trackTouch is on, so if there are no handlers attached, attach them and exit
    if (!state.cleanUpTouch) {
        return Object.assign(Object.assign({}, state), { cleanUpTouch: attachTouch(state.el, props) });
    }
    // trackTouch is on and handlers are already attached, so if preventScrollOnSwipe changes value,
    // remove and reattach handlers (this is required to update the passive option when attaching
    // the handlers)
    if (props.preventScrollOnSwipe !== previousProps.preventScrollOnSwipe ||
        props.touchEventOptions.passive !== previousProps.touchEventOptions.passive) {
        state.cleanUpTouch();
        return Object.assign(Object.assign({}, state), { cleanUpTouch: attachTouch(state.el, props) });
    }
    return state;
}
function useSwipeable(options) {
    const { trackMouse } = options;
    const transientState = React.useRef(Object.assign({}, initialState));
    const transientProps = React.useRef(Object.assign({}, defaultProps));
    // track previous rendered props
    const previousProps = React.useRef(Object.assign({}, transientProps.current));
    previousProps.current = Object.assign({}, transientProps.current);
    // update current render props & defaults
    transientProps.current = Object.assign(Object.assign({}, defaultProps), options);
    // Force defaults for config properties
    let defaultKey;
    for (defaultKey in defaultProps) {
        if (transientProps.current[defaultKey] === void 0) {
            transientProps.current[defaultKey] = defaultProps[defaultKey];
        }
    }
    const [handlers, attachTouch] = React.useMemo(() => getHandlers((stateSetter) => (transientState.current = stateSetter(transientState.current, transientProps.current)), { trackMouse }), [trackMouse]);
    transientState.current = updateTransientState(transientState.current, transientProps.current, previousProps.current, attachTouch);
    return handlers;
}

const { useCallback, useEffect, useState, useImperativeHandle } = React;
const animationTime = 500; //ms
function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
const Carousel = React.forwardRef((props, ref) => {
    var _a, _b, _c, _d;
    // State
    let [prevItemStyle, setPrevItemStyle] = useState(` ${styles$2["prev"]}`);
    let [doublePrevItemStyle, setDoublePrevItemStyle] = useState(` ${styles$2["doublePrev"]}`);
    let [nextItemStyle, setNextItemStyle] = useState(` ${styles$2["next"]}`);
    let [doubleNextItemStyle, setDoubleNextItemStyle] = useState(` ${styles$2["doubleNext"]}`);
    let [showItems, setShowItems] = useState();
    const [showingIndex, setShowingIndex] = useState(0);
    const childrenCount = React.Children.count(props.children);
    const [waiting, setWaiting] = useState(false);
    const [autoScrollClickDelay, setAutoScrollClickDelay] = useState(false);
    const showItemsNum = (_a = React.Children.count(showItems)) !== null && _a !== void 0 ? _a : 0;
    const is3D = props.carouselStyle === "3d";
    let prevIndex = showingIndex === 0 ? showItemsNum - 1 : showingIndex - 1;
    let doublePrevIndex = showingIndex === 0 ? showItemsNum - 2 : (showingIndex === 1 ? showItemsNum - 1 : showingIndex - 2);
    let nextIndex = showingIndex === showItemsNum - 1 ? 0 : showingIndex + 1;
    let doubleNextIndex = showingIndex === showItemsNum - 1 ? 1 : (showingIndex === showItemsNum - 2 ? 0 : showingIndex + 2);
    // Controller
    useImperativeHandle(ref, () => {
        return {
            shiftLeft: () => shiftLeft(),
            shiftRight: () => shiftRight(),
            jumpToIndex: (index) => jumpToIndexHandler(index),
        };
    });
    useEffect(() => {
        let items = React.Children.map(props.children, (child, index) => {
            if (child)
                return child;
        });
        if (childrenCount <= 5)
            items = items === null || items === void 0 ? void 0 : items.concat(items);
        setShowItems(items);
        setShowingIndex((prev) => {
            if (prev >= showItemsNum)
                return showItemsNum - 1;
            else if (prev < 0)
                return 0;
            else
                return prev;
        });
    }, [props.children, showItemsNum]);
    // Render the carousel elements based on its setup
    const renderElement = (listItem, index) => {
        var _a;
        let style = `${styles$2["itemContainer"]}`;
        style += is3D ? ` ${styles$2["threed"]}` : ` ${styles$2["flat"]}`;
        let isSelected = index === showingIndex;
        if (isSelected)
            style += ` ${styles$2["showing"]}`;
        else if (index === prevIndex) {
            style += prevItemStyle;
            // onClickHandler = () => clickHandler("L");
        }
        else if (index === nextIndex) {
            style += nextItemStyle;
            // onClickHandler = () => clickHandler("R");
        }
        else if (index === doublePrevIndex) {
            style += doublePrevItemStyle;
        }
        else if (index == doubleNextIndex) {
            style += doubleNextItemStyle;
        }
        return (React.createElement("div", { className: style, key: index },
            React.createElement(CarouselItem, { isShowing: isSelected, height: props.height, outOfFocusDarken: (_a = props.outOfFocusDarken) !== null && _a !== void 0 ? _a : true }, listItem)));
    };
    // Swipeable handlers
    const handlers = useSwipeable({
        onSwipedRight: () => {
            clickHandler("L");
        },
        onSwipedLeft: () => {
            clickHandler("R");
        },
        preventScrollOnSwipe: true,
    });
    // Shifts the carousel left
    const shiftLeft = useCallback(() => {
        setShowingIndex((prev) => {
            if (prev === 0 || prev - 1 > showItemsNum - 1 || prev - 1 < 0) {
                return showItemsNum - 1;
            }
            return prev - 1;
        });
    }, [showItemsNum]);
    // Shifts the carousel right
    const shiftRight = useCallback(() => {
        setShowingIndex((prev) => {
            if (prev === showItemsNum - 1 ||
                prev + 1 > showItemsNum - 1 ||
                prev + 1 < 0) {
                return 0;
            }
            return prev + 1;
        });
    }, [showItemsNum]);
    // Checks if currently waiting, if not - adjust the CSS styles and call carousel shift
    const rotateCarouselHandler = useCallback((arg0) => {
        if (waiting === false) {
            setWaiting(true);
            switch (arg0) {
                case "L":
                    setPrevItemStyle(` ${styles$2["prev"]} ${styles$2["leftClick"]}`);
                    setDoublePrevItemStyle(` ${styles$2["doublePrev"]} ${styles$2["leftClick"]}`);
                    setNextItemStyle(` ${styles$2["next"]} ${styles$2["leftClick"]}`);
                    setDoubleNextItemStyle(` ${styles$2["doubleNext"]} ${styles$2["leftClick"]}`);
                    shiftLeft();
                    break;
                case "R":
                    setPrevItemStyle(` ${styles$2["prev"]}`);
                    setDoublePrevItemStyle(` ${styles$2["doublePrev"]}`);
                    setNextItemStyle(` ${styles$2["next"]}`);
                    setDoubleNextItemStyle(` ${styles$2["doubleNext"]}`);
                    shiftRight();
                    break;
            }
        }
    }, [shiftLeft, shiftRight, waiting]);
    // Configures auto-rotate interval
    useEffect(() => {
        if (autoScrollClickDelay === false &&
            props.autoScrollInterval &&
            props.autoScrollInterval > animationTime) {
            let interval = setInterval(() => {
                rotateCarouselHandler("R");
            }, props.autoScrollInterval);
            return () => clearInterval(interval);
        }
    }, [autoScrollClickDelay, props.autoScrollInterval, rotateCarouselHandler]);
    // Configures auto-rotate delay after click
    useEffect(() => {
        const stopWaiting = () => __awaiter(void 0, void 0, void 0, function* () {
            if (props.autoScrollClickDelay !== undefined) {
                yield delay(props.autoScrollClickDelay);
                setAutoScrollClickDelay((prev) => {
                    return false;
                });
            }
        });
        if (autoScrollClickDelay === true)
            stopWaiting();
    }, [autoScrollClickDelay, props.autoScrollClickDelay]);
    // Takes care of waiting for an action
    useEffect(() => {
        const stopWaiting = () => __awaiter(void 0, void 0, void 0, function* () {
            yield delay(animationTime);
            setWaiting((prev) => {
                return false;
            });
        });
        if (waiting === true)
            stopWaiting();
    }, [waiting]);
    // Takes in the item index to jump to, calls rotateCarouselHandler
    const jumpToIndexHandler = (index) => {
        if (waiting === false) {
            setWaiting(true);
            if (index === prevIndex) {
                rotateCarouselHandler("L");
            }
            else if (index === nextIndex) {
                rotateCarouselHandler("R");
            }
            else {
                setShowingIndex(index);
            }
            setAutoScrollClickDelay(true);
        }
    };
    // Arrow click handler
    const clickHandler = (dir) => {
        rotateCarouselHandler(dir);
        setAutoScrollClickDelay(true);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: {
                width: props.width,
                height: props.height,
                position: "relative",
            } },
            React.createElement("div", { className: styles$2.verticalContainer },
                React.createElement("div", { className: styles$2.horizontalContainer },
                    props.arrows && (React.createElement("button", { onClick: () => {
                            clickHandler("L");
                        }, className: is3D
                            ? `${styles$2["arrowButtonContainer"]} ${styles$2["threed"]} ${styles$2["left"]}`
                            : `${styles$2["arrowButtonContainer"]} ${styles$2["flat"]}  ${styles$2["left"]}` })),
                    React.createElement("div", Object.assign({ className: styles$2.swipeContainer }, handlers), showItems &&
                        React.Children.map(showItems, (listItem, index) => {
                            return renderElement(listItem, index);
                        })),
                    props.arrows && (React.createElement("button", { className: is3D
                            ? `${styles$2["arrowButtonContainer"]} ${styles$2["threed"]} ${styles$2["right"]}`
                            : `${styles$2["arrowButtonContainer"]} ${styles$2["flat"]}  ${styles$2["right"]}`, onClick: () => clickHandler("R") })))),
            props.dotsNavigation && (React.createElement("div", { className: props.dotsNavigationInside
                    ? `${styles$2["navContainer"]} ${styles$2["inside"]}`
                    : `${styles$2["navContainer"]}` },
                React.createElement(DotsNavigation, { items: childrenCount === 2
                        ? (_b = React.Children.map(showItems, (el, index) => {
                            if (index < 2)
                                return el;
                        })) !== null && _b !== void 0 ? _b : []
                        : showItems !== null && showItems !== void 0 ? showItems : [], selectedIndex: showingIndex % childrenCount, jumpToIndex: jumpToIndexHandler, dotNavigationOutlineColor: (_c = props.dotNavigationOutlineColor) !== null && _c !== void 0 ? _c : "rgb(220,220,220,1)", dotNavigationFillColor: (_d = props.dotNavigationFillColor) !== null && _d !== void 0 ? _d : "rgb(220,220,220,1)" }))))));
});

export { Carousel };
