import React from 'react'
import style from '../styles/component_scss/Component.module.scss'
import { expertiseHook } from '../hooks/expertiseHook'
import IconButton from '../elements/iconButton'
import '../styles/Elements.module.css'

function ThirdSlide() {

    const frontEndExpertise = expertiseHook.frontEndExpertise
    const backEndExpertise = expertiseHook.backEndExpertise
    const comfortable = expertiseHook.comfortable

    return (
        <div className={style.thirdSlide} >
            <div className={style.header} >
                MY TECH STACK
            </div>
            <p> Front-End </p>
            <div className={style.comfortableIcons}>
                {frontEndExpertise.map((obj, index)=>(
                    <div
                        className={style.iconsContainer}
                        key={index}
                    >
                        <h2>
                            {obj.name}
                        </h2>
                        <IconButton icon={obj.icon} />
                    </div>
                ))}
            </div>
            <p> Back-End </p>
            <div className={style.comfortableIcons}>
                {backEndExpertise.map((obj , index)=>(
                    <div
                        className={style.iconsContainer}
                        key={index}
                    >
                        <h2>
                            {obj.name}
                        </h2>
                        <IconButton icon={obj.icon} />
                    </div>
                ))}
            </div>
            <p> Soft-Skills </p>
            <div className={style.comfortableIcons}>
                {comfortable.map((obj, index)=>(
                    <div
                        className={style.iconsContainer}
                        key={index}
                    >
                        <h2>
                            {obj.name}
                        </h2>
                        <IconButton icon={obj.icon} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ThirdSlide