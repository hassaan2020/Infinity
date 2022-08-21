import React from 'react'
import data from '../data'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import styles  from './style.module.css'
import p1 from '../images/h4.jpg'


function Services() {

  const slider = React.useRef(null);

  const showOurServices = data.ourServicesFeat.map((el,idx) =>{
    return(
      <div className={styles.ourFeatServices}>
        <FontAwesomeIcon icon={el.icn} className={styles.i}></FontAwesomeIcon>
        <h2>{el.title}</h2>
        <p>{el.disc}</p>
      </div>
    )
  })
  const showFeatCustomerSlider = data.featCustomerSlider.map((el,idx) => {
    return(
      <div className={styles.innerSlider}>
        <img src={el.img}/>
        <p>{el.comment}</p>
        <h2>{el.name}</h2>
        <h3>{el.job}</h3>
      </div>
    )
  })

  const showGridImage = data.gridImg.map((el,idx) => {
    return(
        <div className={styles.imgs}>
          <img src={el.img}/>
        </div>
    )
  })
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.fragment}>
      <div className={styles.servicesHeader}>
        <div className={styles.innerServicesHeader}>
          <div className={styles.container}>
            <div className={styles.servicesToBe}>
              <h6>how to become a</h6>
              <h1>Senior</h1>
              <h6>Software developer</h6>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ourServices}>
        <h1>Our services</h1>
        <div className={styles.container}>
          {showOurServices}
        </div>
      </div>

      <div className={styles.slider}>
        
        <Slider {...settings} className={styles.slider2} ref={slider}>
          {showFeatCustomerSlider}
        </Slider>
        <FontAwesomeIcon icon={faAngleLeft}  className={styles.prevArrow} onClick={() => slider?.current?.slickPrev()}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faAngleRight}  className={styles.nextArrow} onClick={() => slider?.current?.slickNext()}></FontAwesomeIcon>
      </div>

      <div className={styles.container}>
        <div className={styles.gridItems}>
         {showGridImage}
        </div>
      </div>
    </div>

  )
}

export default Services