import React from "react";

import { range } from "../../../utils";

export function GuessRow({ letters }) {
  if (!letters) {
    return (
      <p className="guess">
        {range(5).map((index) => (
          <span key={index} className="cell"></span>
        ))}
      </p>
    );
  }

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
