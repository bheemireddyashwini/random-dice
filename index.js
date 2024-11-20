document.getElementById("rollButton").addEventListener("click", function () {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
    const randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
  
    const randomImageSource1 = "images/dice" + randomNumber1 + ".png";
    const randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  
    document.querySelector(".img1").setAttribute("src", randomImageSource1);
    document.querySelector(".img2").setAttribute("src", randomImageSource2);
  
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
      document.querySelector("h1").innerHTML = "Draw!";
    }
  });
  