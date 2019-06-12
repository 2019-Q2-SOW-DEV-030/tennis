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

        setScore(pointsToScore(playerTwoPoints), "player2");

        decideWinner();
    }
    
    this.getScore = function () {
        return scoreBoard;
    }

    function decideWinner() {
        if (playerOnePoints > constants.NUMBER_THREE && playerOnePoints > playerTwoPoints) {
            scoreBoard.result = "Player1 wins.";
        }  else if (playerTwoPoints > constants.NUMBER_THREE && playerTwoPoints > playerOnePoints) {
            scoreBoard.result = "Player2 wins.";
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