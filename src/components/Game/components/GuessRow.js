import React from "react";

export function GuessRow({ value }) {
  if (!value) {
    return (
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>
    );
  }

  const letters = value.split("");

  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span key={letter + index} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}
