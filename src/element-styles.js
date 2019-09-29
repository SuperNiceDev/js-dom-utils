// https://plainjs.com/javascript/styles/set-and-get-css-styles-of-elements-53/

const getStylesObjCache = {}

export function getStyles (elem)
{
  if (elem)
  {
    return window.getComputedStyle ? window.getComputedStyle(elem, null) : elem.currentStyle
  }
  return getStylesObjCache
}


export function setStyles (elem, styles)
{
  if (elem)
  {
    for (var property in styles)
    {
      elem.style[property] = styles[property]
    }
  }
}
