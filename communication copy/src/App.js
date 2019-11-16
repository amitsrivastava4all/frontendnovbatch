import React,{Component} from 'react';
import {Calc} from './containers/Calc';
export class App extends Component{

constructor(props){
  super(props);
  this.state = {};
}
render(){
  return (
    <div>
      <Calc/>
    </div>
  );
}
}
