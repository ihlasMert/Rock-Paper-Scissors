const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error");
  }
};

const getComputerChoice = () => {
  const ranNum = Math.floor(Math.random() * 3);
  console.log(ranNum);
  switch (ranNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry, computer won!";
    } else {
      return "Congratulaiton you won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "Sorry, computer won!";
    } else {
      return "Congratulaiton you won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "Sorry Computer won!";
    } else {
      return "Congratulaiton you won!";
    }
  }
  if (userChoice === "bomb") {
    return "Congratulations, you won!";
  }
};
const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
