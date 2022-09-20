export const getNode = (selector, context = document) =>
  context.querySelector(selector);

export const getNodeList = (selector, context = document) => {
  return context.querySelectorAll(selector);
};

export const addClass = (node, classname) => {
  node.classList.add(classname);
};
export const removeClass = (node, classname) => {
  node.classList.remove(classname);
};
export const hasClass = (node, classname) => {
  return node.classList.contains(classname);
};

export function setButtonLabel(button, label) {
  button.textContent = label;
}

// GET (private)
function getStyle(node, prop) {
  return getComputedStyle(node).getPropertyValue(prop);
}

// SET (private)
function setStyle(node, prop, value) {
  node.style[prop] = value;
  // return undefined;
}

// FACTORY (public)
export function css(node, prop, value) {
  if (!value) {
    return getStyle(node, prop);
  } else {
    setStyle(node, prop, value);
  }
}
