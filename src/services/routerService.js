import { goTo, replace } from '../lib/router';

export const goToHome = state => goTo('/', state);
export const replaceHome = state => replace('/', state);
export const goToSeasonPredictions = state => goTo('/season_predictions', state);