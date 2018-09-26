import uuidv1 from 'uuid/v1.js';

export default class Component {
  constructor() {
    this.identifier = uuidv1();
    this.state = {};
  }

  _hiddenRender() {
    const topElement = this.render().element;
    topElement.setAttribute('data-component', this.constructor.name);
    topElement.setAttribute('data-id', this.identifier);
    return topElement;
  }

  _update() {
    const outerElement = document.querySelector(`[data-id='${this.identifier}']`);
    outerElement.replaceWith(this._hiddenRender());
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this._update();
  }

  render() {
    return undefined;
  }
}