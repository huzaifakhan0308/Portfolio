import React, { useState } from 'react'
import { useRouter } from 'next/router'
import style from '../styles/component_scss/Component.module.scss'
import plane from '../public/icons/planeDark.svg'
import Button from '../elements/button'
import contact from '../public/icons/contact.svg'
import resume from '../public/icons/resume.svg'
import profile from '../public/icons/profile.svg'
import Desktop from '../elements/Desktop'
import Mobile from '../elements/Mobile'

const MenuButton = ({ top, projects, aboutMe, expertise}) =>{
  const [ hover , setHover ] = useState(false)
  const [ active , setActive ] = useState(false)

  function goToTop(){
    top.current.scrollIntoView({
      behavior: "smooth"
    })
  }
  function goToProjects(){
    projects.current.scrollIntoView({
      behavior: "smooth"
    })
  }
  function goToAbout(){
    aboutMe.current.scrollIntoView({
      behavior: "smooth"
    })
  }
  function goToExpertise(){
    expertise.current.scrollIntoView({
      behavior: "smooth"
    })
  }
  return (
    <div>
        <div className={style.menuButton}  onClick={()=> setActive(!active)} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} >
          <div className={`${style.dot} ${style.dot1} ${!hover? style.dot1Animation:''} `}></div>
          <div className={`${style.dot} ${style.dot2} ${!hover? style.dot2Animation:''} `}></div>
          <div className={`${style.dot} ${style.dot3} ${!hover? style.dot3Animation:''} `}></div>
        </div>
        <input type="checkbox" checked={active} className={style.checkBox} />
        <div className={`${style.buttonSecondary} ${style.buttonSecondary1} `} >
          <Button icon={profile} light fun={goToTop} >Hero</Button>
        </div>
        <div className={`${style.buttonSecondary} ${style.buttonSecondary2} `} >
          <Button icon={resume} light fun={goToProjects} >Projects</Button>
        </div>
        <div className={`${style.buttonSecondary} ${ style.buttonSecondary3 } `} >
          <Button icon={resume} light fun={goToExpertise} >Expertise</Button>
        </div>
        <div className={`${style.buttonSecondary} ${style.buttonSecondary4} `} >
          <Button icon={resume} light fun={goToAbout} >About Me</Button>
        </div>
    </div>
  )
}

function Menu({ top, projects, aboutMe, expertise , contact , noButton=false}) {

  function goToContact() {
    contact.current.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <>
    <Desktop >
      <div className={style.menu} >
        <div className={style.menuHireButton} style={{opacity: noButton? 0 : 1 }} >
          <Button fun={goToContact} icon={plane} >Hire me now</Button>
        </div>
          <MenuButton top={top} projects={projects} aboutMe={aboutMe} expertise={expertise} contact={contact} />
      </div>
    </Desktop>
    <Mobile>
      <div className={style.menu} >
        <div className={style.menuHireButton} style={{opacity: noButton? 0 : 1 }} >
          <Button icon={plane} fun={goToContact} >Hire me now</Button>
        </div>
      </div>
    </Mobile>
    </>
  )
}

export default Menu