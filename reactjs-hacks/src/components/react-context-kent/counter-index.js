import * as React from 'react';
import { CountDisplay, Counter } from './count';
import { CountProvider } from './count-context';

function CounterIndex() {
  return (
    <CountProvider>
      <h4>How to Use React Context Effectively - Kent C. Dodds</h4>
      <CountDisplay />
      <Counter />
    </CountProvider>
  )
}

export default CounterIndex;
