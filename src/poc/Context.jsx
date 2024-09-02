import React,{createContext,useContext,useState} from "react"
const store = createContext();
console.log(store);


const data = {
    msg:"Hello",
    pageNum: 1,
    dal: 5,
    rice: 10,
    rajma: 25
}
function Context(){
    return(
        <>
        <store.Provider value = {data}>
        <GrandParent></GrandParent>
        </store.Provider>
        
        </>
    )
}

function GrandParent(){
    const [name,setName] = useState("Interviewit")
    return(
        <>
        <h3>GrandParent</h3>
        <div>⬇️</div>
        <Parent1 name={name} setName={setName}></Parent1>
        </>
    )
}


function Parent1({name,setName}){
    return(
        <>
        <h3>Parent</h3>
        <div>⬇️</div>
        <Parent2 name={name} setName={setName}></Parent2>
        </>
    )
}

function Parent2({name,setName}){
    return(
        <>
        <h3>Parent</h3>
        <div>⬇️</div>
        <Child name={name} setName={setName}></Child>
        </>
    )
}

function Child({name,setName}){
    const {msg} = useContext(ContextWraper)
    return(
        <>
        <h3>child</h3>
        <div>⬇️</div>
        <p>{msg}</p>
        <p>{name}</p>
        <button onClick={()=>setName("Scaler")}> Change Name</button>
        </>
    )
}

export default Context