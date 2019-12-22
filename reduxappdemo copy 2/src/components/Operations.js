import React from 'react';
export const Operations = (props)=>{
    return (
        <div>
            <button onClick={(evt)=>props.operation(evt,'+')}>+</button>
            <button onClick={(evt)=>props.operation(evt,'-')}>-</button>
        </div>
    )
}