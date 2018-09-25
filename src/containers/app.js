import Component from '../lib/dom/component.js';
import Router from '../lib/router';

class TestComponent extends Component {
  render() {
    return 'test 1';
  }
}

class TestComponent2 extends Component {
  render() {
    return 'test 2';
  }
}

export default class App extends Component {
  render() {
    const router = new Router(
      new TestComponent(), 
      {
        '/': new TestComponent(),
        '/season_predictions': new TestComponent2()
      }
    );
    return `<div>${router}</div>`;
  }
}
