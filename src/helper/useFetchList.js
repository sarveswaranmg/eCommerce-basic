import React, {useState,useEffect} from 'react';
export default function useFetchList(url){
    const [list,setList] = useState([])
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        (async function(){
            setLoader(true)
            let res = await fetch(url);
            let data = await res.json();
            setLoader(false)
            console.log(data);
            setList([...data])
        })()
    },[])
    return [list,loader]
}