import Component from '../../lib/dom/component.js';
import { goToPlayers, goToTeams } from '../../services/routerService.js';
import { h1, h3, input, li, ol, span } from '../../lib/dom/dom.js';

export default class SeasonPredictions extends Component {
  constructor() {
    super();
  }

  render() {
    return span(
      h1('Season prediction'),
      h3('Top 3 teams:'),
      ol([
        li(input(null, 'Select a team', true)).click(() => goToTeams({leagueId: 1})),
        li(input(null, 'Select a team', true)).click(() => goToTeams({leagueId: 1})),
        li(input(null, 'Select a team', true)).click(() => goToTeams({leagueId: 1}))
      ]),
      h3('Best player of the season:'),
      ol([
        li(input(null, 'Select a player', true)).click(() => goToPlayers({leagueId: 1}))
      ])
    );
  }
}
