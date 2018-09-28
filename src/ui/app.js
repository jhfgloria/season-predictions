import Component from '../lib/dom/component.js';
import SeasonPredictions from './seasonPredictions';
import SplashScreen from './splasScreen';
import LeagueList from './leaguesList';
import Router from '../lib/router';
import { bootstrap, buildLeagues, buildTeams, buildPlayers } from '../services/bootstrapService.js';
import { div, h1 } from '../lib/dom/dom.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      splashing: true, 
      loading: true 
    };
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

  onSplashScreenLeaving() {
    this.setState({
      splashing: false
    });
  }
  
  render() {
    if (this.state.splashing) {
      return div(
        new SplashScreen({ splashTime: 1000, onLeave: this.onSplashScreenLeaving.bind(this) })
      );
    } else if (this.state.loading) {
      return h1('Loading');
    } else {
      const homeComponent = new LeagueList({ leagues: this.state.leagues });
      const router = new Router({
        homeComponent: homeComponent, 
        routes: {
          '/': homeComponent,
          '/season_predictions': new SeasonPredictions({ teams: this.state.teams })
        }
      });
      return div(router);
    }
  }
}
