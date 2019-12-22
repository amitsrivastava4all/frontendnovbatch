import {initStore} from '../models/globalstate';
export const Sub = (currentState=initStore, action)=>{
    console.log('Reducer Call ', currentState, " ",action);
    if(action.type=='-'){
        let sum = parseInt(action.payLoad.first) - parseInt(action.payLoad.second); 
        console.log('Sub is ',sum);
        return {firstNo:action.payLoad.first, secondNo:action.payLoad.second,result1:sum};
        
    }
    return currentState;
}