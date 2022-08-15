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
    if(window.scrollY < 300){
      return setState("nav");
    }
    else if(window.scrollY > 200)
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
        <span>
          <FontAwesomeIcon className='i' icon={faInfinity}></FontAwesomeIcon>
          Infinity
        </span>

        <div className='nLnks' id={heightSt ? "showNav" : "hideNav"}>
          <NavLink to='/' className='NavLink'>
            <div className='links'>
                About
            </div>
          </NavLink>

          <NavLink to='/' className='NavLink'>
            <div className='links'>
                Services               
            </div>
          </NavLink>

          <NavLink to='/' className='NavLink'>
            <div className='links'>
                Courses
            </div>
          </NavLink>
          <NavLink to='/' className='NavLink'>
            <div className='links'>
                Contact Us
            </div>
          </NavLink>
        </div>
        
        <FontAwesomeIcon className='i bars' icon={faBars} onClick={() => setHeightST(!heightSt)}></FontAwesomeIcon>  
      </div>

    </div>
  )
}
export default  Navbar