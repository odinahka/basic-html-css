const player1 = Math.floor((Math.random() * 6) + 1);
const player2 = Math.floor((Math.random() * 6) + 1);
console.log(`images/dice${player1}`)
document.querySelector("img.img1").setAttribute("src", `/images/dice${player1}.png`);
document.querySelector("img.img2").setAttribute("src", `/images/dice${player2}.png`);
if(player1 === player2){
    document.querySelector("h1").textContent = "Draw😞";
}
else if(player1 > player2){
    document.querySelector("h1").textContent = "🚩 Player1 Wins!"
}
else{
    document.querySelector("h1").textContent = "Player2 Wins! 🚩" 
}