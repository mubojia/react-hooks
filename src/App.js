import React from 'react';
import ReducerDemo from './hook/useReducer/ReducerDemo';
import Example from './Example/Example';
import CountContexts from './CountContext/CountContext';

function App() {
  return (
    <div>
      <CountContexts />
      <hr />
      <ReducerDemo />
      <hr />
      <Example />
    </div>
  );
}

export default App;
