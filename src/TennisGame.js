var constants = require("../src/utils/constants");

var TennisGame = function () {

    var scoreBoard = {
        player1: constants.STRING_ZERO,
        player2: constants.STRING_ZERO
    };

    var playerOnePoints = constants.STRING_ZERO;
    var playerTwoPoints = constants.STRING_ZERO;

    this.playerOneScored = function () {
        playerOnePoints++;

        if (playerOnePoints === constants.NUMBER_ONE) {
            scoreBoard.player1 = constants.STRING_FIFTEEN;
        } else if (playerOnePoints === constants.NUMBER_TWO) {
            scoreBoard.player1 = constants.STRING_THIRTY;
        }
    }

    this.playerTwoScored = function () {
        playerTwoPoints++;

        if (playerTwoPoints === constants.NUMBER_ONE) {
            scoreBoard.player2 = constants.STRING_FIFTEEN;
        } else if (playerTwoPoints === constants.NUMBER_TWO) {
            scoreBoard.player2 = constants.STRING_THIRTY;
        }
    }

    this.getScore = function () {
        return scoreBoard;
    }
}

module.exports = TennisGame; 