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
