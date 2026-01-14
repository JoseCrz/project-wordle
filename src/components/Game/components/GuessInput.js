import React from "react";

export function GuessInput({ onSubmitGuess }) {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        if (inputValue.length < 5) {
          return window.alert("Word must have 5 letters");
        }

        onSubmitGuess(inputValue);
        setInputValue("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={inputValue}
        minLength={5}
        maxLength={5}
        onChange={(event) => {
          const { value } = event.target;

          setInputValue(value.toUpperCase());
        }}
      />
    </form>
  );
}
