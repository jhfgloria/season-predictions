import Component from '../lib/dom/component.js';
import LeagueList from './leaguesList';
import PlayersList from './playersList';
import Router from '../lib/router';
import SeasonPredictions from './seasonPredictions';
import SplashScreen from './splasScreen';
import TeamsList from './teamsList';
import { bootstrap, buildLeagues, buildTeams, buildPlayers } from '../services/apiService.js';
import { div, h1 } from '../lib/dom/dom.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      splashing: true, 
      loading: true 
    };
    bootstrap().then(response => { 
      this.setState({
        loading: false
      });
    }).catch(error => { 
      console.error(error); 
    });
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
      const homeComponent = LeagueList;
      const router = new Router({
        homeComponent: homeComponent, 
        routes: {
          '/': homeComponent,
          '/season_predictions/{leagueId}': SeasonPredictions,
          '/season_predictions/{leagueId}/teams': TeamsList,
          '/season_predictions/{leagueId}/players': PlayersList 
        }
      });
      return div(router);
    }
  }
}
