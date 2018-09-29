export const predictTopPlayer = (player, leagueId) => {
  let predictions = JSON.parse(localStorage.getItem(leagueId)) || {};
  predictions.topPlayer = player;
  localStorage.setItem(leagueId, JSON.stringify(predictions));
};

export const predictTopTeam = (team, place, leagueId) => {
  let predictions = JSON.parse(localStorage.getItem(leagueId)) || {};
  predictions[`top${place}`] = team;
  localStorage.setItem(leagueId, JSON.stringify(predictions));
};

export const getTopPlayerPredicition = (leagueId) => {
  let predictions = JSON.parse(localStorage.getItem(leagueId));
  return predictions && predictions.topPlayer;
}

export const getTopTeamsPredicition = (leagueId) => {
  let predictions = JSON.parse(localStorage.getItem(leagueId));
  if (predictions) {
    const { top1, top2, top3 } = predictions;
    return { top1, top2, top3 };
  }
}
