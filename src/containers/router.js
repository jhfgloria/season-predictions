import Component from '../lib/component.js';

export default class Router extends Component {
  constructor(home, routes) {
    //Init listener for location change
    super();
    window.addEventListener('popstate', this._locationChangeCallback.bind(this));
    this.home = home;
    this.routes = routes;
    this.selectedRoute = home;
  }

  render() {
    const childComponent = this.selectedRoute || this.home;
    let parentDiv = document.createElement('div');
    parentDiv.append(childComponent.render());
    return parentDiv;
  }

  _locationChangeCallback(event) {
    if (!(event && event.target && event.target.location && event.target.location.pathname)) return;
    this.selectedRoute = this.routes[event.target.location.pathname];
    this.update();
  }
}
