import Component from '../../lib/dom/component.js';
import { li } from '../../lib/dom/dom.js';

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
    return li(this.state.leagueName).click(() => alert('hello world'));
  }
}
