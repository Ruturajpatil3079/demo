import React from 'react';
import CommonContext from './CommonContext';

function Main() {
    return (
        <div>
            <CommonContext.Consumer>
                {
                    (value)=>(
                        <h1 style={{backgroundColor:value.color}}>This is Main Page</h1>
                    )
                }
            </CommonContext.Consumer>
        </div>
    );
}

export default Main;