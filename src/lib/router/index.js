import Component from '../dom/component.js';

export default class Router extends Component {
  constructor(home, routes) {
    //Init listener for location change
    super();
    window.addEventListener('popstate', this._locationChangeCallback.bind(this));
    this.state = {
      home: home,
      routes: routes,
      selectedRoute: routes[location.pathname]
    };
  }

  render() {
    const childComponent = this.state.selectedRoute || this.state.home;
    const template = '<div>' + childComponent + '</div>';
    return template;
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
