import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import usePersistence from "./usePersistence";

function GuessingGame() {
  const [luckyNum, setLuckyNum] = usePersistence("num", getRndInteger(1, 100));
  const [timesGuessed, setTimesGuessed] = usePersistence("guesses", 0);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Begin Guessing!");

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function generateLuckyNum() {
    let num = getRndInteger(1, 100)
    localStorage.setItem("num", JSON.stringify(num));
    return num;
  }

  function handleSubmit(event) {
    event.preventDefault();

    let parsedNum = parseInt(guess);

    setTimesGuessed(timesGuessed + 1);

    localStorage.setItem("guesses", JSON.stringify(timesGuessed));

    if (parsedNum === luckyNum) {
      alert(
        `Congratulations, you guessed my number! I was thinking of ${luckyNum}, and it took you ${timesGuessed} to get it!`
      );
    } else if (guess > luckyNum) {
      setMessage("You guessed too high! But how much higher, I won't say :)");
    } else {
      setMessage(
        "That guess was too low. Aim higher, and you just might get it."
      );
    }
  }

  function handleChange(event) {
    if (!isNaN(event.target.value)) {
      setGuess(event.target.value);
    } else {
      alert("Input must be a number, silly.");
    }
  }

  function handleReset() {
    localStorage.removeItem("num");
    localStorage.removeItem("guesses");

    setLuckyNum(generateLuckyNum());
    setTimesGuessed(0);
    setMessage("Everything has been reset. Begin Guessing!");
    setGuess("");
  }

  return (
    <Stack>
      <div>
        <h1>
          I am thinking of a number
          <br />
          Between 1 and 100
        </h1>
        <h4>Can you guess what it is?</h4>
        <hr />
      </div>

      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <label className="mx-auto">
            You have made <b>{timesGuessed}</b> guesses.
          </label>
          <input
            className="mx-auto"
            type="text"
            name="guess"
            value={guess}
            onChange={handleChange}
            required
          />
          <label className="mx-auto">{message}</label>
          <hr />
          <button type="submit">Guess</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </Stack>
      </form>
    </Stack>
  );
}

export default GuessingGame;
