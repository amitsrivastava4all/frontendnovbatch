import React from 'react';
export const CalcInput = (props)=>{
    return (
        <>
        <input type='text' onChange={(event)=>{
                console.log('First Event ',event);
                props.takedata(event,'first');
        }}  placeholder='Type First Number'/>
            <p>First Number Value is {props.outputs.first}</p>
            <br/>
            <input type='text' onChange={(event)=>{
                console.log('First Event ',event);
                props.takedata(event,'second');
        }} placeholder='Type Second Number'/>
            <p>Second Number Value is {props.outputs.second}</p>

            {/* <input type='text' onChange={props.first}  placeholder='Type First Number'/>
            <p>First Number Value is {props.firstoutput}</p>
            <br/>
            <input type='text' onChange={props.second} placeholder='Type Second Number'/>
            <p>First Number Value is {props.secondoutput}</p> */}
        </>
    )
}