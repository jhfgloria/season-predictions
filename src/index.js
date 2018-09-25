import Component from './lib/component.js';
import Router from './containers/router.js';
import { bootstrap, buildLeagues, buildTeams, buildPlayers } from './services/bootstrapService.js';
import { goToHome, goToSeasonPredictions } from './services/routerService.js';
import { renderDom } from './lib/dom.js';

class TestComponent extends Component {
  render() {
    return 'test 1';
  }
}

class TestComponent2 extends Component {
  render() {
    return 'test 2';
  }
}

const _bootstrap = () => {
  let state;
  bootstrap()
    .then(response => {
      const { data } = response;
      const promises = [buildLeagues(data), buildTeams(data), buildPlayers(data)];

      Promise.all(promises)
        .then(result => {
          state = result;
          
          const router = new Router(
            new TestComponent(), 
            {
              '/': new TestComponent(),
              '/season_predictions': new TestComponent2()
            }
          );

          renderDom('app', router);
          window.setTimeout(goToSeasonPredictions, 2000);
        })
        .catch(err => console.err)
    })
    .catch(err => console.err)
}

_bootstrap();
