import Component from '../dom/component.js';
import { div } from '../dom/dom.js';

export default class Router extends Component {
  constructor(home, routes) {
    super();
    this.state = {
      home: home,
      routes: routes,
      selectedRoute: routes[location.pathname]
    };
    //Init listener for location change
    window.addEventListener('popstate', this._locationChangeCallback.bind(this));
  }

  render() {
    const childComponent = this.state.selectedRoute || this.state.home;
    return div(childComponent);
  }

  _locationChangeCallback(event) {
    //TODO 404
    if (!(event && event.target && event.target.location && event.target.location.pathname)) return;
    this.setState({
      selectedRoute: this.state.routes[event.target.location.pathname]
    });
  }
}

export const goTo = (delta, state) => {
  history.pushState(state, '', delta)
  const popStateEvent = new PopStateEvent('popstate', { state });
  window.dispatchEvent(popStateEvent);
};

export const replace = (delta, state) => {
  history.replaceState(state, '', delta)
  const popStateEvent = new PopStateEvent('popstate', { state });
  window.dispatchEvent(popStateEvent);
};
