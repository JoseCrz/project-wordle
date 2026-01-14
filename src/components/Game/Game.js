import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample, range } from "../../utils";
import { WORDS } from "../../data";

import { GuessInput } from "./components/GuessInput";
import { GuessRow } from "./components/GuessRow";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <main>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
          <GuessRow key={index} value={guesses[index]?.value} />
        ))}
      </div>
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
