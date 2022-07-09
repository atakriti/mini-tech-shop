import React,{useState} from 'react'
import "./Header.scss"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import {BsFillSunFill,BsSun} from "react-icons/bs"

let style1 = {
    display: "none"
}
let darking = {
    backgroundColor: "black",
    color:"white"
}



function Header() {
    let [isClicked, setIsClicked] = useState(false)
    let [isDark, setIsDark] = useState(false)
   
  


  return (
      <header>
          <div className='headerContainer'  style={isDark? darking: null}>
              <button onClick={()=>setIsClicked(!isClicked)}>menu {isClicked? <AiOutlineArrowDown/> : <AiOutlineArrowUp/> }</button>
              <button onClick={() => setIsDark(!isDark)}>Theme{ isDark? <BsFillSunFill/> : <BsSun/>}</button>
              <div className='menu' style={isClicked? null : style1 }>
                  <ul>
                      <li>menu1</li>
                      <li>menu2</li>
                      <li>menu3</li>
              </ul>
              </div>
          </div>
    </header>
  )
}

export default Header

// className={isClicked? "menu" : "none"}