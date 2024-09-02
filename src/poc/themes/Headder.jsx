import React, { useContext } from 'react'
import { ThemeWrapper } from './Theme'
function Header() {
  return (
    <>
    <div>Header</div>
    <div>⬇️</div>
    <Options></Options>
    <Options></Options>
    <Options></Options>
    </>
  )
}

function Options(){
    const {currTheme}=useContext(ThemeWrapper);
    return <div style={{display:"flex"}} className={currTheme}>
        <p>About</p>
        <p>Contact Us</p>
        <p>Search</p>
    </div>
}

export default Header