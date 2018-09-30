export const predictTopPlayer = (player, leagueId) => {
  let predictions = JSON.parse(localStorage.getItem(leagueId)) || {};
  predictions.topPlayer = player;
  localStorage.setItem(leagueId, JSON.stringify(predictions));
};

export const removeTopPlayerPrediction = (leagueId) => {
  let predictions = JSON.parse(localStorage.getItem(leagueId)) || {};
  predictions.topPlayer = null;
  localStorage.setItem(leagueId, JSON.stringify(predictions));
}

export const predictTopTeam = (team, place, leagueId) => {
  let predictions = JSON.parse(localStorage.getItem(leagueId)) || {};
  for (let i = 1; i < 4; i++) {
    if (predictions[`top${i}`] && predictions[`top${i}`].teamId === team.teamId) {
      predictions[`top${i}`] = null;
    }
  }
  predictions[`top${place}`] = team;
  localStorage.setItem(leagueId, JSON.stringify(predictions));
};

export const removeTopTeamsPrediction = (leagueId) => {
  let predictions = JSON.parse(localStorage.getItem(leagueId)) || {};
  for (let i = 1; i < 4; i++) {
    predictions[`top${i}`] = null;
  }
  localStorage.setItem(leagueId, JSON.stringify(predictions));
}

export const getTopPlayerPredicition = (leagueId) => {
  let predictions = JSON.parse(localStorage.getItem(leagueId));
  return (predictions && predictions.topPlayer) || null;
}

export const getTopTeamsPredicition = (leagueId) => {
  let predictions = JSON.parse(localStorage.getItem(leagueId));
  if (predictions) {
    const { top1, top2, top3 } = predictions;
    return { top1: top1 || null, top2: top2 || null, top3: top3 || null };
  }
  return null;
}
