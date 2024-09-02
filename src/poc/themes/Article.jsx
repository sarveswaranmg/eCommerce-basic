import React, { useContext } from 'react'
import { ThemeWrapper } from './Theme'
function Article() {
    const {currTheme}=useContext(ThemeWrapper);
    console.log(currTheme);
    return (<div style={{ border: "1px solid ", padding: "1rem", margin: "1rem" }}>
        <div >Article</div>
        <div>⬇</div>
        <p className={currTheme}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, id.</p>
    </div>)
}

export default Article