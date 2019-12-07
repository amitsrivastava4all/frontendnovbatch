import React from 'react';
export const About = (props)=>{
    console.log('Path Params are ',props);
    return (<div><h1>I am About {props.match.params.name} {props.match.params.job} </h1></div>)
}