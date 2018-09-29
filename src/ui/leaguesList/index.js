import Component from '../../lib/dom/component.js';
import League from './league.js';
import { getLeagues } from '../../services/apiService';
import { h1, span, ul } from '../../lib/dom/dom.js';

export default class LeaguesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leagues: getLeagues()
    }
  }

  render() {
    return (
      span(
        h1('Leagues'),
        ul(this.state.leagues.map(league => new League(league)))
      )
    );
  }
}