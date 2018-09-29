import Component from '../../lib/dom/component';
import { h1, div} from '../../lib/dom/dom.js';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    window.setTimeout(() => {
      props.onLeave && props.onLeave();
    }, props.splashTime);
  }

  render() {
    return div(
      div(
        div(
          h1('SEASON PREDICTIONS').className('text-align-center')
        ).className('column ')
      ).className('ui middle aligned row')
    ).className('ui column centered grid tall-height')
  }
}
