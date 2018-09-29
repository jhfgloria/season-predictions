import Component from '../../lib/dom/component.js';
import { getPlayers } from '../../services/apiService.js';
import { replaceHome, replaceSeasonPredictions } from '../../services/routerService.js';
import { h1, h3, input, ul, li, ol, span } from '../../lib/dom/dom.js';
import { predictTopPlayer } from '../../services/predictionService.js';

export default class PlayersList extends Component {
  constructor(props) {
    super(props);
    if (this.props.history) {
      this.state = {
        players: getPlayers(this.props.history.leagueId)
      };
    } else {
      replaceHome();
    }
  }

  predict(player) {
    predictTopPlayer(player, this.props.history.leagueId);
    replaceSeasonPredictions({ leagueId: this.props.history.leagueId });
  }

  render() {
    if (this.state.players) {
      return (
        span(
          h1('Top Players'),
          ul(this.state.players.map(player => li(player.playerName).click(() => this.predict(player)))),
          input('Back', null, false, 'button').click(() => replaceSeasonPredictions({ leagueId: this.props.history.leagueId }))
        )
      );
    } else {
      return span();
    }
  }
}
