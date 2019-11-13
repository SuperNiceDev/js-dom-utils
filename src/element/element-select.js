// https://plainjs.com/javascript/selecting/select-dom-elements-by-css-selector-4/

export function selectAllElements (selector, context)
{
  return (context || document).querySelectorAll(selector)
}


export function selectElement (selector, context)
{
  return (context || document).querySelector(selector)
}
