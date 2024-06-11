function diceGame() {
    var dice = [1, 2, 3, 4, 5, 6];
    // player 1
    var firstNum = Math.floor(Math.random() * 6);
    var player1 = dice[firstNum];

    // for second player
    var secondNum = Math.floor(Math.random() * 6);
    var player2 = dice[secondNum];
    
    console.log(player1,  player2);

}
diceGame();