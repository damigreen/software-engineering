import * as React from 'react';
import {useCount} from './count-context';

function CountDisplay() {
  const {
    state: {count},
  } = useCount();

  return<div>{`The current count is ${count}`}</div>
}

function Counter() {
  const {dispatch} = useCount();
  return (
    <button onClick={() => dispatch({type: 'increment'})}>
      Increment count
    </button>
  )
}

export { CountDisplay, Counter };
