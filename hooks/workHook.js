import bookease from "../public/bookease.png"
import recipes from "../public/recipes.jpg"
import editor from "../public/editor.jpg"

export const workHook = () =>{
    const work = [
        {
            heading:"BOOKEASE",
            link:"/",
            details:"Streamline hotel reservations with our React-based front-end and Ruby on Rails-powered backend, delivering a seamless booking experience.",
            image: bookease
        },
        {
            heading:"SPOONACULAR",
            link:"/recipes",
            details:"A Website with a lot of different recipies. You can search for your favorite dishes.",
            image: recipes
        },
        {
            heading:"PHOTO EDITOR",
            link:"/editor",
            details:"An Editor Web App. You can use it to edit your image on the go and download it after you are done",
            image: editor
        }
    ]

    return ({work})
}