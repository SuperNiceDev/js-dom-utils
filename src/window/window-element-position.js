// https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/

export function windowGetElementYPosition (elem)
{
  if (elem)
  {
    return elem.getBoundingClientRect().top + window.pageYOffset
  }
  return 0
}