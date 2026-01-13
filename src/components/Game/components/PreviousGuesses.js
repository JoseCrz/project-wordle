import React from "react";

export function PreviousGuesses({ guesses = [] }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p key={guess.id} className="guess">
          {guess.value}
        </p>
      ))}
    </div>
  );
}
