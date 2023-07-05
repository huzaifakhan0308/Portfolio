import React , { useRef, useState} from 'react'
import style from '../styles/component_scss/Component.module.scss'
import { expertiseHook } from '../hooks/expertiseHook'
import IconButton from '../elements/iconButton'
import Desktop from '../elements/Desktop'
import Mobile from '../elements/Mobile'

function ThirdSlide() {

    const [ expertise ] = useState(expertiseHook.expertise)
    const comfortable = expertiseHook.comfortable

    return (
        <>
        <Desktop>
            <div className={style.thirdSlide} >
            <h1>MY TECH STACK</h1>
                <div className={style.comfortableIcons}>
                <p> FRONT END </p>
                {/* <div className=""> */}
                    {expertise.map((obj , index)=>(
                        <IconButton key={index} index={index} icon={obj.icon} />
                        ))}
                {/* </div> */}
                </div>
                <p> SOFT SKILLS </p>
                <div className={style.comfortableIcons}>
                    {comfortable.map((icon,index)=>(
                        <IconButton key={index} icon={icon} />
                    ))}
                </div>
            </div>
        </Desktop>
        <Mobile>
            <div className={style.thirdSlideMob} >
                <p> MY EXPERTISE </p>
                <div className={style.comfortableIcons}>
                    {expertise.map((obj , index)=>(
                        <IconButton key={index} index={index} icon={obj.icon} />
                        ))}
                </div>
                <p> I AM FAMILIAR WITH </p>
                <div className={style.comfortableIcons}>
                    {comfortable.map((icon , index)=>(
                        <IconButton key={index} icon={icon} />
                    ))}
                </div>
                
            </div>

        </Mobile>
        </>
    )
}

export default ThirdSlide