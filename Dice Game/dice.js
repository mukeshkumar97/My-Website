document.querySelector(".btn").addEventListener("click", handleClick);

function handleClick() {
  var number1 = Math.floor(Math.random() * 6) + 1;
  var diceImage1 = "dice" + number1 + ".png";
  var randomDiceImage1 = "images/" + diceImage1;
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomDiceImage1);

  //image2

  var number2 = Math.floor(Math.random() * 6) + 1;
  var diceImage2 = "dice" + number2 + ".png";
  var randomDiceImage2 = "images/" + diceImage2;

  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomDiceImage2);

  if (number1 > number2) {
    document.querySelector("h1").innerHTML = "🏁Player 1 Wins!";
  } else if (number2 > number1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🏁";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
