import bookease from "../public/Bookease.png"
import blogWebsite from "../public/Blogwebsite.png"
import weatherapp from "../public/weatherapp.png"
import cricketacademy from "../public/cricketacademy.png"
import html from '../public/icons/css.svg'
import css from '../public/icons/html.svg'
import js from '../public/icons/js.svg'
import jest from '../public/icons/jest.svg'
import react from '../public/icons/react.svg'
import redux from '../public/icons/redux.png'
import rails from '../public/icons/rails.svg'
import rspec from '../public/icons/Rspec.png'
import swagger from '../public/icons/swagger.png'

export const workHook = () =>{
    const work = [
        {
            heading:"BOOKEASE",
            liveView:"https://book-ease.onrender.com/",
            sourceCode:"https://github.com/huzaifakhan0308/full-stack-capstone-front-end",
            details:"Streamline hotel reservations with our React-based front-end and Ruby on Rails-powered backend, delivering a seamless booking experience.",
            image: bookease,
            techStack: [react, redux, rails, rspec, swagger]
        },
        {
            heading:"BLOGS",
            liveView:"https://blogs-vn9i.onrender.com/",
            sourceCode: "https://github.com/huzaifakhan0308/blog-website",
            details:"Discover a captivating blog website made with React, Redux, and Firebase. Enjoy a curated collection of informative blogs, with a user-friendly interface. Experience seamless browsing and easy access, all controlled by a single user.",
            image: blogWebsite,
            techStack: [react, redux]
        },
        {
            heading:"WEATHER APP",
            liveView:"https://weather-8zxb.onrender.com/",
            sourceCode: "https://github.com/huzaifakhan0308/react-capston",
            details:"Experience WeatherApp, powered by React and Redux. Stay informed with real-time weather updates and a user-friendly interface. Plan your day confidently with WeatherApp intuitive design and reliable weather data.",
            image: weatherapp,
            techStack: [react, redux, jest]
        },
        {
            heading:"CRICKET ACADEMY",
            liveView:"https://weather-8zxb.onrender.com/",
            sourceCode: "https://github.com/huzaifakhan0308/capston-project",
            details:"Welcome to our Cricket Academy website! Stay updated on the upcoming World Cup, match schedules, and team details. While JavaScript usage is minimal, our platform provides a comprehensive experience built primarily with HTML and CSS.",
            image: cricketacademy,
            techStack: [html, css, js]
        }
    ]

    return ({work})
}
