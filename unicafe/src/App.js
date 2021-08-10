import React, { useState } from "react";

const Statistics = ({ good, neutral, bad, total }) => {
  if (total)
    return (
      <div>
        <h2>Statistics</h2>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>

        <p>Total feedbacks received is {(total = good + neutral + bad)}</p>

        <p>Your average score is {(good - bad) / total}</p>
        <p>Positive feedbacks received is {(good / total) * 100} %</p>
      </div>
    );
  else return <p>Enter feedback about us</p>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={good + bad + neutral}
      />
    </div>
  );
};
export default App;
