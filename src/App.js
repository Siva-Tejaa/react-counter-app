import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <center>
      <h1>
        <u>Counter Application</u>
      </h1>
      <br />
      <h2>Count is {count}</h2>
      <br />

      <div className="btns">
        <button
          className="form-control btn btn-outline-primary"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <br />
        <button
          className="form-control btn btn-outline-primary"
          onClick={() =>
            count >= 10 ? alert('Reached the Limit') : setCount(count + 1)
          }
        >
          Increment +
        </button>
        <br />
        <button
          className="form-control btn btn-outline-primary"
          onClick={() =>
            count <= -10 ? alert('Reached the Limit') : setCount(count - 1)
          }
        >
          Decrement -
        </button>
      </div>
    </center>
  );
}
