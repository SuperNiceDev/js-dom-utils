// https://plainjs.com/javascript/styles/set-and-get-css-styles-of-elements-53/

export function getStyles (elem)
{
  if (elem)
  {
    return window.getComputedStyle ? window.getComputedStyle(elem, null) : elem.currentStyle
  }
}


export function setStyles (elem, styles)
{
  for (var property in styles)
  {
    elem.style[property] = styles[property]
  }
}
