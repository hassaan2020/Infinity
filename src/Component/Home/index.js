import React, { Fragment, useState } from 'react'
import pic from '../images/p.png'
import pic2 from '../images/h1.jpg'
import data from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDown, faCode} from '@fortawesome/free-solid-svg-icons'
import './style.css'

function Home() {

  const showFeatData = data.featDate.map((el,idx) => {
    return(
      <div className='feat'>
        
        <FontAwesomeIcon className='i' icon={el.icn}></FontAwesomeIcon>
        <h3>{el.title}</h3>
        <p>{el.disc}</p>
        <button>Enroll now</button>
      </div>
    )
  })

  const showFeatCourses = data.featCourse.map((el,idx) => {
    return(
      <div className='inFeatOfCourses'>
        <FontAwesomeIcon icon={el.icn} className='i'></FontAwesomeIcon>
        <h3>{el.title}</h3>
      </div>
    )
  })

  const showFeatCounting = data.featCounting.map((el,idx) => {
    return(
      <div className='featCounting'>
        <FontAwesomeIcon className='i' icon={el.icn}></FontAwesomeIcon>
        <h1>{el.nums}</h1>
        <h4>{el.title}</h4>
      </div>
    )
  })

  const showFeatCustomer = data.featCustomer.map((el,idx) => {
    return(
      <div className='featCustomer'>
        <div className='imag'>
          <img src={el.img} />
        </div>
        <h3>{el.name}</h3>
        <h5>{el.job}</h5>
      </div>
    )
  })

  return (
    <div className='fragment'>
      <div className='header'>
        <div className='innerHeader'>
            <div className='welcome'>
              <h1>Welcom to Infinity</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                 <FontAwesomeIcon className='i' icon={faArrowDown}></FontAwesomeIcon>
            </div>
        </div>
      </div>
      <br/>
      <div className='aboutUs'>
          <h1>About Us</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
      </div>
  
      <div className='container'>
        <div className='aboutCourse'>
          {showFeatData}
        </div>
      </div>

      <div className='toBe'>
        <div className='innerToBe'>
          <div className='container'>
            <div className='offer'>
              <h3>Special offer</h3>
              <h1>Up to 50% off</h1>
              <h3>For student community</h3>
              <button>get the offer</button>
            </div>
            <div className='dImage'>
              <img src={pic}/>
            </div>
          </div>
        </div>
      </div>

      <div className='featOfCourses'>
          <h1>Top rated courses</h1>
        <div className='container'>
          {showFeatCourses}
        </div>
      </div>

      <div className='counting toBe'>
        <div className='innerCounting innerToBe'>
          <div className='container'> 
            {showFeatCounting}
          </div>
        </div>
      </div>

      <div className='customers'>
        <h1>Our customers</h1>
        <div className='container'>
          {showFeatCustomer}
        </div>
      </div>

    </div>
  )
}

export default Home