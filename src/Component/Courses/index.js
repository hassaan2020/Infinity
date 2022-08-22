import React from 'react'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faSearch} from '@fortawesome/free-solid-svg-icons'
import data from '../data'
import styles from './style.module.css'
import p1 from '../images/h19.jpg'

function Courses() {
    const[filter, setFilter] = useState('');
    const searchData = data.coursePlaylist.filter((el) => 
    el.title.includes(filter) ||
    el.title.toLowerCase().includes(filter) ||
    el.title.toUpperCase().includes(filter) 
    );

    const searchTxt = (e) =>{
        setFilter(e.target.value);
    }

    const showCoursePlaylist = searchData.map((el,idx) => {
        return(
            <div className={styles.featPlaylist}>
                <div className={styles.innerFeatPlaylist}>
                    <FontAwesomeIcon icon={faPlay} className={styles.i}></FontAwesomeIcon>
                    <span>PLAYALL</span>
                </div>
                <div className={styles.listVideo}>
                    <span>{el.nums}</span>
                    <FontAwesomeIcon icon={faPlay} className={styles.i}></FontAwesomeIcon>
                </div>
                <img src={el.img} />
                <h2>{el.title}</h2>
                <h4>{el.name}</h4>
                <h5>{el.views}</h5>
            </div>
        )
    })
  return (
    <div className={styles.fragment}>
      <div className={styles.coursesHeader}>
        <div className={styles.innerCoursesHeader}>
            <h1>find perfect course</h1>
            <p>Thinking about studying abroad? Try our free tool to match you to the perfect course.</p>
          <form>
            <input type='text' placeholder='Search for course...' value={filter} onChange={searchTxt}/>
            <FontAwesomeIcon icon={faSearch} className={styles.i}></FontAwesomeIcon>
          </form>
        </div>
      </div>

      <div className={styles.playlists}>
        <div className={styles.container}>
            
            {showCoursePlaylist}
        </div>
      </div>
    </div>
  )
}

export default Courses