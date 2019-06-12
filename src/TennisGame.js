var constants = require("../src/utils/constants");

var TennisGame = function () {

    var scoreBoard = {
        player1: constants.STRING_ZERO,
        player2: constants.STRING_ZERO
    };

    var playerOnePoints = constants.STRING_ZERO;
    var playerTwoPoints = constants.STRING_ZERO;
    var DEUCE_POINT = constants.NUMBER_THREE;
    var ADVANTAGE_POINT = constants.NUMBER_FOUR;
    var POINT_TO_WIN_DEUCE_GAME = constants.NUMBER_FIVE;
    var POINTS_TO_SCORE = {
        1: "15",
        2: "30",
        3: "40"
    };
    var RESULTS = {
        DEUCE: "Deuce",
        PLAYER_ONE_WINS: "Player1 wins.",
        PLAYER_TWO_WINS: "Player2 wins.",
        PLAYER_ONE_ADVANTAGE: "Player1 gets advantage",
        PLAYER_TWO_ADVANTAGE: "Player2 gets advantage",
    };
    var deuceGame = false;
    var advantagePlayer;

    this.playerOneScored = function () {
        increasePlayerOnePoints();

        setScore(pointsToScore(playerOnePoints), "player1");

        setAdvantagePlayer("player1");

        decideWinner();
    }

    this.playerTwoScored = function () {
        increasePlayerTwoPoints()

        setScore(pointsToScore(playerTwoPoints), "player2");

        setAdvantagePlayer("player2");

        decideWinner();
    }

    this.getScore = function () {
        return scoreBoard;
    }

    function decideWinner() {
        if (!isDeuceGame()) {
            if (isDeucePoints()) {
                setThisGameAsDeuce();
                setResultAsDeuce();
            } else if (isPlayerWinsTheGame(playerOnePoints, playerTwoPoints)) {
                setResultAsPlayerOneWinsTheGame();
            } else if (isPlayerWinsTheGame(playerTwoPoints, playerOnePoints)) {
                setResultAsPlayerTwoWinsTheGame();
            }
        } else {
            if (isBothPlayersInAdvantage()) {
                setPointsBackToDeuce();
                setResultAsDeuce();
                setAdvantagePlayerAsEmpty();
            } else if (advantagePlayer === "player1") {
                if (isPlayerWinDeuceGame(playerOnePoints)) {
                    setResultAsPlayerOneWinsTheGame();
                } else {
                    setResultAsPlayerOneAdvantage();
                }
            } else if (advantagePlayer === "player2") {
                if (isPlayerWinDeuceGame(playerTwoPoints)) {
                    setResultAsPlayerTwoWinsTheGame();
                } else {
                    setResultAsPlayerTwoAdvantage();
                }
            }
        }
    }

    function isPlayerWinDeuceGame(points) {
        return points === POINT_TO_WIN_DEUCE_GAME;
    }

    function increasePlayerOnePoints() {
        playerOnePoints++;
    }

    function increasePlayerTwoPoints() {
        playerTwoPoints++;
    }

    function setAdvantagePlayer(player) {
        if (isDeuceGame()) {
            advantagePlayer = player;
        }
    }

    function isDeuceGame() {
        return deuceGame;
    }

    function setThisGameAsDeuce() {
        deuceGame = true;
    }

    function setResultAsDeuce() {
        setResult(RESULTS.DEUCE);
    }

    function isDeucePoints() {
        return (playerOnePoints === 3 && playerOnePoints === playerTwoPoints);
    }

    function isPlayerWinsTheGame(point1, point2) {
        return point1 > DEUCE_POINT && point1 > point2;
    }

    function setResultAsPlayerOneWinsTheGame() {
        setResult(RESULTS.PLAYER_ONE_WINS);
    }

    function setResultAsPlayerTwoWinsTheGame() {
        setResult(RESULTS.PLAYER_TWO_WINS);
    }


    function isBothPlayersInAdvantage() {
        return isPointsAreEqual(ADVANTAGE_POINT);
    }

    function setAdvantagePlayerAsEmpty() {
        advantagePlayer = "";
    }

    function setResultAsPlayerOneAdvantage() {
        setResult(RESULTS.PLAYER_ONE_ADVANTAGE);
    }

    function setResultAsPlayerTwoAdvantage() {
        setResult(RESULTS.PLAYER_TWO_ADVANTAGE);
    }

    function setPointsBackToDeuce() {
        playerOnePoints--;
        playerTwoPoints--;
    }

    function setScore(score, player) {
        if (score) {
            scoreBoard[player] = score;
        }
    }

    function setResult(value) {
        scoreBoard.result = value;
    }

    function isPointsAreEqual(pointsToCheck) {
        return (playerOnePoints === pointsToCheck && playerOnePoints === playerTwoPoints);
    }

    function pointsToScore(points) {
        return POINTS_TO_SCORE[points];
    }
}

module.exports = TennisGame; 