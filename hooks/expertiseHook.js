import html from '../public/icons/css.svg'
import css from '../public/icons/html.svg'
import js from '../public/icons/js.svg'
import react from '../public/icons/react.svg'
import redux from '../public/icons/redux.png'
import next from '../public/icons/next.svg'
import figma from '../public/icons/figma.svg'
import bootstrap from '../public/icons/bootstrap.svg'
import github from '../public/icons/github.svg'
import express from '../public/icons/express.svg'
import linkedIn from '../public/icons/linkedin.png'
import twitter from '../public/icons/twitter (1).png'
import gmail from '../public/icons/new.png'
import nodejs from '../public/icons/nodejs.svg'
import ruby from '../public/icons/ruby.png'
import mongoDB from '../public/icons/mongo.svg'
import firebase from '../public/icons/firebase.svg'
import sass from '../public/icons/sass.svg'
import webpack from '../public/icons/webpack.svg'
import rails from '../public/icons/rails.svg'
import postman from '../public/icons/postman.svg'
import context from '../public/icons/context.svg'
import postgresql from '../public/icons/postgresql.png'
import rspec from '../public/icons/Rspec.png'
import jest from '../public/icons/jest.svg'
import swagger from '../public/icons/swagger.png'
import unitTesting from '../public/icons/unittesting.png'
import gitlab from '../public/icons/gitlab.svg'
import render from '../public/icons/renderLogo2.png'
import vercel from '../public/icons/vercel1.png'
import teamManagment from '../public/icons/team-management.png'
import remoteWork from '../public/icons/remote work.png'

const frontEndExpertise = [
            {
                icon: html,
                name: "HTML"
            },
            {
                icon: css,
                name: "CSS",
            },
            {
                icon: sass,
                name: "SASS",
            },
            {
                icon: webpack,
                name: "WEBPACK",
            },
            {
                icon: redux,
                name: "REDUX",
            },
            {
                icon: context,
                name: "CONTEXT",
            },
            {
                icon: jest,
                name: "Jest",
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
                icon: nodejs,
                name: "NODE.JS"
            },
            {
                icon: express,
                name: "EXPRESS"
            },
            {
                icon: mongoDB,
                name: "MongoDB"
            },
            {
                icon: firebase,
                name: "Firebase"
            },
            {
                icon: postgresql,
                name: "PostgreSQL"
            },
            {
                icon: swagger,
                name: "API Documentation"
            },
            {
                icon: unitTesting,
                name: "Unit Testing"
            },
            {
                icon: postman,
                name: "POSTMAN"
            },
    ]

const comfortable = [ 
    {
        icon: teamManagment,
        name: "TeamWork"
    }, 
    {
        icon: remoteWork,
        name: "RemoteWork"
    }, 
    {
        icon: github,
        name: "GitHub"
    }, 
    {
        icon: gitlab,
        name: "GitLab"
    }, 
    {
        icon: render,
        name: "Render"
    }, 
    {
        icon: vercel,
        name: "Vercel"
    }, 
]

const letsConnect = [ linkedIn, twitter, gmail , github ]
    
export const expertiseHook = { frontEndExpertise, comfortable, letsConnect, backEndExpertise }