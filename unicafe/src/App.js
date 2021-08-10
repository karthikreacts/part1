import React, { useState } from "react";

const Statistics = (props) => {
  if (props.total)
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="Total" value={props.total} />
          <StatisticLine
            text="Average"
            value={(props.good - props.bad) / props.total}
          />
          <StatisticLine
            text="Positive"
            value={(props.good / props.total) * 100}
          />
        </table>
      </div>
    );
  else
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedbacks given</p>
      </div>
    );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  );
};

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

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
