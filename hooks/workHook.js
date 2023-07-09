import bookease from "../public/Bookease.png"
import blogWebsite from "../public/Blogwebsite.png"
import weatherapp from "../public/weatherapp.png"

export const workHook = () =>{
    const work = [
        {
            heading:"BOOKEASE",
            link:"/",
            details:"Streamline hotel reservations with our React-based front-end and Ruby on Rails-powered backend, delivering a seamless booking experience.",
            image: bookease
        },
        {
            heading:"BLOGS",
            link:"https://blogs-vn9i.onrender.com/",
            details:"Discover a captivating blog website made with React, Redux, and Firebase. Enjoy a curated collection of informative blogs, with a user-friendly interface. Experience seamless browsing and easy access, all controlled by a single user.",
            image: blogWebsite
        },
        {
            heading:"WEATHER APP",
            link:"https://weather-8zxb.onrender.com/",
            details:"Experience WeatherApp, a cutting-edge weather app powered by React and Redux. Stay informed with real-time weather updates and a user-friendly interface. Plan your day confidently with WeatherApp intuitive design and reliable weather data.",
            image: weatherapp
        }
    ]

    return ({work})
}