import React, { useContext } from 'react'
import { ThemeWrapper } from './Theme'
function Footer() {
  return (
    <>
    <div>Footer</div>
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
        <p>SiteMap</p>
        <p>Hiring</p>
        <p>All right reserved</p>
    </div>
}

export default Footer