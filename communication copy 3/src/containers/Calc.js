import React,{Component} from 'react';
import {CalcInput} from '../components/CalcInput';
import {CalcOperations} from '../components/CalcOperations';
import {CalcOutput} from '../components/CalcOutput';
export class Calc extends Component{
    constructor(props){
        super(props);
        this.first = 0;
        this.second = 0;
        this.inputValues = {first:0, second:0};
        this.state ={firstNumber:this.first, secondNumber: this.second, result:0};
    }
    takeData(event, key){
        this.inputValues[key] = event.target.value;
        this.setState({...this.state,firstNumber:this.inputValues.first,secondNumber:this.inputValues.second});
    }
    // takeFirstInput(event){
    //     console.log('I am in First Input ',event.target.value);
    //     this.first = parseInt(event.target.value);
    //    this.setState({...this.state,firstNumber:this.first});
    //     // this.setState({firstNumber:this.first,secondNumber:this.second });
    // }
    operation(operator){
        let output = eval(this.inputValues.first+operator+this.inputValues.second);
        this.setState({...this.state,result:output});
    }
    // takeSecondInput(event){
    //     console.log('I am in Second Input ',event.target.value);
    //     this.second = parseInt(event.target.value);
    //     this.setState({...this.state, secondNumber: this.second});
    // }
    render(){
        return (<>
            {
                <CalcInput takedata = {this.takeData.bind(this)} outputs = {this.inputValues}/>
                /* <CalcInput second={this.takeSecondInput.bind(this)} first={this.takeFirstInput.bind(this)} firstoutput={this.state.firstNumber} secondoutput={this.state.secondNumber} /> */}
            <br/>
            <CalcOperations operation = {this.operation.bind(this)}/>
            <br/>
            <CalcOutput output = {this.state.result}/>
        </>
        );
    }
}