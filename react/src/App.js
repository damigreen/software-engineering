import React from 'react';
import './App.css';
import AsyncShoppingCart from './components/AsyncShoppingCart';
import CounterIndex from './components/react-context-kent/counter-index';
import ClassComponent from './components/react-hooks/ClassComponent';

function App() {
  return (
    <div className="App">
      <AsyncShoppingCart />
      <CounterIndex />
      <ClassComponent />
    </div>
  );
}

export default App;

