import App from './ui/app.js';
import { bootstrap, buildLeagues, buildTeams, buildPlayers } from './services/bootstrapService.js';
import { goToHome, goToSeasonPredictions } from './services/routerService.js';
import { renderDom } from './lib/dom/dom.js';

const _bootstrap = () => {
  let state;
  bootstrap()
    .then(response => {
      const { data } = response;
      const promises = [buildLeagues(data), buildTeams(data), buildPlayers(data)];

      Promise.all(promises)
        .then(result => {
          state = result;
        })
        .catch(err => console.err)
    })
    .catch(err => console.err)
}

_bootstrap();
renderDom('app', new App());
window.setTimeout(goToSeasonPredictions, 2000);
