export const getNextParenthHref = (
  elem,
  parentNodeCount = 0,
  maxParentNodeCount = 9
) => {
  if (!elem) return [null, ""];
  if (parentNodeCount > maxParentNodeCount) return [elem, ""];

  if (elem && elem.href) {
    return [elem, elem.href];
  } else if (elem) {
    return getNextParenthHref(elem.parentNode, parentNodeCount + 1);
  }
};
