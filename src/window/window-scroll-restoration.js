export function windowSetScrollRestoration ()
{
  const ScrollRestorationPolyfill = require("scroll-restoration-polyfill")
  console.log('ScrollRestorationPolyfill: ', ScrollRestorationPolyfill);

  if ('scrollRestoration' in window.history) {
    if (ScrollRestorationPolyfill) {
      const ScrollRestorationPolyfillPlugins = [ScrollRestorationPolyfill]
    }

    window.history.scrollRestoration = 'manual'
  }
}
