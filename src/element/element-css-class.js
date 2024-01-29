// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/

export function cssClass() {
  let hasClass, addClass, removeClass;

  if ("classList" in document.documentElement) {
    hasClass = function (elem, className) {
      return elem.classList.contains(className);
    };

    addClass = function (elem, className) {
      elem.classList.add(className);
    };

    removeClass = function (elem, className) {
      elem.classList.remove(className);
    };
  } else {
    hasClass = function (elem, className) {
      return new RegExp("\\b" + className + "\\b").test(elem.className);
    };

    addClass = function (elem, className) {
      if (!hasClass(elem, className)) {
        elem.className += " " + className;
      }
    };

    removeClass = function (elem, className) {
      elem.className = elem.className.replace(
        new RegExp("\\b" + className + "\\b", "g"),
        "",
      );
    };
  }
  return { hasClass, addClass, removeClass };
}
