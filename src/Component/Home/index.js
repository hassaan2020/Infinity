import React, { Fragment, useState } from 'react'
import pic from '../images/p.png'
import pic2 from '../images/h1.jpg'
import data from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDown, faCode} from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'
import cx from 'classnames';
import classNames from 'classnames'

function Home() {

  const showFeatData = data.featDate.map((el,idx) => {
    return(
      <div className={styles.feat}>
        
        <FontAwesomeIcon className={styles.i} icon={el.icn}></FontAwesomeIcon>
        <h3>{el.title}</h3>
        <p>{el.disc}</p>
        <button>Enroll now</button>
      </div>
    )
  })

  const showFeatCourses = data.featCourse.map((el,idx) => {
    return(
      <div className={styles.inFeatOfCourses}>
        <FontAwesomeIcon icon={el.icn} className={styles.i}></FontAwesomeIcon>
        <h3>{el.title}</h3>
      </div>
    )
  })

  const showFeatCounting = data.featCounting.map((el,idx) => {
    return(
      <div className={styles.featCounting}>
        <FontAwesomeIcon className={styles.i} icon={el.icn}></FontAwesomeIcon>
        <h1>{el.nums}</h1>
        <h4>{el.title}</h4>
      </div>
    )
  })

  const showFeatCustomer = data.featCustomer.map((el,idx) => {
    return(
      <div className={styles.featCustomer}>
        <div className={styles.imag}>
          <img src={el.img} />
        </div>
        <h3>{el.name}</h3>
        <h5>{el.job}</h5>
      </div>
    )
  })

  return (
    <div className={styles.fragment}>
      <div className={styles.header}>
        <div className={styles.innerHeader}>
            <div className={styles.welcome}>
              <h1>Welcom to Infinity</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                 <FontAwesomeIcon className={styles.i} icon={faArrowDown}></FontAwesomeIcon>
            </div>
        </div>
      </div>
      <br/>
      <div className={styles.homeAboutUs}>
          <h1>About Us</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
      </div>
  
      <div className={styles.container}>
        <div className={styles.aboutCourse}>
          {showFeatData}
        </div>
      </div>

      <div className={styles.toBe}>
        <div className={styles.innerToBe}>
          <div className={styles.container}>
            <div className={styles.offer}>
              <h3>Special offer</h3>
              <h1>Up to 50% off</h1>
              <h3>For student community</h3>
              <button>get the offer</button>
            </div>
            <div className={styles.dImage}>
              <img src={pic}/>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.featOfCourses}>
          <h1>Top rated courses</h1>
        <div className={styles.container}>
          {showFeatCourses}
        </div>
      </div>

      <div className={cx(styles.counting, styles.toBe)}> 
        <div className={cx(styles.innerCounting,  styles.toBeinnerToBe)}>
          <div className={styles.container}> 
            {showFeatCounting}
          </div>
        </div>
      </div>

      <div className={styles.customers}>
        <h1>Our customers</h1>
        <div className={styles.container}>
          {showFeatCustomer}
        </div>
      </div>

    </div>
  )
}

export default Home