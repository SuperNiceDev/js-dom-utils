
// export function createEvent (p_name = 'customEventName')
// {
//   const evt = window.document.createEvent('UIEvents')
//   evt.initUIEvent(p_name, true, false, window, 0)
//   return evt
// }


// dispatch native resize event
// window.dispatchEvent(new CustomEvent('resize'))


// window.addEventListener('CUSTOM_EVENT_NAME', this._onEventHandler, {passive: true, capture: true})

// const customEvent = new CustomEvent('CUSTOM_EVENT_NAME', {key1: 'val1', key2: 'val2'})
// customEvent.detail.key1 = 'val111'
// window.dispatchEvent(customEvent)

export function createEvent (name = 'EVENT_NAME_NOT_SET', detailObj = {})
{
  /* eslint-disable-next-line */
  return new CustomEvent(name, {'detail': detailObj})
}



// https://plainjs.com/javascript/events/binding-and-unbinding-of-event-handlers-12/

export function addEvent (elem, type, handler, options = {passive: true, useCapture: false})
{
  elem.addEventListener(type, handler, options)
  // if (elem.attachEvent) elem.attachEvent('on'+type, handler) else elem.addEventListener(type, handler)
}


export function removeEvent (elem, type, handler, options = {passive: true, useCapture: false})
{
  elem.removeEventListener(type, handler, options)
  // if (elem.detachEvent) elem.detachEvent('on'+type, handler) else elem.removeEventListener(type, handler)
}
