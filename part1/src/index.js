import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const getRandom = (max) => {
  // returns a random int in [0, max)
  return Math.floor(Math.random() * Math.floor(max));
};

const getMaxIdx = (arr) => {
  // returns the index of the maximum value in arr
  let maxIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxIdx]) {
      maxIdx = i;
    }
  }

  return maxIdx;
};

const Button = ({ text, handler }) => {
  return <button onClick={handler}>{text}</button>;
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0));

  let copy = [...votes];

  const topVotes = getMaxIdx(votes);

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button
        text="vote"
        handler={() => {
          copy[selected]++;
          setVotes(copy);
        }}
      />
      <Button
        text="next anecdote"
        handler={() => setSelected(getRandom(props.anecdotes.length))}
      />
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[topVotes]}</p>
      <p>has {votes[topVotes]} votes</p>
    </>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
