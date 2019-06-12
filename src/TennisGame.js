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

        setScore(pointsToScore(playerOnePoints), "player1");

        decideWinner();
    }

    this.playerTwoScored = function () {
        playerTwoPoints++;

        scoreBoard.player2 = POINTS_TO_SCORE[playerTwoPoints];
    }
    
    this.getScore = function () {
        return scoreBoard;
    }

    function decideWinner() {
        if (playerOnePoints > constants.NUMBER_THREE && playerOnePoints > playerTwoPoints) {
            scoreBoard.result = "Player1 wins.";
        }
    }

    function setScore(score, player) {
        if (score) {
            scoreBoard[player] = score;
        }
    }

    function pointsToScore(points) {
        return POINTS_TO_SCORE[points];
    }
}

module.exports = TennisGame; 