import Component from './lib/component.js';
import League from './model/league.js';
import Player from './model/player.js';
import Router from './containers/router.js';
import Team from './model/team.js';
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



const mock = {
  "leagues": [
    {
      "leagueId":1,
      "leagueName":"Premier League",
      "country":"England",
      "teams":[{
          "teamId": 1,
          "teamName":"Manchester City",
          "teamColor": "#65b2e9",
          "topPlayers": [{
              "playerId": 1,
              "playerName": "Sergio Aguero",
              "goalsLastSeason": 21
            },
            {
              "playerId": 2,
              "playerName": "Raheem Sterling",
              "goalsLastSeason": 18
            },
            {
              "playerId": 3,
              "playerName": "Gabriel Jesus",
              "goalsLastSeason": 13
            }]
        },
        {
          "teamId": 2,
          "teamName":"Manchester United",
          "teamColor": "#DA291C",
          "topPlayers": [{
              "playerId": 4,
              "playerName": "Romelu Lukaku",
              "goalsLastSeason": 16
            },
            {
              "playerId": 5,
              "playerName": "Jesse Lingard",
              "goalsLastSeason": 7
            },
            {
              "playerId": 6,
              "playerName": "Marcus Rashford",
              "goalsLastSeason": 8
            }]
        },
        {
          "teamId": 3,
          "teamName":"Tottenham",
          "teamColor": "#132257",
          "topPlayers": [{
              "playerId": 7,
              "playerName": "Harry Kane",
              "goalsLastSeason": 30
            },
            {
              "playerId": 8,
              "playerName": "Son Heung-Min",
              "goalsLastSeason": 12
            },
            {
              "playerId": 9,
              "playerName": "Christian Eriksen",
              "goalsLastSeason": 10
            }]
        },
        {
          "teamId": 4,
          "teamName":"Liverpool",
          "teamColor": "#c8102E",
          "topPlayers": [{
              "playerId": 10,
              "playerName": "Mohamed Salah",
              "goalsLastSeason": 32
            },
            {
              "playerId": 11,
              "playerName": "Roberto Firmino",
              "goalsLastSeason": 15
            },
            {
              "playerId": 12,
              "playerName": "Sadio Mané",
              "goalsLastSeason": 10
            }]
        },
        {
          "teamId": 5,
          "teamName":"Chelsea",
          "teamColor": "#034694",
          "topPlayers": [{
              "playerId": 13,
              "playerName": "Eden Hazard",
              "goalsLastSeason": 12
            },
            {
              "playerId": 14,
              "playerName": "Álvaro Morata",
              "goalsLastSeason": 11
            }]
        },
        {
          "teamId": 6,
          "teamName":"Arsenal",
          "teamColor": "#EC0C1C",
          "topPlayers": [{
              "playerId": 15,
              "playerName": "Alexandre Lacazette",
              "goalsLastSeason": 14
            },
            {
              "playerId": 16,
              "playerName": "Pierre-Emerick Aubameyang",
              "goalsLastSeason": 10
            }]
        },
        {
          "teamId": 7,
          "teamName":"Burnley",
          "teamColor": "#6C1D45",
          "topPlayers": [{
              "playerId": 17,
              "playerName": "Chris Wood",
              "goalsLastSeason": 10
            },
            {
              "playerId": 18,
              "playerName": "Ashley Barnes",
              "goalsLastSeason": 9
            }]
        },
        {
          "teamId": 8,
          "teamName":"Everton",
          "teamColor": "#274488",
          "topPlayers": [{
              "playerId": 19,
              "playerName": "Oumar Niasse",
              "goalsLastSeason": 8
            },
            {
              "playerId": 20,
              "playerName": "Richarlison",
              "goalsLastSeason": 5
            }]
        },
        {
          "teamId": 9,
          "teamName":"Leicester",
          "teamColor": "#0053a0",
          "topPlayers": [{
              "playerId": 21,
              "playerName": "Jamie Vardy",
              "goalsLastSeason": 20
            }]
        },
        {
          "teamId": 10,
          "teamName":"Newcastle",
          "teamColor": "#241F20",
          "topPlayers": [{
              "playerId": 22,
              "playerName": "Ayoze Pérez",
              "goalsLastSeason": 8
            }]
        },
        {
          "teamId": 11,
          "teamName":"Crystal Palace",
          "teamColor": "#1B458F",
          "topPlayers": [{
              "playerId": 23,
              "playerName": "Luka Milivojevic",
              "goalsLastSeason": 10
            }]
        },
        {
          "teamId": 12,
          "teamName":"Bournemouth",
          "teamColor": "#b50e12",
          "topPlayers": [{
              "playerId": 24,
              "playerName": "Joshua King",
              "goalsLastSeason": 8
            }]
        },
        {
          "teamId": 13,
          "teamName":"West Ham",
          "teamColor": "#7A263A",
          "topPlayers": [{
              "playerId": 25,
              "playerName": "Marko Arnautovic",
              "goalsLastSeason": 11
            }]
        },
        {
          "teamId": 14,
          "teamName":"Watford",
          "teamColor": "#FEEB00",
          "topPlayers": [{
              "playerId": 26,
              "playerName": "Abdoulaye Doucouré",
              "goalsLastSeason": 7
            }]
        },
        {
          "teamId": 15,
          "teamName":"Brighton",
          "teamColor": "#0057B8",
          "topPlayers": [{
              "playerId": 27,
              "playerName": "Glenn Murray",
              "goalsLastSeason": 12
            }]
        },
        {
          "teamId": 16,
          "teamName":"Huddersfield",
          "teamColor": "#0E63AD",
          "topPlayers": [{
              "playerId": 28,
              "playerName": "Steve Mounie",
              "goalsLastSeason": 7
            }]
        },
        {
          "teamId": 17,
          "teamName":"Southampton",
          "teamColor": "#EF3340",
          "topPlayers": [{
              "playerId": 29,
              "playerName": "Charlie Austin",
              "goalsLastSeason": 7
            }]
        },
        {
          "teamId": 18,
          "teamName":"Cardiff",
          "teamColor": "#0000e7",
          "topPlayers": [{
              "playerId": 30,
              "playerName": "Junior Hoilett",
              "goalsLastSeason": 11
            }]
        },  
        {
          "teamId": 19,
          "teamName":"Fulham",
          "teamColor": "#FFFFFF",
          "topPlayers": [{
              "playerId": 31,
              "playerName": "Ryan Sessegnon",
              "goalsLastSeason": 16
            }]
        },
        {
          "teamId": 20,
          "teamName":"Wolves",
          "teamColor": "#FC891C",
          "topPlayers": [{
              "playerId": 32,
              "playerName": "Diogo Jota",
              "goalsLastSeason": 18
            }]
        }
    ]}
  ]     
};
 
