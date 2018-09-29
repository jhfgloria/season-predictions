import Component from '../../lib/dom/component.js';
import { getTeams } from '../../services/apiService';
import { 
  getTopPlayerPredicition, 
  getTopTeamsPredicition,
  removeTopPlayerPrediction,
  removeTopTeamsPrediction 
} from '../../services/predictionService.js';
import { goToHome, goToPlayers, goToTeams, replaceHome } from '../../services/routerService.js';
import { h1, h3, input, li, ol, span } from '../../lib/dom/dom.js';

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
        ol([
          li(
            input(
              this.state.topTeamsPredictions && 
              this.state.topTeamsPredictions.top1 &&
              this.state.topTeamsPredictions.top1.teamName, 
              'Select a team', 
              true
            )).click(() => goToTeams({ leagueId: this.props.history.leagueId, place: 1 })
          ),
          li(
            input(
              this.state.topTeamsPredictions && 
              this.state.topTeamsPredictions.top2 &&
              this.state.topTeamsPredictions.top2.teamName,
              'Select a team', 
              true
            )).click(() => goToTeams({ leagueId: this.props.history.leagueId, place: 2 })),
          li(
            input(
              this.state.topTeamsPredictions && 
              this.state.topTeamsPredictions.top3 &&
              this.state.topTeamsPredictions.top3.teamName,
              'Select a team', 
              true
            )).click(() => goToTeams({ leagueId: this.props.history.leagueId, place: 3 }))
        ]),
        input('Clear', null, false, 'button').click(() => this.clearTopTeamsPredictions()),
        h3('Best player of the season:'),
        ol([
          li(
            input(
              this.state.topPlayerPrediction && this.state.topPlayerPrediction.playerName, 
              'Select a player', 
              true
            )).click(() => goToPlayers({ leagueId: this.props.history.leagueId })
          )
        ]),
        input('Clear', null, false, 'button').click(() => this.clearTopPlayerPredictions()),
        input('Back', null, false, 'button').click(() => goToHome())
      );
    } else return span();
  }
}
