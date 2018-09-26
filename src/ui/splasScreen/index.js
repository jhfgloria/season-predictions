import Component from '../../lib/dom/component';
import { goToLeagues } from '../../services/routerService.js';
import { h1 } from '../../lib/dom/dom.js';

export default class SplashScreen extends Component {
  constructor(splashTime, onLeave) {
    super();
    window.setTimeout(() => {
      onLeave && onLeave();
    }, splashTime);
  }

  render() {
    return h1('SEASON PREDICTIONS');
  }
}
