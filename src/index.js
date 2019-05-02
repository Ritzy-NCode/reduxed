// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import {createStore} from 'redux';
const reducer=(state,action) =>{
    console.log("The TYpe is :"+action.type);
    if(action.type==='INC'){
        state+=action.payload;
    }
    if(action.type==='MULT'){
        state=state*action.payload;
    }

    if(action.type==='MIN'){
        state-=action.payload;
    }
    return state;
}
const store=createStore(reducer,1, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>{
    console.log("The store has changed its state::"+store.getState());
})

store.dispatch({type:"INC",payload:3});
store.dispatch({type:"MULT",payload:2});
store.dispatch({type:"MIN",payload:1});
