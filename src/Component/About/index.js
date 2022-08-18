import React from 'react'
import data from '../data'
import p1 from '.././images/h6.png'
import p2 from '.././images/h7.png'
import styles from './style.module.css'


function About() {

  const showCourseFeatSection = data.courseFeatSectionData.map((el,idx) => {
    return(
      <div className={styles.courseFeatSection}>
        <img src={el.img}/>
        <h2>{el.name}</h2>
        <p>{el.title}</p>
        <span>{el.price} <s>{el.oldPrice}</s></span> 
        <button>Enroll Now</button>
      </div>
    )
  })

  return (
    <div className={styles.fragment}>
      <div className={styles.aboutHeader}>
        <div className={styles.aboutInnerHeader}>
          <div className={styles.container}>
            <div className={styles.welcomeAbout}>
              <h1>About Us</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <button>Learn more</button>
            </div>
            <div className={styles.imag}>
              <img src={p1} />
            </div>
            
          </div>
        </div>
      </div>

      <div className={styles.aboutUs}>
        <div className={styles.container}>
          <h1>Who we are</h1>
          <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      <div className={styles.aboutServices}>
        <div className={styles.container}>
        <div className={styles.innerAboutServices}>
            <h1>From education to talent</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
          </div>

          <div className={styles.imag}>
            <img src={p2}/>
          </div>

        </div>
      </div>

      <div className={styles.courseAboutSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            {showCourseFeatSection}
          </div>
        </div>
      </div>

      <div className={styles.imagineFuture}>
        <h1>Imagine your future</h1>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <button>GET STARTED</button>
      </div>

      <div className={styles.subscribe}>
        <h1>Don't miss our update</h1>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <form>
          <input type='email' className={styles.emailInp} placeholder='Enter your email'/>
          <input type='submit' value='subscribe' className={styles.submitInp}/>
        </form>
      </div>

    </div>
  )
}

export default About