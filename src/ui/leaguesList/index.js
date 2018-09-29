import Component from '../../lib/dom/component.js';
import League from './league.js';
import { div, h1, span, ul } from '../../lib/dom/dom.js';
import { getLeagues } from '../../services/apiService';

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
        div(...this.state.leagues.map(league => new League(league)))
          .className('ui large middle aligned animated relaxed divided list wide-width')
      )
    );
  }
}