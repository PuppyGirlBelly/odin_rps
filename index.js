function computerPlay() {
    const play = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * play.length); 
    return play[random];
}
