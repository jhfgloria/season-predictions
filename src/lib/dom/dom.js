import Component from './component.js';

export const renderDom = (root, component) => {
  document.getElementById(root).append(component._hiddenRender());
};

class HTMLDivElementWapper {
  constructor(element) {
    this.element = element;
  }

  addEventListener(event, listener) {
    this.element.addEventListener(event, listener);
    return this;
  }

  removeEventListener(event, listener) {
    this.element.removeEventListener(event, listener);
    return this;
  }

  click(listener) {
    return this.addEventListener('click', listener);
  }
}

const _genericAppend = (parent, child) => {
  if (child instanceof Component) parent.append(child._hiddenRender());
  else if (child instanceof HTMLDivElementWapper) parent.append(child.element);
  else parent.append(child);
};

export const div = (...children) => {
  const div = document.createElement('div');
  children.forEach(child => { _genericAppend(div, child); });
  return new HTMLDivElementWapper(div);
};

export const span = (...children) => {
  const span = document.createElement('span');
  children.forEach(child => { _genericAppend(span, child); });
  return new HTMLDivElementWapper(span);
};

export const ul = (list) => {
  const ul = document.createElement('ul');
  list.forEach(li => { _genericAppend(ul, li); });
  return new HTMLDivElementWapper(ul);
};

export const li = (element) => {
  const li = document.createElement('li');
  _genericAppend(li, element);
  return new HTMLDivElementWapper(li);
};

export const h1 = (text) => {
  const h1 = document.createElement('h1');
  const content = document.createTextNode(text);
  h1.append(content);
  return new HTMLDivElementWapper(h1);
};
