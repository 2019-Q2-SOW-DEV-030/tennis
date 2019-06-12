var constants = require("../src/utils/constants");

var TennisGame = function() {

    var scoreBoard = {
        player1: constants.STRING_ZERO,
        player2: constants.STRING_ZERO
    };

    this.playerOneScored = function () {
        scoreBoard.player1 = constants.STRING_FIFTEEN;
    }

    this.playerTwoScored = function() {
        scoreBoard.player2 = constants.STRING_FIFTEEN;
    }

    this.getScore = function() {
        return scoreBoard;
    }
}

module.exports = TennisGame; 