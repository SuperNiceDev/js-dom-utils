export function getOuterHeight (elem)
{
  if (elem)
  {
    const style = getStyles(elem)
    return elem.offsetHeight + parseInt(style.marginTop) + parseInt(style.marginBottom)
  }
  return 0
}


export function getOuterWidth (elem)
{
  if (elem)
  {
    const style = getStyles(elem)
    return elem.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight)
  }
  return 0
}
