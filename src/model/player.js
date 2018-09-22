export default class Player {
  constructor({ playerId, playerName, goalsLastSeason }, teamName, leagueName) {
    this.teamName = teamName;
    this.leagueName = leagueName;
    this.playerId = playerId;
    this.playerName = playerName;
    this.goalsLastSeason = goalsLastSeason;
  }
}
