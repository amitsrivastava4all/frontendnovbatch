import React from 'react';
import {connect} from 'react-redux';
 const Output = (props)=>{
    return (
        <div>
            <h1>Result is {props.output} {props.output2}</h1>
        </div>
    )
}
const mapStateToPropsFn= state=>{
   
    return {
        output : state.add.result,
        output2:state.sub.result1
        
    }


}
var fn = connect(mapStateToPropsFn)
export const WrappedOutput = fn(Output);
