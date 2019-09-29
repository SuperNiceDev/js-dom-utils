export function getWindowHeight ()
{
  return window.innerHeight ||
   document.documentElement.clientHeight ||
   document.body.clientHeight || 0
}


// https://j11y.io/snippets/get-document-height-cross-browser/

export function getWindowScrollHeight ()
{
  const body = document.body
  const elem = document.documentElement
  return Math.max(
    body.scrollHeight, elem.scrollHeight,
    body.offsetHeight, elem.offsetHeight,
    body.clientHeight, elem.clientHeight
  )
}
