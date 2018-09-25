import Component from '../../lib/dom/component.js';

export default class League extends Component {
  constructor({ leagueId, leagueName, country }) {
    super();
    this.state = {
      leagueId: leagueId,
      leagueName: leagueName,
      country: country
    };
  }

  render () {
    return `<li>${this.state.leagueName}</li>`;
  }
}
