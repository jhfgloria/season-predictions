import Component from '../../lib/dom/component.js';
import Player from './player.js';
import { getPlayers } from '../../services/apiService.js';
import { replaceHome, replaceSeasonPredictions } from '../../services/routerService.js';
import { div, h1, h3, input, ul, li, ol, span } from '../../lib/dom/dom.js';
import { predictTopPlayer } from '../../services/predictionService.js';

export default class PlayersList extends Component {
  constructor(props) {
    super(props);
    if (this.props.history) {
      const players = getPlayers(this.props.history.leagueId).sort((playerA, playerB) => {
        return (playerA.playerName > playerB.playerName) - (playerA.playerName < playerB.playerName)
      });
      this.state = {
        players: players
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
        div(
          div(
            h1('Top Players')
          ).className('row'),
          div(
            div(...this.state.players.map(player => new Player({ player: player, onClick: () => this.predict(player) })))
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
