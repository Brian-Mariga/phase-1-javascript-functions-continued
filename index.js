// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (job = "go to the office") {
  return `This Monday, I will ${job}.`;
};
mondayWork();

function wrapAdjective(visualFlair = "*") {
  return function (part1 = "special") {
    return `You are ${visualFlair}${part1}${visualFlair}!`;
  };
}