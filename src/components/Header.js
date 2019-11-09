import React,{Component} from 'react';
import './Header.css';
export const Header= ()=>{
    let z = 1000;
    //return React.createElement('div', React.createElement('div'));
   return (<div>
        <h1 className='red'> This is Header {z}</h1>
    </div>);
}

export const x = ()=>1000;

const t= ()=>2000;
export default t;