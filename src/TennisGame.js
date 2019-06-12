var constants = require("../src/utils/constants");

var TennisGame = function () {

    var scoreBoard = {
        player1: constants.STRING_ZERO,
        player2: constants.STRING_ZERO
    };

    var playerOnePoints = constants.STRING_ZERO;
    var playerTwoPoints = constants.STRING_ZERO;
    var POINTS_TO_SCORE = {
        1: "15",
        2: "30",
        3: "40"
    };

    this.playerOneScored = function () {
        playerOnePoints++;

        scoreBoard.player1 = POINTS_TO_SCORE[playerOnePoints];
    }

    this.playerTwoScored = function () {
        playerTwoPoints++;

        scoreBoard.player2 = POINTS_TO_SCORE[playerTwoPoints];
    }

    this.getScore = function () {
        return scoreBoard;
    }
}

module.exports = TennisGame; 