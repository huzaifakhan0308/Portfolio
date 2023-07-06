import React from 'react'
import style from '../styles/Elements.module.css'
import Desktop from '../elements/Desktop'
import Mobile from '../elements/Mobile'

function IconButton({icon , index , setActive=(()=>{})}) {
  return (
    <>
    <Desktop>
      <div onClick={()=>{setActive(index)}} className={`${style.iconButton}`} >
          <img alt='' src={icon.src} className={style.icon} />
      </div>
    </Desktop>
    <Mobile>
      <div onClick={()=>{setActive(index)}} className={`${style.iconButtonMob}`} >
          <img alt='' src={icon.src} className={style.icon} />
      </div>
    </Mobile>
    </>
  )
}

export default IconButton