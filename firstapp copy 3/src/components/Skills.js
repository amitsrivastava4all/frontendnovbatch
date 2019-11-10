import React from 'react';
import './Skills.css';
import './Header.css';
export const Skills =()=>{
    let skillCount = 1;
    return (<div>
        <h2 className = 'green'>Skills Component</h2>
        <h3 className='red'>Red Class of Header</h3>
        <button onClick={()=>{
            
            skillCount++;
            console.log('Skill Count is ',skillCount);
        }}>Add Skills</button>
        <p>Total Skills are {skillCount}</p>
    </div>)
}