import Component from '../../lib/dom/component.js';
import { goToPlayers, goToTeams } from '../../services/routerService.js';
import { h1, h3, input, li, ol, span } from '../../lib/dom/dom.js';

export default class TeamsList extends Component {
  constructor() {
    super();
  }

  render() {
    return span(
      h1('Balili')
    );
  }
}
