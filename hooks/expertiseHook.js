import html from '../public/icons/html.svg'
import css from '../public/icons/css.svg'
import js from '../public/icons/js.svg'
import react from '../public/icons/react.svg'
import redux from '../public/icons/redux.png'
import axios from '../public/icons/axios.svg'
import next from '../public/icons/next.svg'
import figma from '../public/icons/figma.svg'
import tailwind from '../public/icons/tailwind.svg'
import bootstrap from '../public/icons/bootstrap.svg'
import github from '../public/icons/github.svg'
import express from '../public/icons/express.svg'
import linkedIn from '../public/icons/linkedin.png'
import twitter from '../public/icons/twitter (1).png'
import gmail from '../public/icons/new.png'
import nodejs from '../public/icons/nodejs.svg'
import ruby from '../public/icons/ruby.png'
import mongoDB from '../public/icons/mongo.svg'

const frontEndExpertise = [
            {
                icon: css,
                name: "HTML"
            },
            {
                icon: html,
                name: "CSS",
            },
            {
                icon: js,
                name: "JAVASCRIPT",
            },
            {
                icon: react,
                name: "REACT.js",
            },
            {
                icon: redux,
                name: "REDUX",
            },
            {
                icon: axios,
                name: "AXIOS",
            },
            {
                icon: next,
                name: "NEXT.js",
            },
            {
                icon: figma,
                name: "FIGMA",
            },
            {
                icon: bootstrap,
                name: "BOOTSTRAP",
            },
    ]

const backEndExpertise = [
            {
                icon: ruby,
                name: "ROR"
            },
            {
                icon: nodejs,
                name: "NODE.JS"
            },
            {
                icon: express,
                name: "EXPRESS"
            },
            {
                icon: mongoDB,
                name: "mongoDB"
            },
    ]

const comfortable = [ 
    {
        icon: tailwind,
        name: "TAILWIND"
    } , 
    {
        icon: tailwind,
        name: "TAILWIND"
    } , 
    {
        icon: tailwind,
        name: "TAILWIND"
    } , 
]

const letsConnect = [ linkedIn, twitter, gmail , github ]
    
export const expertiseHook = { frontEndExpertise, comfortable, letsConnect, backEndExpertise }