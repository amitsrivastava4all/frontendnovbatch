import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Input} from './components/Input';
import {WrappedOutput} from './components/Output';
import {Operations} from './components/Operations';
import {store} from './models/store';
import {calcActionCreator} from './actions/calcactioncreator';
export class App extends React.Component{
constructor(props){
  super(props);
  this.obj = {};
  this.state = {};
}
takeInput(event, key){
 this.obj[key] = event.target.value;
  console.log('Take Input With Values ',this.obj);
}
operation(evt, opr){
  console.log('Operation is ',opr);
  const action = calcActionCreator(this.obj.first, this.obj.second, opr);
  store.dispatch(action);

}
render(){
  return (
    <div>
      <h1>React Redux Demo</h1>
      <Input takeInput={this.takeInput.bind(this)}/>
      <Operations operation={this.operation.bind(this)}/>
      <WrappedOutput/>
    </div>
  );

}
}