var TennisGame = require("../src/TennisGame");

describe('TennisGame', function () {
    var tennisGame;

    beforeEach(function () {
        tennisGame = new TennisGame();
    });

    it('Should get the scores of the players at match start', function () {

        var score = tennisGame.getScore();

        expect(score.player1).toEqual("0");
        expect(score.player2).toEqual("0");
    });

    it('Should player 1 win the first ball', function () {

        playerOneScoresPoints(1);

        var score = tennisGame.getScore();

        expect(score.player1).toEqual("15");
        expect(score.player2).toEqual("0");
    });

    it('Should player2 win the first ball', function () {

        playerTwoScoresPoints(1);

        var score = tennisGame.getScore();

        expect(score.player1).toEqual("0");
        expect(score.player2).toEqual("15");
    });

    it('Should player1 score first two balls', function () {

        playerOneScoresPoints(2);

        var score = tennisGame.getScore();

        expect(score.player1).toEqual("30");
        expect(score.player2).toEqual("0");
    });

    it('Should player2 score first two balls', function() {

        playerTwoScoresPoints(2);

        var score = tennisGame.getScore();

        expect(score.player1).toEqual("0");
        expect(score.player2).toEqual("30");
    });

    it('Should player1 score first three balls', function() {

        playerOneScoresPoints(3);

        var score = tennisGame.getScore();

        expect(score.player1).toEqual("40");
        expect(score.player2).toEqual("0");
    });

    it('Should player1 wins the game', function() {

        playerOneScoresPoints(4);

        var score = tennisGame.getScore();

        expect(score.player1).toEqual("40");
        expect(score.player2).toEqual("0");
        expect(score.result).toEqual("Player1 wins.");
    });

    it('Should player2 wins the game', function() {

        playerOneScoresPoints(2);
        playerTwoScoresPoints(4);

        var score = tennisGame.getScore();

        expect(score.player1).toEqual("30");
        expect(score.player2).toEqual("40");
        expect(score.result).toEqual("Player2 wins.");
    });

    it('Should players are deuce', function () {

        playerOneScoresPoints(3);
        playerTwoScoresPoints(3);

        var score = tennisGame.getScore();

        expect(score.player1).toEqual("40");
        expect(score.player2).toEqual("40");
        expect(score.result).toEqual("Deuce");
    });

    function playerOneScoresPoints(times) {

        for(var ball = 0; ball < times; ball++) {
            tennisGame.playerOneScored();
        }
    }

    function playerTwoScoresPoints(times) {

        for(var ball = 0; ball < times; ball++) {
            tennisGame.playerTwoScored();
        }
    }
})