import React from 'react';
import logo from './logo.svg';
import {Header} from './components/Header';
import {Output} from './components/Output';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>SPA Demo</h1>
       <Header/>
       <Output/>
      </div>
    )
  }
}
export default App;