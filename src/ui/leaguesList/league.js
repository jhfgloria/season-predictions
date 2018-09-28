import Component from '../../lib/dom/component.js';
import { li } from '../../lib/dom/dom.js';
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
    return li(this.state.leagueName)
      .click(() => goToSeasonPredictions({ leagueId: this.state.leagueId }));
  }
}
