import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import { GuessInput } from "./components/GuessInput";
import { PreviousGuesses } from "./components/PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <main>
      <PreviousGuesses guesses={guesses} />
      <GuessInput
        onSubmitGuess={(value) => {
          const newGuess = {
            id: crypto.randomUUID(),
            value,
          };

          setGuesses((prevGuesses) => {
            return [...prevGuesses, newGuess];
          });
        }}
      />
    </main>
  );
}

export default Game;
