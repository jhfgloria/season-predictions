import Component from '../dom/component.js';
import { div } from '../dom/dom.js';

const matchRoute = (routes, newRoute) => {
  return Object.keys(routes).find(route => {
    const regex = new RegExp(`^${route.replace(/{[\w]*}/g, '[\\w]*')}$`);
    return regex.test(newRoute);
  });
};

export default class Router extends Component {
  constructor(props) {
    super(props);
    const selectedRoute = matchRoute(this.props.routes, location.pathname);
    this.state = {
      selectedRoute: this.props.routes[selectedRoute]
    };
    //Init listener for location change
    window.addEventListener('popstate', this._locationChangeCallback.bind(this));
  }

  render() {
    const childComponent = this.state.selectedRoute || this.props.home;
    childComponent.props.history = this.state.history;
    return div(childComponent);
  }

  _locationChangeCallback(event) {
    //TODO 404
    if (!(event && event.target && event.target.location && event.target.location.pathname)) return;
    this.setState({
      history: event.state,
      selectedRoute: this.props.routes[matchRoute(this.props.routes, event.target.location.pathname)]
    });
  }
}

export const goTo = (delta, state) => {
  let newDelta;
  Object.keys(state).forEach(key => { newDelta = delta.replace(`{${key}}`, state[key]); });
  history.pushState(state, '', newDelta);
  const popStateEvent = new PopStateEvent('popstate', { state });
  window.dispatchEvent(popStateEvent);
};

export const replace = (delta, state) => {
  let newDelta;
  Object.keys(state).forEach(key => { newDelta = delta.replace(`{${key}}`, state[key]); });
  history.replaceState(state, '', newDelta);
  const popStateEvent = new PopStateEvent('popstate', { state });
  window.dispatchEvent(popStateEvent);
};
