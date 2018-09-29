import Component from '../../lib/dom/component.js';
import { div, i, text } from '../../lib/dom/dom.js';
import { goToSeasonPredictions } from '../../services/routerService.js';

export default class Team extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return div(
        i().className('futbol outline icon').style(`color: ${this.props.team.teamColor}`),
        div(
          div(text(this.props.team.teamName)).className('header')
        ).className('content')
      )
        .click(() => this.props.onClick())
        .className('item pointer');
  }
}
