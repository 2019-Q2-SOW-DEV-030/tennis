var TennisGame = function() {

    var scoreBoard = {
        player1: "0",
        player2: "0"
    };

    this.playerOneScored = function () {
        scoreBoard.player1 = "15";
    }

    this.playerTwoScored = function() {
        scoreBoard.player2 = "15";
    }

    this.getScore = function() {
        return scoreBoard;
    }
}

module.exports = TennisGame; 