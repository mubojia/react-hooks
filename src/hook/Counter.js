import React, { useContext } from 'react';
import { CountContext } from '../CountContext/CountContext'; 

export default function Counter() {

    const counts = useContext(CountContext);

    return (<div>
        <h2>{counts}</h2>
    </div>)
}
  