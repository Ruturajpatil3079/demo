import React, { useContext } from 'react';
import CommonContext from './CommonContext';

function ChildTwo() {
    let context = useContext(CommonContext);
    return (
        <div>
            <h1 style={{color:context.color}}>This is Second Child</h1>
        </div>
    );
}

export default ChildTwo;