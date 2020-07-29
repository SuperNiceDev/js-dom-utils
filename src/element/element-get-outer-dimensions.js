import { getStyles } from './element-styles'


export function getOuterHeight (elem)
{
  if (elem)
  {
    const style = getStyles(elem)
    return elem.offsetHeight + parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10)
  }
  return 0
}


export function getOuterWidth (elem)
{
  if (elem)
  {
    const style = getStyles(elem)
    return elem.offsetWidth + parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10)
  }
  return 0
}
