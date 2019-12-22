
import {createStore, combineReducers} from 'redux';
import {Calc} from '../reducers/calc';
import {Sub} from '../reducers/sub';
 
export const store = createStore(combineReducers({add:Calc, sub:Sub}));
//export const store = createStore(Calc);
store.subscribe(()=>{
console.log('Store Subscribe Call ',store.getState());
});
//const store = createStore(combineReducers(Calc, Calc2));

