import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInfinity} from '@fortawesome/free-solid-svg-icons'
import { Link,NavLink } from 'react-router-dom'


function footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.featFooter}>
                <FontAwesomeIcon className={styles.i} icon={faInfinity}></FontAwesomeIcon>
                <h1>Infinity</h1>
            </div>
            <div className={styles.featFooter}>
                <h3>Our website</h3>
                <div className={styles.nLnks}>
                    <NavLink to='/' className={styles.NavLink}>
                        <div className={styles.links}>
                            About
                        </div>
                    </NavLink>

                    <NavLink to='/' className={styles.NavLink}>
                        <div className={styles.links}>
                            Services               
                        </div>
                    </NavLink>

                    <NavLink to='/' className={styles.NavLink}>
                        <div className={styles.links}>
                            Courses
                        </div>
                    </NavLink>
                    <NavLink to='/' className={styles.NavLink}>
                        <div className={styles.links}>
                            Contact Us
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className={styles.featFooter}>
                <h3>Social </h3>
                <div className={styles.nLnks}>
                    <NavLink to='/' className={styles.NavLink}>
                        <div className={styles.links}>
                            Facebook
                        </div>
                    </NavLink>

                    <NavLink to='/' className={styles.NavLink}>
                        <div className={styles.links}>
                            LinkedIn               
                        </div>
                    </NavLink>

                    <NavLink to='/' className={styles.NavLink}>
                        <div className={styles.links}>
                            Instgram
                        </div>
                    </NavLink>

                    <NavLink to='/' className={styles.NavLink}>
                        <div className={styles.links}>
                            Whatsapp
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className={styles.featFooter}>
                <h3>Contact us</h3>
                <div className={styles.nLnks}>
                    <span to='/' className={styles.NavLink}>
                        <div className={styles.links}>
                            hassaan6666nabil@gmail.com
                        </div>
                    </span>

                    <span to='/' className={styles.NavLink}>
                        <div className={styles.links}>
                        linkedin/hassaan-nabil-5b95a31a4              
                        </div>
                    </span>

                    <span to='/' className={styles.NavLink}>
                        <div className={styles.links}>
                            01558225726
                        </div>
                    </span>

                    <span to='/' className={styles.NavLink}>
                        <div className={styles.links}>
                            01117394345
                        </div>
                    </span>
                </div>
            </div>
        </div>
        <span className={styles.copy}>Copyright &copy; 2022 | Infinity Courses</span>
    </div>
  )
}

export default footer