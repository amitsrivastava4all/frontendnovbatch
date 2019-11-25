import React from 'react';
export const CalcOperations = (props)=>{
    return (
        <>
            <button onClick={()=>{
                console.log("Arrow Call");
                props.operation('+');
            }}>+</button>
            <button onClick={()=>{
               props.operation('-');
            }}>-</button>
        </>
    )
}