
let weapons = ['rock', 'paper', 'scissors'];
let player1 = "swapna";
let player2 = "Jha";
let player1Wins = 0;
let player2Wins = 0;
let player1Hand, player2Hand;

while (player1Wins < 3 && player2Wins < 3) {

    //Generate and display players hands
    player1Hand = weapons[parseInt(Math.random() * weapons.length) % 3];
    player2Hand = weapons[parseInt(Math.random() * weapons.length) % 3];
    console.log(player1 + " hand: " + player1Hand);
    console.log(player2 + " hand: " + player2Hand);

    // Compare players hand and determine winner    
    if (player1Hand == "rock" && player2Hand == "scissors") {
        console.log(player1 + " wins this round");
        player1Wins = player1Wins + 1;
        console.log("Number of rounds won: " + player1Wins + "\n")

    } else if (player2Hand == "rock" && player1Hand == "scissors") {
        console.log(player2 + " wins this round");
        player2Wins = player2Wins + 1;
        console.log("Number of rounds won: " + player2Wins + "\n")

    } else if (player2Hand == "rock" && player1Hand == "rock") {
        console.log("tied new hands \n");

    } else if (player2Hand == "scissors" && player1Hand == "scissors") {
        console.log("tied new hands \n");

    } else if (player2Hand == "paper" && player1Hand == "paper") {
        console.log("tied new hands \n");

    } else if (player1Hand == "paper" && player2Hand == 'rock') {
        console.log(player1 + ' wins this round');
        player1Wins = player1Wins + 1;
        console.log("Number of rounds won: " + player1Wins + "\n")

    } else if (player2Hand == "paper" && player1Hand == "rock") {
        console.log(player2 + ' wins this round');
        player2Wins = player2Wins + 1;
        console.log("Number of rounds won: " + player2Wins + "\n")

    } else if (player1Hand == "scissors" && player2Hand == "paper") {
        console.log(player1 + ' wins this round');
        player1Wins = player1Wins + 1;
        console.log("Number of rounds won: " + player1Wins + "\n")

    } else if (player2Hand == "scissors" && player1Hand == "paper") {
        console.log(player2 + ' wins this round');
        player2Wins = player2Wins + 1;
        console.log("Number of rounds won: " + player2Wins + "\n")
    }
}

if (player1Wins == 3) {
    console.log(player1 + ' you are the Winner!!!')
} else {
    console.log(player2 + ' you are the Winner!!!')
}
