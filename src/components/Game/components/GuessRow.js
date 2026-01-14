import React from "react";
import { checkGuess } from "../../../game-helpers";
import { range } from "../../../utils";

export function GuessRow({ value, answer }) {
  if (!value) {
    return (
      <p className="guess">
        {range(5).map((index) => (
          <span key={index} className="cell"></span>
        ))}
      </p>
    );
  }

  const letters = checkGuess(value, answer);

  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span key={index} className={`cell ${letter.status}`}>
          {letter.value}
        </span>
      ))}
    </p>
  );
}
