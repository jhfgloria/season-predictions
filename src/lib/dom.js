export const renderDom = (root, component) => {
  document.getElementById(root).append(component.hiddenRender());
};