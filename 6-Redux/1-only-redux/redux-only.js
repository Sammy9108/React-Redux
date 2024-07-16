const redux = require('redux');

const INITIAL_VAL={counter:0}

const reducer=(store=INITIAL_VAL,action)=>{
   let newStore=store;
   if(action.type==="ADD"){
      newStore={counter:store.counter +1}
   }else if(action.type==="MINUS"){
      newStore={counter:store.counter -1}
   }else if(action.type==="ADDITION"){
      newStore={
         counter:store.counter +action.payload.number
      }
   }
   console.log("redicer called",action);
   return newStore;
}
const store=redux.createStore(reducer);

const subscriber=()=>{
   const state=store.getState();
   console.log(state);
}

store.subscribe(subscriber);

store.dispatch({type:"ADD"});
store.dispatch({type:"ADD"});
store.dispatch({type:"ADD"});
store.dispatch({type:"MINUS"});
store.dispatch({type:"ADDITION",payload:{number:7}});