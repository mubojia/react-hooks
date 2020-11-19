import React, { useState, createContext } from 'react';
import Counter from '../hook/Counter';

export const CountContext = createContext();

export default function CountContexts() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
            <button onClick={() => {setCount(count + 1)}}>click</button>
        </div>
    )
}