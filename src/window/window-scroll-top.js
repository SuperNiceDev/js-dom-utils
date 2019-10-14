// https://plainjs.com/javascript/styles/get-and-set-scroll-position-of-an-element-26/

export function getWindowScrollTop ()
{
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return scrollTop
}


export function setWindowScrollTop (position = 0)
{
  document.documentElement.scrollTop = document.body.scrollTop = position
}
