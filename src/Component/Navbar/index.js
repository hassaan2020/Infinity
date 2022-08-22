import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faInfinity} from '@fortawesome/free-solid-svg-icons'
import { Link,NavLink } from 'react-router-dom'
import './styles.css'

const Navbar = () => {
  const [state,setState] = useState("nav");
  const [heightSt,setHeightST] = useState(false);

  // const clickBars = () =>{
  //   const barsIcon = document.querySelector(".bars");
    
  // }

  const scrollEvent = (e) =>{
    if(window.scrollY < 73){
      return setState("nav");
    }
    else if(window.scrollY > 70)
      return setState("navScrolled");
    }

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
  
    return () =>
      window.removeEventListener('scroll', scrollEvent);
  }, []);

  return (
    <div className={state} id="navBar">
      <div className='container'>
      <NavLink to='/' className='span' >
        <span>
          <FontAwesomeIcon className='i' icon={faInfinity}></FontAwesomeIcon>
          Infinity
        </span>
      </NavLink>

        <div className='nLnks' id={heightSt ? "showNav" : "hideNav"}>
          <NavLink to='/About' className='NavLink' onClick={() => setHeightST(!heightSt)} >
            <div className='links '>
                About
            </div>
          </NavLink>

          <NavLink to='/Services' className='NavLink' onClick={() => setHeightST(!heightSt)}>
            <div className='links'>
                Services               
            </div>
          </NavLink>

          <NavLink to='/Courses' className='NavLink' onClick={() => setHeightST(!heightSt)}>
            <div className='links'>
                Courses
            </div>
          </NavLink>
        </div>
        
        <FontAwesomeIcon className='i bars' icon={faBars} onClick={() => setHeightST(!heightSt)}></FontAwesomeIcon>  
      </div>

    </div>
  )
}
export default  Navbar