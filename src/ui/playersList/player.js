import Component from '../../lib/dom/component.js';
import { div, i, text } from '../../lib/dom/dom.js';
import { goToSeasonPredictions } from '../../services/routerService.js';

export default class Player extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return div(
        i().className('user outline icon'),
        div(
          div(text(this.props.player.playerName)).className('header'),
          div(
            text(`Team: ${this.props.player.teamName} | Goals scored last season: ${this.props.player.goalsLastSeason}`)
          ).className('description')      
        ).className('content')
      )
        .click(() => this.props.onClick())
        .className('item pointer');
  }
}