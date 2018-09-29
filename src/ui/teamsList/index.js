import Component from '../../lib/dom/component.js';
import Team from './team.js';
import { getTeams } from '../../services/apiService.js';
import { div, h1, h3, input, ul, li, ol, span } from '../../lib/dom/dom.js';
import { predictTopTeam } from '../../services/predictionService.js';
import { replaceHome, replaceSeasonPredictions } from '../../services/routerService.js';

export default class TeamsList extends Component {
  constructor(props) {
    super(props);
    if (this.props.history) {
      const teams = getTeams(this.props.history.leagueId).sort((teamA, teamB) => {
        return (teamA.teamName > teamB.teamName) - (teamA.teamName < teamB.teamName)
      })
      this.state = {
        teams: teams
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
        div(
          div(
            h1('Teams'),
          ).className('row'),
          div(
            div(...this.state.teams.map(team => new Team({ team: team, onClick: () => this.predict(team, this.props.history.place) })))
              .className('ui large middle aligned animated relaxed divided list wide-width'),
          ).className('row'),
          div(
            input('Back', null, false, 'button').click(() => replaceSeasonPredictions({ leagueId: this.props.history.leagueId })).className('ui button')
          ).className('row')
        ).className('ui grid container')
      );
    } else {
      return span();
    }
  }
}
