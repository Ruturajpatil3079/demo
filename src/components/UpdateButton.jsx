import React from 'react';
import CommonContext from './CommonContext';

function UpdateButton() {
    return (
        <div>
            <CommonContext.Consumer>
                {
                    (value)=>(
                        <button onClick={()=>value.updateColor()}>Update Color</button>
                    )
                }
            </CommonContext.Consumer>

        </div>
    );
}

export default UpdateButton;