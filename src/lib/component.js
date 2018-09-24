export default class Component {
  constructor() {
    this.identifier = 'dummy-id';
  }

  hiddenRender() {
    const outerElement = document.createElement('div');
    outerElement.id = this.identifier;
    outerElement.append(this.render());
    return outerElement;
  }

  update() {
    const outerElement = document.getElementById(this.identifier);
    outerElement.childNodes.forEach(node => outerElement.removeChild(node));
    outerElement.append(this.render());
  }

  render() {
    return undefined;
  }
}