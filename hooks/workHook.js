import bookease from "../public/Bookease.png"
import blogWebsite from "../public/Blogwebsite.png"
import robodialog from "../public/robodialog.png"
import yourchoiceimg from "../public/yourchoiceimg.png"
import jest from '../public/icons/jest.svg'
import react from '../public/icons/react.svg'
import redux from '../public/icons/redux.png'
import rails from '../public/icons/rails.svg'
import rspec from '../public/icons/Rspec.png'
import swagger from '../public/icons/swagger.png'
import node from '../public/icons/nodejs.svg'
import next from '../public/icons/next.svg'
import mongo from '../public/icons/mongo.svg'
import express from '../public/icons/express.svg'
import context from '../public/icons/context.svg'

export const workHook = () =>{
    const work = [
        {
            heading:"ROBODIALOG",
            liveView:"https://robodialog.com/",
            sourceCode: "https://github.com/huzaifakhan0308",
            details:"roboDialog is an advanced AI-powered chatbot designed to enhance customer interactions on websites. It combines powerful AI technology with human oversight, offering customizable chat flows, seamless API integration.",
            image: robodialog,
            techStack: [next, context, node, express, mongo]
        },
        {
            heading:"BOOKEASE",
            liveView:"https://book-ease.onrender.com/",
            sourceCode:"https://github.com/huzaifakhan0308/full-stack-capstone-front-end",
            details:"Streamline hotel reservations with our React-based front-end and Ruby on Rails-powered backend, delivering a seamless booking experience.",
            image: bookease,
            techStack: [react, redux, rails, rspec, swagger]
        },
        {
            heading:"Your Choice Shop",
            liveView:"https://your-choice-leather-collection.onrender.com/",
            sourceCode: "https://github.com/huzaifakhan0308/your-choice-frontend",
            details:"Crafted a sleek e-commerce platform using Node.js and Next.js, showcasing a stylish collection of shoes, jackets, and handbags. Seamlessly integrated Cloudinary and Context API for top-notch user experience.",
            image: yourchoiceimg,
            techStack: [next, context, node]
        },
        {
            heading:"BLOGS",
            liveView:"https://blogs-vn9i.onrender.com/",
            sourceCode: "https://github.com/huzaifakhan0308/blog-website",
            details:"Discover a captivating blog website made with React, Redux, and Firebase. Enjoy a curated collection of informative blogs, with a user-friendly interface. Experience seamless browsing and easy access, all controlled by a single user.",
            image: blogWebsite,
            techStack: [react, redux]
        },
    ]

    return ({work})
}
