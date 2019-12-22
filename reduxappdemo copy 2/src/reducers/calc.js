import {initStore} from '../models/globalstate';
export const Calc = (currentState=initStore, action)=>{
    console.log('Reducer Call ', currentState, " ",action);
    if(action.type=='+'){
        let sum = parseInt(action.payLoad.first) + parseInt(action.payLoad.second); 
        return {firstNo:action.payLoad.first, secondNo:action.payLoad.second,result:sum};
    }
    return currentState;
}