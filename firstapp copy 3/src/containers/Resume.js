import React,{Component} from 'react';
 import t,{Header, x} from '../components/Header';
 import {Skills} from '../components/Skills';
 import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export class Resume extends Component{
    constructor(props){
        super(props);
        this.state = {like:0};
    }
    likeIt(){
            console.log('Like It Called....');
            let likeCount = this.state.like;
            likeCount++;
            this.state.like = likeCount;
            this.setState({like:likeCount});
    }
render(){
    console.log('Render Called');
        return (<div className='container'>
        <p>LIke Count is {this.state.like}</p>
        <button onClick={this.likeIt.bind(this)}>Like</button>
    <h2>{this.props.name} Resume</h2>
        <Header/> 
        <p className='alert-success'>Dynamic Output is {t()}</p>
        <p>Result {x()}</p>
        <Skills/>
    </div>);
}
}

// import React from 'react';
// import t,{Header, x} from '../components/Header';
// import {Skills} from '../components/Skills';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// export const Resume= (props)=>{
//     return (<div className='container'>
//     <h2>{props.name} Resume</h2>
//         <Header/> 
//         <p className='alert-success'>Dynamic Output is {t()}</p>
//         <p>Result {x()}</p>
//         <Skills/>
//     </div>);
// }

