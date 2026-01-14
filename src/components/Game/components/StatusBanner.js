import React from "react";

export function StatusBanner({ gameStatus, numberOfGuesses, answer }) {
  if (gameStatus === "lost") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numberOfGuesses} guesses</strong>.
        </p>
      </div>
    );
  }

  return null;
}
