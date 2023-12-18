var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: -20},
          { type: "sawblade", x: 800, y: -20},
          { type: "sawblade", x: 1200, y: -20},
          { type: "enemy", x: 2000, y: groundY - 50 },
          { type: "enemy", x: 830, y: groundY - 50 },
          { type: "enemy", x: 975, y: groundY - 50 },
          { type: "reward", x: 2500, y: 0},
          { type: "reward", x: 500, y: 0},
          { type: "marker", x: 2700, y: groundY - 50},

        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: -10},
          { type: "sawblade", x: 800, y: -10},
          { type: "sawblade", x: 1200, y: -10},
          { type: "enemy", x: 900, y: groundY - 30},
          { type: "enemy", x: 830, y: groundY - 30},
          { type: "enemy", x: 975, y: groundY - 30},
          { type: "reward", x: 1000, y: 0},
          { type: "reward", x: 500, y: 0},
          { type: "marker", x: 2700, y: groundY - 30},
        ],
      },
      {
        name: "Robot thingy",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 500, y: groundY },
          { type: "sawblade", x: 800, y: groundY },
          { type: "sawblade", x: 1100, y: groundY },
          { type: "enemy", x: 830, y: groundY - 30},
          { type: "enemy", x: 900, y: groundY - 30},
          { type: "enemy", x: 975, y: groundY - 30},
          { type: "reward", x: 2500, y: groundY - 30},
          { type: "marker", x: 2700, y: groundY - 30},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};
var secondObject = levelData[0].gameItems[1];
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
