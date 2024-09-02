import React, { useReducer } from "react";
const counterReducer=(state,action)=>{
    switch(action){
        case "INCREMENT":
            return state+1
        case "DECREMENT":
            return state-1
        case "INCREMENTBY5":
            return state+5
        case "DECREMENTBY5":
            return state-5
    }
}
//initial Value of your state
const initialState=0
function UserReducer(){
    // counterReducer is used to store all the handler functions
    const [cState,dispatch] = useReducer(counterReducer, initialState);
    return(
        <>
        <p>{cState}</p>
        {/* dispatching action */}
        <button onClick={(()=>{dispatch("INCREMENT")})}> + </button>
        <button onClick={(()=>{dispatch("DECREMENT")})}> - </button>
        <button onClick={(()=>{dispatch("INCREMENTBY5")})}> +++++ </button>
        <button onClick={(()=>{dispatch("DECREMENTBY5")})}> ----- </button>
        </>

    )
}

export default UserReducer