import { goTo, replace } from '../lib/router';

export const goToHome = state => goTo('/', state);
export const replaceHome = state => replace('/', state);