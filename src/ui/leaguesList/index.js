import Component from '../../lib/dom/component.js';
import League from './league.js';
import { span, h1, ul } from '../../lib/dom/dom.js';

export default class LeaguesList extends Component {
  constructor(leagues) {
    super();
    this.state = {
      leagues: leagues
    };
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