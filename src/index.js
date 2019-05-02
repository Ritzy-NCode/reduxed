// // import {combineReducers,x,createStore} from 'redux';
// // import logger from 'redux-logger';
// // import {composeWithDevTools} from 'redux-devtools-extension';
 


// // var myLogger = (store) => (next) =>(action) =>{
// //     console.log("Action Fired",action);
// //     next(action);
// // }

// // const reducer=(state=0,action) =>{
// //     console.log("The TYpe is :"+action.type);
// //     if(action.type==='INC'){
// //         state+=action.payload;
// //     }
// //     if(action.type==='MULT'){
// //         state=state*action.payload;
// //     }

// //     if(action.type==='MIN'){
// //         state-=action.payload;
// //     }
// //     return state;
// // }

// // const userReducer =(state={},action) =>{
// //     switch(action.type){
// //         case 'CHANGE_NAME':
// //             return state={...state,name:action.payload};
// //         case 'CHANGE_AGE':
// //             return state={...state,age:action.payload};
// //     }
// //     return state;
// // }
// // const tweetReducer =(state={},action) =>{
// //     state={...state, tweet:'I am the tweet'};
// //     return state;
// // }
// // const reducers =combineReducers({
// //     red:reducer,
// //     user:userReducer,
// //     tweet:tweetReducer  
// // })

// // const middleware=applyMiddleware(myLogger,logger)
// // const store=createStore(reducers,composeWithDevTools(middleware));// window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__()});

// // store.subscribe(()=>{
// //     console.log("The store has changed its state::"+JSON.stringify(store.getState()));
// // })

// // store.dispatch({type:"INC",payload:3});
// // store.dispatch({type:"MULT",payload:2});
// // store.dispatch({type:"MIN",payload:1});

// // store.dispatch({type:"CHANGE_NAME",payload:'Ritzy'});
// // store.dispatch({type:"CHANGE_AGE",payload:29});
// // store.dispatch({type:"CHANGE_NAME",payload:'Ritu M'});

// import {applyMiddleware,createStore} from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import axios from 'axios';
// import {composeWithDevTools} from 'redux-devtools-extension';

// const initialState={
//     fetching:false, 
//     fetched:false,
//     user:[],
//     error:null
// }

// const reducer = (state=initialState, action) =>{
//     switch(action.type){
//         case "FETCH_USERS_START":{
//             return {
//                 ...state,
//                 fetching:true
//             }
//         }
//         case "FETCH_USERS_ERROR":{
//             return {
//                 ...state,
//                 fetching:false,
//                 error:action.payload
//             }
//         }
//         case "RECEIVE_USERS":{
//             return{
//                 ...state,
//                 fetching:false,
//                 fetched:true,
//                 users:action.payload
//             }
//         }
//         default:{
//             return {...state};
//         }

//     }
//     return state;
// }

// const middleware=applyMiddleware(thunk,logger);

// const store=createStore(reducer,composeWithDevTools(middleware));const middleware=applyMiddleware(thunk,logger);

// const store=createStore(reducer,composeWithDevTools(middleware))

// store.subscribe(()=>{
//         console.log("The store has changed its state::"+JSON.stringify(store.getState()));
//     });

// store.dispatch(
//     dispatch =>{
//         dispatch({type:"FETCH_USERS_START"});
    
//     axios.get("http://dummy.restapiexample.com/api/v1/employees")//
//     .then(response =>{
//         dispatch({type:"RECEIVE_USERS",payload:response.data})
//     })
//     .catch(error =>{
//         dispatch({type:"FETCH_USERS_ERROR",payload:error})
//     })
// });

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import allPhasesReducers from './reducers';
import logger from 'redux-logger';
import './index.css';

import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware,createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
const middleware=applyMiddleware(logger);
const store=createStore(allPhasesReducers,composeWithDevTools(middleware));
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
     document.getElementById('root')
     
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



