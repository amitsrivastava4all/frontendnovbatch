import React,{Component} from 'react';
import {CalcInput} from '../components/CalcInput';
import {CalcOperations} from '../components/CalcOperations';
import {CalcOutput} from '../components/CalcOutput';
export class Calc extends Component{
    constructor(props){
        super(props);
        this.first = 0;
        this.second = 0;
        this.state ={firstNumber:this.first, secondNumber: this.second};
    }
    takeFirstInput(event){
        console.log('I am in First Input ',event.target.value);
        this.first = parseInt(event.target.value);
       this.setState({...this.state,firstNumber:this.first});
        // this.setState({firstNumber:this.first,secondNumber:this.second });
    }
    takeSecondInput(event){
        console.log('I am in Second Input ',event.target.value);
        this.second = parseInt(event.target.value);
        this.setState({...this.state, secondNumber: this.second});
    }
    render(){
        return (<>
            <CalcInput second={this.takeSecondInput.bind(this)} first={this.takeFirstInput.bind(this)} firstoutput={this.state.firstNumber} secondoutput={this.state.secondNumber} />
            <br/>
            <CalcOperations/>
            <br/>
            <CalcOutput/>
        </>
        );
    }
}