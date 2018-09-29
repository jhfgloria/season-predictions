import axios from 'axios';
import League from '../model/league.js';
import Player from '../model/player.js';
import Team from '../model/team.js';

var response;

export const bootstrap = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'https://s3-eu-west-1.amazonaws.com/forza-home-assignment/refinery-frontend/league-data.json'
    }).then(res => {
      response = res;
      resolve(response);
    }).catch(error => {
      console.error(error);
      reject(error);
    });
  })
};  

export const getLeagues = () => {
  return response.data.leagues.map(league => new League(league));
};

export const getTeams = leagueId => {
  const league = response.data.leagues.find(league => league.leagueId === leagueId);
  return league.teams.map(team => new Team(team, league.leagueName));
};

export const getPlayers = leagueId => {
  const league = response.data.leagues.find(league => league.leagueId === leagueId);
  let players = [];
  league.teams.forEach(team => {
    team.topPlayers.forEach(player => players.push(new Player(player)))
  });
  return players;
}