import '../style/semantic.2.4.0/semantic.min.css';
import '../style/season-predictions/index.css';

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
    let component;
    if (this.state.splashing) {
      component = div(
        new SplashScreen({ splashTime: 1000, onLeave: this.onSplashScreenLeaving.bind(this) })
      ).className('middle aligned row tall-height');
    } else if (this.state.loading) {
      component = h1('Loading');
    } else {
      const homeComponent = LeagueList;
      component = new Router({
        homeComponent: homeComponent, 
        routes: {
          '/': homeComponent,
          '/season_predictions/{leagueId}': SeasonPredictions,
          '/season_predictions/{leagueId}/teams': TeamsList,
          '/season_predictions/{leagueId}/players': PlayersList 
        }
      });
    }
    return div(
      div().className('four wide computer three wide tablet column'),
      div(component).className('sixteen wide mobile eight wide computer ten wide tablet column'),
      div().className('four wide computer column three wide tablet')
    ).className('ui grid container tall-height');
  }
}
