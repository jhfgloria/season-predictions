import Component from '../../lib/dom/component.js';
import { getTeams } from '../../services/apiService.js';
import { h1, h3, input, ul, li, ol, span } from '../../lib/dom/dom.js';
import { predictTopTeam } from '../../services/predictionService.js';
import { replaceHome, replaceSeasonPredictions } from '../../services/routerService.js';

export default class TeamsList extends Component {
  constructor(props) {
    super(props);
    if (this.props.history) {
      this.state = {
        teams: getTeams(this.props.history.leagueId)
      };
    } else {
      replaceHome();
    }
  }

  predict(team, place) {
    predictTopTeam(team, place, this.props.history.leagueId);
    replaceSeasonPredictions({ leagueId: this.props.history.leagueId });
  }

  render() {
    if (this.state.teams) {
      return (
        span(
          h1('Teams'),
          ul(this.state.teams.map(team => li(team.teamName).click(() => this.predict(team, this.props.history.place)))),
          input('Back', null, false, 'button').click(() => replaceSeasonPredictions({ leagueId: this.props.history.leagueId }))
        )
      );
    } else {
      return span();
    }
  }
}
