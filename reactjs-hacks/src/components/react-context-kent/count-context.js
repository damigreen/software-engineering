import * as React from 'react';

// Set intitial value for context
// React.createContext({count: 0})
const CountContext = React.createContext();

function countReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return { count: state.count + 1 };
    }
    case 'decrement': {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CountProvider({ children }) {
  const [state, dispatch] = React.useReducer(countReducer, {count: 0})
  // Note: you might need to memoize this value

  const value = { state, dispatch };
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

function useCount() {
  const context = React.useContext(CountContext);
  console.log(context);
  if (context === undefined) {
    throw new Error('useCount must be within a CountProvider')
  }
  return context;
}

export {CountProvider, useCount};