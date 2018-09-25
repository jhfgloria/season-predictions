import axios from 'axios';
import League from '../model/league.js';
import Player from '../model/player.js';
import Team from '../model/team.js';

export const bootstrap = () => {
  return axios({
    method: 'get',
    url: 'https://s3-eu-west-1.amazonaws.com/forza-home-assignment/refinery-frontend/league-data.json'
  });
};

export const buildLeagues = data => Promise.resolve(data.leagues.map(league => new League(league)));

export const buildTeams = data => new Promise(resolve => {
  let teams = {};
  
  data.leagues.forEach(league => {
    teams[league.leagueId] = league.teams.map(team => new Team(team, league.leagueName));
  });

  resolve(teams);
});

export const buildPlayers = data => new Promise(resolve => {
  let players = {};
  
  data.leagues.forEach(league => {
    league.teams.forEach(team => {
      players[team.teamId] = team.topPlayers.map(player => new Player(player, team.teamName, league.leagueName));
    })
  });
  
  resolve(players);
});