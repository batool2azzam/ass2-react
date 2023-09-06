import { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handlePlusClick() {
    // Solution: We should use the setPlayer function to update the score.
    setPlayer((prevState) => ({
      ...prevState,
      score: prevState.score + 1,
    }));
  }

  function handleFirstNameChange(e) {
    // Solution: We use spread syntax to retain the existing state and only update the firstName.
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    // Solution: Similar to handleFirstNameChange, we include the score field to prevent its removal.
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}