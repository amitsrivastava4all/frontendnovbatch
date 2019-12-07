import React from 'react';
import './Login.css';
export class Login extends React.Component{
    constructor(props){
        super(props);
        this.initErrorState = {usernameError:'',pwdError:''};
        this.defaultErrorValues = {usernameError:'',pwdError:''};
        this.state = {userName:'',pwd:'','errors':this.defaultErrorValues};
    }
    login(){
        let userName = this.refs.username.value;
        let pwd = this.refs.pwd.value;
        console.log('UserName is ',userName);
        console.log('Password ',pwd);
        if(!this.isValidString(userName)){
            console.log('Error Userid .... ');
            this.defaultErrorValues.usernameError='User Name is Empty';
        }
        else{
            this.defaultErrorValues.usernameError='';
        }
        if(!this.isValidString(pwd)){
            this.defaultErrorValues.pwdError='Password Name is Empty';
        }
        else{
            this.defaultErrorValues.pwdError='';
        }
        // if(!this.isValidString(userName) && !this.isValidString(pwd)){
            
        // }
        // else{
        //     this.defaultErrorValues = this.initErrorState;
        // }
        console.log('Errors are ',this.defaultErrorValues);
        this.setState({userName,pwd,'errors':this.defaultErrorValues});
    
    }
    isValidString(str){
       
        if(!str && str.trim().length==0){
            return false;
        }
        return true;
    }
render(){
    return (
        <div>
            <h1>Login Page</h1>
            <input type='text' ref="username" placeholder='Type UserName Here'/>
            <div className='error'>{this.state.errors.usernameError}</div>
            <input type='text' ref="pwd" placeholder='Type Password Here'/>
            <div className='error'>{this.state.errors.pwdError}</div>
            <button onClick={this.login.bind(this)}>Login</button>    
        </div>
    )
}
}