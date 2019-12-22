import React from 'react';
export const Input=(props)=>{
    return (
        <div>
            <input onChange={(evt)=>props.takeInput(evt,'first')} type='text' placeholder='Type First Number'/>
            <input onChange={(evt)=>props.takeInput(evt,'second')} type='text' placeholder='Type Second Number'/>
        </div>
    )
}