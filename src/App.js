import React from "react";
import { Stack } from "react-bootstrap";
import GuessingGame from "./GuessingGame";

function App() {
  return (
    <GuessingGame />
    // <Stack gap={3}>
    //   <h1 className="title">
    //     I am thinking of a number
    //     <br />
    //     Between 1 and 100
    //   </h1>
    //   <h4>Can you guess what it is?</h4>
    //   <hr />
    //   <form>
    //     <label for="guess">
    //       You have made 0 guesses.
    //     </label>
    //     <br />
    //     <input type="text" name="guess" />
    //     <br />
    //     <input type="submit" value="Guess!" />
    //     <br />
    //     <label>Message</label>
    //     <br />
    //     <button>Reset</button>
    //   </form>
    // </Stack>
  );
}

export default App;