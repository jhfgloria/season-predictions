import Component from './component.js';

export const renderDom = (root, component) => {
  document.getElementById(root).append(component._hiddenRender());
};

export const div = (...children) => {
  const div = document.createElement('div');
  children.forEach(child => {
    if (child instanceof Component) div.append(child._hiddenRender());
    else div.append(child);
  });
  return div;
};

export const span = (...children) => {
  const span = document.createElement('span');
  children.forEach(child => {
    if (child instanceof Component) span.append(child._hiddenRender());
    else span.append(child);
  });
  return span;
};

export const h1 = (text) => {
  const h1 = document.createElement('h1');
  const content = document.createTextNode(text);
  h1.append(content);
  return h1;
};

export const ul = (list) => {
  const ul = document.createElement('ul');
  list.forEach(li => {
    if (li instanceof Component) ul.append(li._hiddenRender());
    else ul.append(li);
  });
  return ul;
};

export const li = (element) => {
  const li = document.createElement('li');
  if (element instanceof Component) li.append(element._hiddenRender());
  else li.append(element);
  return li;
};