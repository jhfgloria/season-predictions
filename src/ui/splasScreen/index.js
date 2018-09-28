import Component from '../../lib/dom/component';
import { h1 } from '../../lib/dom/dom.js';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    window.setTimeout(() => {
      props.onLeave && props.onLeave();
    }, props.splashTime);
  }

  render() {
    return h1('SEASON PREDICTIONS');
  }
}
