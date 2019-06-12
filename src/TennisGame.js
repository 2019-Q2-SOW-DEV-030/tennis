var constants = require("../src/utils/constants");

var TennisGame = function () {

    var scoreBoard = {
        player1: constants.STRING_ZERO,
        player2: constants.STRING_ZERO
    };

    var playerOnePoints = constants.STRING_ZERO;
    var playerTwoPoints = 0;

    this.playerOneScored = function () {
        playerOnePoints++;

        if (playerOnePoints === 1) {
            scoreBoard.player1 = constants.STRING_FIFTEEN;
        } else if (playerOnePoints === 2) {
            scoreBoard.player1 = constants.STRING_THIRTY;
        }
    }

    this.playerTwoScored = function () {
        playerTwoPoints++;

        if (playerTwoPoints === 1) {
            scoreBoard.player2 = "15";
        } else if (playerTwoPoints === 2) {
            scoreBoard.player2 = "30"
        }
    }

    this.getScore = function () {
        return scoreBoard;
    }
}

module.exports = TennisGame; 