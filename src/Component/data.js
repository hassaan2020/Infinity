import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode,faRobot,faDatabase,faTerminal, faUser,faUserGraduate,faLayerGroup,faTrophy} from '@fortawesome/free-solid-svg-icons'
import {faReact,faPython,faJava,faAngular} from '@fortawesome/free-brands-svg-icons'
import p1 from './images/h1.jpg'
import p2 from './images/h2.jpg'
import p3 from './images/h4.jpg'

const data ={
    featDate:
    [
        {
            icn: faCode,
            title: "Programming",
            disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            icn: faRobot,
            title: "Machine learning",
            disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            icn: faDatabase,
            title: "Advanced Databse",
            disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
            icn: faTerminal,
            title: "UX/UI design",
            disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        }
    ],
    featCourse:
    [
        {
            icn: faReact,
            title: "React JS",
        },
        {
            icn: faPython,
            title: "Python",
        },
        {
            icn: faAngular,
            title: "Angular",
        },
        {
            icn: faJava,
            title: "Java",
        }
    ],
    featCounting:
    [
        {
            icn: faUser,
            nums: "189",
            title: "Teachers",
        },
        {
            icn: faUserGraduate,
            nums: "874",
            title: "Happy clients",
        },
        {
            icn: faLayerGroup,
            nums: "326",
            title: "Courses",
        },
        {
            icn: faTrophy,
            nums: "210",
            title: "Achievements",
        }
    ],
    featCustomer:
    [
        {
            img: p1,
            name: "Aleksandr Davydov",
            job: "front-end developer",
        },
        {
            img: p2,
            name: "Aleksandr Davydov",
            job: "UX/UI designer",
        },
        {
            img: p3,
            name: "Aleksandr Davydov",
            job: "Android developer",
        },
    ],
}
export default data