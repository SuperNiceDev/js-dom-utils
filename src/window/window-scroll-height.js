// https://j11y.io/snippets/get-document-height-cross-browser/

export function windowGetScrollHeight() {
  const body = document.body;
  const docElem = document.documentElement;
  return Math.max(
    body.scrollHeight,
    docElem.scrollHeight,
    body.offsetHeight,
    docElem.offsetHeight,
    body.clientHeight,
    docElem.clientHeight,
  );
}
