import React from 'react';
import t,{Header, x} from '../components/Header';
import {Skills} from '../components/Skills';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export const Resume= (props)=>{
    return (<div className='container'>
    <h2>{props.name} Resume</h2>
        <Header/> 
        <p className='alert-success'>Dynamic Output is {t()}</p>
        <p>Result {x()}</p>
        <Skills/>
    </div>);
}

