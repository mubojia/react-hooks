import React, { useReducer } from 'react';
import Reducer from '../../reducer';

export default function ReducerDemo() {
    const [count, dispatch] = useReducer(Reducer.reducerDemo, 0);
    return (
        <div>
            <h2>现在的分数是{count}</h2>
            <button onClick={() => dispatch('add')}>Increment</button>
            <button onClick={() => dispatch('sub')}>Decrement</button>
        </div>
    );
}