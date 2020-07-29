export function windowGetHeight ()
{
  return window.innerHeight ||
   document.documentElement.clientHeight ||
   document.body.clientHeight || 0
}
