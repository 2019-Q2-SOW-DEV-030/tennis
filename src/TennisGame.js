var constants = require("../src/utils/constants");

var TennisGame = function () {

    var scoreBoard = {
        player1: constants.STRING_ZERO,
        player2: constants.STRING_ZERO
    };

    var playerOnePoints = 0;

    this.playerOneScored = function () {
        playerOnePoints++;

        if (playerOnePoints === 1) {
            scoreBoard.player1 = "15";
        } else if (playerOnePoints === 2) {
            scoreBoard.player1 = "30"
        }
    }

    this.playerTwoScored = function () {
        scoreBoard.player2 = constants.STRING_FIFTEEN;
    }

    this.getScore = function () {
        return scoreBoard;
    }
}

module.exports = TennisGame; 