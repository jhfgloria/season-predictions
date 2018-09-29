import Component from '../../lib/dom/component.js';
import flag from '../../services/flagService.js'
import { div, i, text, span } from '../../lib/dom/dom.js';
import { goToSeasonPredictions } from '../../services/routerService.js';

export default class League extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leagueId: this.props.leagueId,
      leagueName: this.props.leagueName,
      country: this.props.country
    };
  }

  render () {
    return div(
        i().className(`${flag(this.state.country)}`),
        span(this.state.leagueName).className('header').style('display: inline-block')
      )
        .click(() => goToSeasonPredictions({ leagueId: this.state.leagueId }))
        .className('item pointer');
  }
}
