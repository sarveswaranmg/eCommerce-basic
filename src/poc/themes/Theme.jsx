import React, { createContext } from "react";
import { useState } from "react";
import Header from "./Headder";
import Footer from "./Footer";
import Article from "./Article"
import "./theme.css"
export const ThemeWrapper = createContext()

function Theme(){
    const [currTheme,setCurrTheme] = useState("light")
    const handleTheme=()=>{
        const newTheme = currTheme=="light"?"dark":"light";
        setCurrTheme(newTheme)
    }
    return(
        <>
        <ThemeWrapper.Provider value={{currTheme,handleTheme}}>
            <button onClick={handleTheme}>Toggle</button>
            <Header></Header>
            <Article></Article>
            <Footer></Footer>
        </ThemeWrapper.Provider>
        </>
    )
}

export default Theme