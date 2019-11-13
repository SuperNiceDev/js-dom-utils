/* eslint-disable import/first, no-unused-vars */
import * as ScrollRestorationPolyfill from 'scroll-restoration-polyfill'
const ScrollRestorationPolyfillPlugins = [ScrollRestorationPolyfill]
/* eslint-enable import/first, no-unused-vars */


export function setScrollRestoration ()
{
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }
}
