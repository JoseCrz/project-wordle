import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample, range } from "../../utils";
import { WORDS } from "../../data";

import { GuessInput } from "./components/GuessInput";
import { GuessRow } from "./components/GuessRow";
import { StatusBanner } from "./components/StatusBanner";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing");

  const numOfGuesses = guesses.length;
  console.log("🚀 ~ Game ~ numOfGuesses:", numOfGuesses);
  return (
    <main>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
          <GuessRow key={index} letters={guesses[index]?.letters} />
        ))}
      </div>
      <GuessInput
        disabled={gameStatus !== "playing"}
        onSubmitGuess={(value) => {
          const letters = checkGuess(value, answer);

          const newGuess = {
            id: crypto.randomUUID(),
            letters,
          };

          const newGuesses = [...guesses, newGuess];

          setGuesses(newGuesses);

          if (value === answer) {
            setGameStatus("won");
            return;
          }

          if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
            setGameStatus("lost");
            return;
          }
        }}
      />
      <StatusBanner
        gameStatus={gameStatus}
        numberOfGuesses={numOfGuesses}
        answer={answer}
      />
    </main>
  );
}

export default Game;
