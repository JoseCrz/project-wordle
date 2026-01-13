import React from "react";

export function GuessInput() {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(inputValue);
        setInputValue("");
      }}
    >
      <label for="guess-input">Enter guess:</label>
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
