import React from 'react'
import style from '../styles/component_scss/Component.module.scss'
import Button from '../elements/button'
import { workHook } from '../hooks/workHook'
import { useRouter } from 'next/router'
import profile from '../public/icons/profile.svg'
import certify from '../public/icons/certify.svg'
import IconButton from '../elements/iconButton.jsx'

const Work = ({ image, heading, details, liveViewLink, sourceCodeLink, techStack }) =>{
  const router = useRouter()

  function liveView(){
    router.push(liveViewLink)
  }

  function sourceCode(){
    router.push(sourceCodeLink)
  }

  return(
      <div className={style.cards} >
        <img className={style.backImage} src={image.src} alt="" />
        <div className={style.workDetails}>
          <p className={style.heading}>
            {heading}
          </p>
          <p className={style.details}>
            {details}
          </p>
          <div className={style.icon}>
            Tech Stack
            <div className={style.iconsDiv}>
              {techStack.map((obj, index) => (
                <IconButton key={index} icon={obj} />
              ))}
            </div>
          </div>
        <div className={style.buttons}>
            <div className={style.detailsButton} >
              <Button fun={liveView} dark className={style.headingWork} >VISIT SITE</Button>
            </div>
            <div className={style.detailsButton} >
              <Button fun={sourceCode} dark className={style.headingWork} >SEE SOURCE</Button>
            </div>
          </div>
        </div>
      </div>
  )
}

function SecondSlide({expertise , aboutMe}) {
  const { work } = workHook()

  function aboutMeIntoView() {
    aboutMe.current.scrollIntoView({
      behavior: "smooth"
    })
  }
  function expertiseIntoView() {
    expertise.current.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <>
      <div className={style.secondSlide} >
        <div className={style.header} >
            PROJECTS
        </div>
        <div className={style.ProjectsContainer} >
          {work.map((obj , index)=>(
            <Work key={index} liveViewLink={obj.liveView} sourceCodeLink={obj.sourceCode} image={obj.image} heading={obj.heading} details={obj.details} techStack={obj.techStack}/>
          ))}
        </div>
        <div className={style.buttonsContainer} >
          <Button fun={aboutMeIntoView} icon={profile}>ABOUT ME</Button>
          <Button fun={expertiseIntoView} dark icon={certify} >EXpertise</Button>
        </div>
      </div>
    </>
  )
}

export default SecondSlide