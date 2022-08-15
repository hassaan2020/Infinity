import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInfinity} from '@fortawesome/free-solid-svg-icons'
import { Link,NavLink } from 'react-router-dom'


function footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='featFooter'>
                <FontAwesomeIcon className='i' icon={faInfinity}></FontAwesomeIcon>
                <h1>Infinity</h1>
            </div>
            <div className='featFooter'>
                <h3>Our website</h3>
                <div className='nLnks'>
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
            </div>
            <div className='featFooter'>
                <h3>Social </h3>
                <div className='nLnks'>
                    <NavLink to='/' className='NavLink'>
                        <div className='links'>
                            Facebook
                        </div>
                    </NavLink>

                    <NavLink to='/' className='NavLink'>
                        <div className='links'>
                            LinkedIn               
                        </div>
                    </NavLink>

                    <NavLink to='/' className='NavLink'>
                        <div className='links'>
                            Instgram
                        </div>
                    </NavLink>

                    <NavLink to='/' className='NavLink'>
                        <div className='links'>
                            Whatsapp
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className='featFooter'>
                <h3>Contact us</h3>
                <div className='nLnks'>
                    <span to='/' className='NavLink'>
                        <div className='links'>
                            hassaan6666nabil@gmail.com
                        </div>
                    </span>

                    <span to='/' className='NavLink'>
                        <div className='links'>
                        linkedin/hassaan-nabil-5b95a31a4              
                        </div>
                    </span>

                    <span to='/' className='NavLink'>
                        <div className='links'>
                            01558225726
                        </div>
                    </span>

                    <span to='/' className='NavLink'>
                        <div className='links'>
                            01117394345
                        </div>
                    </span>
                </div>
            </div>
        </div>
        <span className='copy'>Copyright &copy; 2022 | Infinity Courses</span>
    </div>
  )
}

export default footer