// https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/

export function getPositionInDocument(elem) {
  if (elem) {
    const rect = elem.getBoundingClientRect();
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  return 0;
}

export function getYPositionInDocument(elem) {
  return getPositionInDocument(elem)?.top || 0;
}

export function getScrolledYPositionInDocument(elem) {
  if (elem) {
    return elem.getBoundingClientRect().top;
  }
  return 0;
}
