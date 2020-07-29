export function windowGetElementYPosition (elem)
{
  if (elem)
  {
    return elem.getBoundingClientRect().top + window.pageYOffset
  }
  return 0
}