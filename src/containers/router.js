export default class Router {
  constructor(home, routes) {
    //Init listener for location change
    window.addEventListener('popstate', this._locationChangeCallback.bind(this));
    this.home = home;
    this.routes = routes;
  }

  render(child) {
    const childComponent = child || this.home;
    let parentDiv = document.createElement('div');
    parentDiv.append(childComponent.render());
    return parentDiv;
  }

  _locationChangeCallback(event) {
    if (!(event && event.target && event.target.location && event.target.location.pathname)) return;

    const childComponent = this.routes[event.target.location.pathname];
    this.render(childComponent);
  }
}
