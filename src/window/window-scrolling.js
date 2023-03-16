// const log = window.debug("log: DomUtils");

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// https://plainjs.com/javascript/styles/get-and-set-scroll-position-of-an-element-26/

// export function getBodyScrollTop() {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   return scrollTop;
// }

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

import animateScrollTo from "animated-scroll-to";
// https://github.com/Stanko/animated-scroll-to#options

// export function scrollToTween (elem, position, duration = 0.3, delay = 0)
export const scrollToTween = (elem, position = 0, speed = 1000) => {
  // log('speed:', speed)
  animateScrollTo(position, {
    elementToScroll: elem || window,
    minDuration: speed > 50 ? speed : 0,
    speed: speed,
    maxDuration: speed,
  });
};

let scrollToTimeout = null;

export const scrollTo = (position = 0, duration = 0, delay = 0) => {
  clearTimeout(scrollToTimeout);
  scrollToTimeout = setTimeout(() => {
    scrollToTween(window, position, duration);
  }, delay);
};
