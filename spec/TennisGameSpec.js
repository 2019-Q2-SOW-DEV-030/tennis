var TennisGame = require("../src/TennisGame");

describe('TennisGame', function () {

    it('Should get the scores of the players at match start', function () {
        var tennisGame = new TennisGame();

        var score = tennisGame.getScore();

        expect(score.player1).toEqual("0");
        expect(score.player2).toEqual("0");
    });

    it('Should player 1 win the first ball', function () {
        var tennisGame = new TennisGame();

        tennisGame.playerOneScored();

        var score = tennisGame.getScore();

        expect(score.player1).toEqual("15");
        expect(score.player2).toEqual("0");
    });
})