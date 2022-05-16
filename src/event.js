// - https://www.npmjs.com/package/custom-event-polyfill
// import * as CustomEventPolyfillIE9+ from 'custom-event-polyfill'
// const PreventTreeShaking = [CustomEventPolyfillIE9+]

export function createEvent(name = "CUSTOM_EVENT_NAME", detailObj = {}) {
  return new CustomEvent(name, { detail: detailObj });
}

// window.addEventListener('CUSTOM_EVENT_NAME', this._onEvent, {passive: true, capture: true})

// const customEvent = new createEvent('CUSTOM_EVENT_NAME', {key1: 'val1', key2: 'val2'})
// customEvent.detail.key1 = 'val111'
// window.dispatchEvent(customEvent)

// - dispatch native resize event
// window.dispatchEvent(new CustomEvent('resize'))

// export function createEvent (name = 'CUSTOM_EVENT_NAME')
// {
//   const evt = window.document.createEvent('UIEvents')
//   evt.initUIEvent(name, true, false, window, 0)
//   return evt
// }

// const customEvent = createEvent('CUSTOM_EVENT_NAME', {key1: 'val1', key2: 'val2'})
// window.dispatchEvent(customEvent)

// https://plainjs.com/javascript/events/binding-and-unbinding-of-event-handlers-12/

export function addEvent(
  elem,
  type,
  handler,
  options = { passive: true, useCapture: false }
) {
  elem.addEventListener(type, handler, options);
  // if (elem.attachEvent) elem.attachEvent('on'+type, handler) else elem.addEventListener(type, handler)
}

export function removeEvent(
  elem,
  type,
  handler,
  options = { passive: true, useCapture: false }
) {
  elem.removeEventListener(type, handler, options);
  // if (elem.detachEvent) elem.detachEvent('on'+type, handler) else elem.removeEventListener(type, handler)
}
