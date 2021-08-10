import React, { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  let total = good + neutral + bad;
  let average = 0;
  average = (good - bad) / total
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>Total feedbacks received is {total}</p>
      
      <p>Your average score is {average}</p>
      <p>Positive feedbacks received is {(good / total) * 100} %</p>
      
    </div>
  );
};
export default App;
