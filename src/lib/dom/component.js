import uuidv1 from 'uuid/v1.js';

export default class Component {
  constructor() {
    this.identifier = uuidv1();
    this.state = {};
  }

  _hiddenRender() {
    const unidentifiedHtml = this.render();
    //Another awful hack... TODO review this
    return unidentifiedHtml.replace('>', ` data-component='${this.constructor.name}' data-id='${this.identifier}'>`);
  }

  _update() {
    const outerElement = document.querySelector(`[data-id='${this.identifier}']`);
    outerElement.innerHTML = this.render();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this._update();
  }

  toString() {
    //Not my favorite hack ever, but... TODO review this
    const wrapper = document.createElement('div');
    wrapper.append(this._hiddenRender());
    return wrapper.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  }

  render() {
    return undefined;
  }
}