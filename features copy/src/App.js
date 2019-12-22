import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {useState, useRef} from 'react';

 const App = (props)=>{
 
  const [name,setName] =useState('Amit');
  const [lastName,setLastName] =useState('Srivastava');
  const [val,setVal]=useState('');
  const inputRef = useRef(null);
  const takeInput=(event)=>{
    setName (event.target.value);
  }
  const takeLastInput=(event)=>{
    setLastName (event.target.value);
  }
  const clickIt = ()=>{
    console.log('ClickIt called ',inputRef);
    setVal(inputRef.current.value);
  }
  useEffect(()=>{
    console.log("Behave Like ComponentDidUpdate()");
  })
  useEffect(()=>{
    console.log("Behave Like componentDidMount()");
  },[])
  useEffect(()=>{
    console.log("Behave only for name");
  },[name])
  return (
    <div>
      <h1>Modern React App</h1>
      <input type='text' onChange={takeInput}  placeholder='Type Name Here' />
      <p> Name is {name}</p>
      <input type='text' onChange={takeLastInput}  placeholder='Type Name Here' />
      <p> LastName is {lastName}</p>
      <input type='text' ref={inputRef} placeholder='Use Ref demo'/>
      <button onClick={clickIt}>Get Ref Value</button>
      <p>Ref is {val}</p>
    </div>
  )
}
export default App;