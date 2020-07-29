// https://plainjs.com/javascript/styles/get-and-set-scroll-position-of-an-element-26/

export function windowGetScrollTop ()
{
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return scrollTop
}


export function windowSetScrollTop (position = 0)
{
  document.documentElement.scrollTop = document.body.scrollTop = position
}
