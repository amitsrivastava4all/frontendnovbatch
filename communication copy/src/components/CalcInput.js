import React from 'react';
export const CalcInput = (props)=>{
    return (
        <>
            <input type='text' onChange={props.first}  placeholder='Type First Number'/>
            <p>First Number Value is {props.firstoutput}</p>
            <br/>
            <input type='text' onChange={props.second} placeholder='Type Second Number'/>
            <p>First Number Value is {props.secondoutput}</p>
        </>
    )
}