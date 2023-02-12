"use strict";
const goals = [8, 1, 1, 3, 2, -1, 5];
const mostGoalsMatch = Math.max(...goals);
const numberOfMostGoalsMatch = goals.findIndex((goal) => {return goal === mostGoalsMatch});
alert(`Самый результативный матч был под номером ${numberOfMostGoalsMatch + 1} В нем было забито ${mostGoalsMatch} гол(ов).`);
const allMatchesPlayed = goals.filter((goal) => {return goal > 0});
const mostLowScoreMatch = Math.min(...allMatchesPlayed);
const allMostLowScoreMatch = allMatchesPlayed.filter((goal) => {return goal === mostLowScoreMatch});
const goalsSum = allMatchesPlayed.reduce((acc, goal) => {return acc + goal});

console.log(goalsSum);





