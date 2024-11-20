// Wait for the DOM to load before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Selecting the roll button
  const rollButton = document.getElementById("rollButton");

  // Adding a click event listener to the button
  rollButton.addEventListener("click", () => {
    // Generating random numbers for both dice (1-6)
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Updating the dice images based on the random numbers
    const diceImage1 = `images/dice${randomNumber1}.png`; // Path to dice1 image
    const diceImage2 = `images/dice${randomNumber2}.png`; // Path to dice2 image

    document.querySelector(".img1").setAttribute("src", diceImage1);
    document.querySelector(".img2").setAttribute("src", diceImage2);

    // Updating the heading to display the winner
    const heading = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) {
      heading.textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      heading.textContent = "Player 2 Wins! 🚩";
    } else {
      heading.textContent = "It's a Draw!";
    }
  });
});
