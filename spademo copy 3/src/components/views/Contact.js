import React from 'react';
export const Contact = (props)=>{
    console.log(' PROPS CONTACT ',props);
    const query = new URLSearchParams(props.location.search);
    let params = '';
    for(let i of query.entries()){
        console.log(i[1]);
        params+= i[1] +" ";
        }
    return (<div><h1>I am Contact {params} </h1></div>)
}