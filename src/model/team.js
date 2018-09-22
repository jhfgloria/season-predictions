export default class Team {
  constructor({teamId, teamName, teamColor}, leagueName) {
    this.leagueName = leagueName;
    this.teamId = teamId;
    this.teamName = teamName;
    this.teamColor = teamColor;
  }
}
