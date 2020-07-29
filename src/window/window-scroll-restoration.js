import * as ScrollRestorationPolyfill from 'scroll-restoration-polyfill'
const ScrollRestorationPolyfillPlugins = [ScrollRestorationPolyfill]


export function windowSetScrollRestoration ()
{
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }
}
