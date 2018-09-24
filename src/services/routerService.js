const _goTo = (delta, state) => {
  history.pushState(state, '', delta)
  const popStateEvent = new PopStateEvent('popstate', { state });
  window.dispatchEvent(popStateEvent);
};

const _replace = (delta, state) => {
  history.replaceState(state, '', delta)
  const popStateEvent = new PopStateEvent('popstate', { state });
  window.dispatchEvent(popStateEvent);
};

export const goToHome = state => _goTo('/', state);
export const replaceHome = state => _replace('/', state);
export const goToSeasonPredictions = state => _goTo('/season_predictions', state);
export const replaceSeasonPredictions = state => _replace('/season_predictions', state);
