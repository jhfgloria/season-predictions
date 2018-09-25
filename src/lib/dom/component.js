import uuidv1 from 'uuid/v1.js';

export default class Component {
  constructor() {
    this.identifier = uuidv1();
    this.state = {};
  }

  _hiddenRender() {
    const outerElement = document.createElement('div');
    outerElement.id = this.identifier;
    outerElement.append(this.render());
    return outerElement;
  }

  _update() {
    const outerElement = document.getElementById(this.identifier);
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