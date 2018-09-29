import Component from '../../lib/dom/component.js';
import { getTeams } from '../../services/apiService';
import { 
  getTopPlayerPredicition, 
  getTopTeamsPredicition,
  removeTopPlayerPrediction,
  removeTopTeamsPrediction 
} from '../../services/predictionService.js';
import { div, h1, h3, input, li, ol, span, text } from '../../lib/dom/dom.js';
import { goToHome, goToPlayers, goToTeams, replaceHome } from '../../services/routerService.js';

export default class SeasonPredictions extends Component {
  constructor(props) {
    super(props);
    if (this.props.history) {
      //Request already made predictions
      this.state = {
        topPlayerPrediction: getTopPlayerPredicition(this.props.history.leagueId),
        topTeamsPredictions: getTopTeamsPredicition(this.props.history.leagueId)
      };
    } else {
      replaceHome();
    }
  }

  clearTopTeamsPredictions() {
    removeTopTeamsPrediction(this.props.history.leagueId);
    this.setState({
      topTeamsPredictions: getTopTeamsPredicition(this.props.history.leagueId)
    });
  }

  clearTopPlayerPredictions() {
    removeTopPlayerPrediction(this.props.history.leagueId);
    this.setState({
      topPlayerPrediction: getTopPlayerPredicition(this.props.history.leagueId)
    });
  }

  render() {
    if (this.props.history && this.props.history.leagueId) {
      return span(
        h1('Season prediction'),
        h3('Top 3 teams:'),
        span(text('Top 1')),
        div(
          input(
            this.state.topTeamsPredictions && 
            this.state.topTeamsPredictions.top1 &&
            this.state.topTeamsPredictions.top1.teamName, 
            'Select a team', 
            true
          )
        ).className('ui input pointer wide-width space-bottom').click(() => goToTeams({ leagueId: this.props.history.leagueId, place: 1 })),
        span(text('Top 2')),
        div(
          input(
            this.state.topTeamsPredictions && 
            this.state.topTeamsPredictions.top2 &&
            this.state.topTeamsPredictions.top2.teamName,
            'Select a team', 
            true
          )
        ).className('ui input pointer wide-width space-bottom').click(() => goToTeams({ leagueId: this.props.history.leagueId, place: 2 })),
        span(text('Top 3')),
        div(
          input(
            this.state.topTeamsPredictions && 
            this.state.topTeamsPredictions.top3 &&
            this.state.topTeamsPredictions.top3.teamName,
            'Select a team', 
            true
          )
        ).className('ui input pointer wide-width space-bottom').click(() => goToTeams({ leagueId: this.props.history.leagueId, place: 3 })),
        div(
          input('Clear', null, false, 'button').click(() => this.clearTopTeamsPredictions())
            .className('ui negative basic button')
        ).className('text-align-right'),
        h3('Best player of the season:'),
        div(
          input(
            this.state.topPlayerPrediction && this.state.topPlayerPrediction.playerName, 
            'Select a player', 
            true
          )
        ).click(() => goToPlayers({ leagueId: this.props.history.leagueId })).className('ui input pointer wide-width'),
        div(
          input('Clear', null, false, 'button').click(() => this.clearTopPlayerPredictions())
            .className('ui negative basic button')
        ).className('text-align-right'),
        input('Back', null, false, 'button').click(() => goToHome()).className('ui button')
      );
    } else return span();
  }
}
