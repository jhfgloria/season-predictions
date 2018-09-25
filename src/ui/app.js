import Component from '../lib/dom/component.js';
import League from '../model/league.js';
import LeagueList from './leaguesList';
import Router from '../lib/router';
import { bootstrap, buildLeagues, buildTeams, buildPlayers } from '../services/bootstrapService.js';

class TestComponent extends Component {
  render() {
    return 'test 1';
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = { loading: true };
    bootstrap()
      .then(response => {
        const { data } = response;
        Promise.all([buildLeagues(data), buildTeams(data), buildPlayers(data)])
          .then(result => {
            this.setState({
              leagues: result[0],
              teams: result[1],
              players: result[2],
              loading: false
            });
          })
          .catch(err => { console.error(err); })
      })
      .catch(err => { console.error(err); })
  }
  
  render() {
    if (this.state.loading) {
      return `<h1>Loading</h1>`
    } else {
      const router = new Router(
        new TestComponent(), 
        {
          '/': new TestComponent(),
          '/season_predictions': new LeagueList(this.state.leagues)
        }
      );
      return `<div>${router}</div>`;
    }
  }
}
