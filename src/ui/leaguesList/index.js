import Component from '../../lib/dom/component.js';
import League from './league.js';

export default class LeaguesList extends Component {
  constructor(leagues) {
    super();
    this.state = {
      leagues: leagues
    };
  }

  render() {
    return `
      <h1>Leagues</h1>
      <ul>${this.state.leagues.map(league => new League(league)).join('')}</ul>
    `;
  }
}