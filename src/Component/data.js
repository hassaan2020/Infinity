import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode,faRobot,faDatabase,faTerminal, faUser,faUserGraduate,faLayerGroup,faTrophy} from '@fortawesome/free-solid-svg-icons'
import {faReact,faPython,faJava,faAngular} from '@fortawesome/free-brands-svg-icons'
import p1 from './images/h1.jpg'
import p2 from './images/h2.jpg'
import p3 from './images/h4.jpg'
import p4 from './images/flutter.jpg'
import p5 from './images/front.png'
import p6 from './images/data.jpg'

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
    courseFeatSectionData:
    [
        {
            img: p4,
            name: "Introduction to flutter with examples ",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price:"39$",
            oldPrice:"45$"
        },
        {
            img: p5,
            name: "Advanced front-end developer with react",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price:"42$",
            oldPrice:"49$"
        },
        {
            img: p6,
            name: "Programming for data science with python",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price:"56$",
            oldPrice:"65$"
        },
        
        
    ],
}
export default data