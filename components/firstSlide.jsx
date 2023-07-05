import React from 'react'
import style from '../styles/component_scss/Component.module.scss'
import { expertiseHook } from '../hooks/expertiseHook'
import IconButton from '../elements/iconButton'
import Huzaifa from '../public/icons/HUZAIFA.svg'
import Desktop from '../elements/Desktop'
import Mobile from '../elements/Mobile'
import huzaifa from '../public/huzaifa.jpg'

function FirstSlide() {
  const comfortable = expertiseHook.letsConnect

  const letsConnectLinks = [
    'https://www.linkedin.com/in/huzaifakhan03/',
    'https://twitter.com/huzaifakhan0308',
    'mailto:huzaifa031252khan@gmail.com',
    'https://github.com/huzaifakhan0308'
  ];
  return (
    <>
    <Desktop >
      <div className={style.firstSlide} >
          <div className={style.left} >
              <div className={style.blob}>
                <img src={huzaifa.src} alt="" />
              </div>
          </div>
          <div className={style.right} >
            <span className={style.lightFont} >HI THERE !</span>
            <span className={`${style.largeFont} ${style.heading}`} >
              I AM {' '}
              <img src={Huzaifa.src} alt="" style={{ width: "30vh" }} />
            </span>
            <span className={style.lightFont} >A FULL STACK SOFTWARE DEVELOPER <br />YES ! THE <b>COOL</b> GUY ON THE LEFT IS ME <br />
            </span>
            <div className={style.mouse}></div>
            <span className={style.lightFontFirstSlide} >I CAN HELP YOU BUILD A PRODUCT, FEATURE OR WEBSITE LOOK THROUGH SOME OF MY WORK AND EXPERIENCE!
             IF YOU LIKE WHAT YOU SEE AND HAVE A PROJECT YOU NEED CODED, DON’T HESTIATE TO CONTACT ME.
            </span>
            <br />
            <div className={`${style.largeFont} ${style.experience}`}>
              <span>LET’S CONNECT</span>
              <div className={style.comfortableIcons} style={{ display: "flex", flexDirection: "row"}} >
                {comfortable.map((icon, index) => (
                  <a key={index} href={letsConnectLinks[index]}>
                    <IconButton key={index} icon={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
      </div>
    </Desktop>
    <Mobile>
      <div className={style.firstSlideMob} >
          <div className={style.top} >
              <div className={style.blob}>
              <img src={huzaifa.src} alt="" />
              </div>
          </div>
          <div className={style.bottom} >
            <span className={style.lightFont} >HI THERE !</span>
            <span className={`${style.largeFont} ${style.heading}`} >
              I AM {' '}
              <img src={Huzaifa.src} alt="" className={style.profileImage} />
            </span>
            <span className={style.details} >A FULL STACK SOFTWARE DEVELOPER <br />YES ! THE <b>COOL</b> GUY ON THE TOP IS ME <br /> </span>
            <div className={style.mouse}></div>
            <span className={style.detailsA} >I CAN HELP YOU BUILD A PRODUCT, FEATURE OR WEBSITE LOOK THROUGH SOME OF MY WORK AND EXPERIENCE!
              IF YOU LIKE WHAT YOU SEE AND HAVE A PROJECT YOU NEED CODED, DON’T HESTIATE TO CONTACT ME.
            </span>
            <div className={`${style.largeFont} ${style.experience}`}>
              <span>LET’S CONNECT</span>
              <div className={style.comfortableIcons} style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} >
                {comfortable.map((icon, index) => (
                  <a key={index} href={letsConnectLinks[index]} style={{ margin: "10px" }} >
                    <IconButton key={index} icon={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
      </div>
    </Mobile>
    </>
  )
}

export default FirstSlide