export const renderDom = (root, component) => {
  document.getElementById(root).innerHTML = component.toString();
};