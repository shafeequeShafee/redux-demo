
const redux = require('redux')

/// Redux is mainly found of three concepts :-  Store , Action , Reducer- Tie the store and action together
//Store - Holds the stste of your applications
//Action - Describes what happened

// const reducer = (state, action)=>{
//     switch(action.type){
//         case BUY_CAKE : return{
//             numberOfCakes :  state.numberOfCakes -1
//         }
//     }
// }

//CREATING ACTION (type)
const BUY_CAKE ='BUY_CAKE'


// implementing  action creater 
// action creator is a function that returns  an action
// action is object with type property
const Buy_cake =()=>{
    return {
            type:BUY_CAKE,
            info:'first redux action'   
    }
}

/// Reducers
//specify how the app's state changes in response to actions sent to the store.
// Function that accepts state and action as arguements, and returns the next state of the application.


const initialState ={
    numOfCakes :10
}


const reducer =(state=initialState, action)=>{
    switch(action.type){
        case BUY_CAKE : return{
            ...state,  /// kurae property indekil
            numOfCakes:state.numOfCakes -1
        }
        default: return state
    }

}

//// Redux  store 
// which brings action and reducer together
//one store for the entire application

// Responsibilities 
// ###################
// holds application state
//Allow acess to state via getState()
//allows state  to be updated via dispatch(action)
//Registers listeners via subscribe(listener) :- subscribe methode accept function as it parameter
    //which is   executed any time the state in the redux store changes.
    // finally  you can unsubscribe to the store  by calling the function  returned by subscribe methode


const store = createStore()