var state = {};

const bootstrap = () => {
  // const _buildLeagues = data => Promise.resolve(data.leagues.map(league => new League(league)));

  // const _buildTeams = data => new Promise(resolve => {
  //   let teams = {};
    
  //   data.leagues.forEach(league => {
  //     teams[league.leagueId] = league.teams.map(team => new Team(team, league.leagueName));
  //   });

  //   resolve(teams);
  // });

  // const _buildPlayers = data => new Promise(resolve => {
  //   let players = {};
    
  //   data.leagues.forEach(league => {
  //     league.teams.forEach(team => {
  //       players[team.teamId] = team.topPlayers.map(player => new Player(player, team.teamName, league.leagueName));
  //     })
  //   });
    
  //   resolve(players);
  // });
  // //request data TODO replace for server request
  // const data = mock;
  // const promises = [_buildLeagues(data), _buildTeams(data), _buildPlayers(data)];
  // Promise.all(promises)
  //   .then(result => {
  //     state.leagues = result[0];
  //     state.teams = result[1];
  //     state.players = result[2];

  //     console.log(state);
  //   })
  //   .catch(err => console.error(err))
  

  
  
  
  
  
  const router = new Router(
    new TestComponent(), 
    {
      '/': new TestComponent(),
      '/season_predictions': new TestComponent2()
    }
  );

  renderDom('app', router);
  window.setTimeout(goToSeasonPredictions, 2000);
}

bootstrap();
