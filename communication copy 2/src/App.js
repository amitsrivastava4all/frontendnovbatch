import React,{Component} from 'react';
import {Calc} from './containers/Calc';
import {Sc} from './containers/Sc';
export class App extends Component{

constructor(props){
  super(props);
  this.hideVal = true;
  //let t = 0;
  this.state = {hide:this.hideVal,data:[]};
}
componentWillMount(){
  this.doAjax();
}
doAjax(){
  const url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
  let promise = fetch(url);
  promise.then(response=>{
    response.json().then(mydata=>{
      console.log(":::::: Data is ",mydata);
      this.setState({...this.state,data:mydata['mobiles']})
    }).catch(err=>{
      console.log("Invalid JSON ",err);
    })
  }).catch(err=>{
    console.log("Invalid URL ",err);
  })
}
showHide(){
  this.hideVal = !this.hideVal;
  this.setState({hide:this.hideVal});
}
render(){
  let jsx = this.state.hide?<Calc/>:<><Calc/><Sc/></>;
  console.log('Data is ',this.state.data, ' typeof ',typeof this.state.data)
  let jsx2 = this.state.data.length>0?this.state.data.map(element=><><p key={element.id}>{element.name} {element.price} </p><img src={element.url}/></>):<p>No Data</p>;
  
  return (
    <div>
     Data is {jsx2}
       <button onClick={this.showHide.bind(this)}>Show/Hide</button>
    <br/>
    {jsx}
    </div>
    // <div>
    //  
    //   <Calc/>
    //   <Sc/>
    // </div>
  );
}
}
