import React, { useState } from "react";
let vote = new Array(7).fill(0);
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  let random = Math.floor(Math.random() * 7);

  const handleVote = () => {
    const copy = [...vote];
    copy[selected] += 1;
    vote = [...copy];
    console.log(vote);
  };

  return (
    <div>
      {anecdotes[selected]}
      <p>has {vote[selected]} votes</p>
      <br />
      <button onClick={handleVote}>Vote</button>
      <button onClick={() => setSelected(random)}>Select anecdote</button>

      {/* {console.log(anecdotes[selected])}
      {console.log(selected)} */}
    </div>
  );
};

export default App;
