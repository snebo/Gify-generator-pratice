import { BASE_URL, GIPHY_API_KEY } from "./assets/enviroments";
import "./assets/styles.css";

console.log("Hello World");
const form = document.querySelector("form");
const img = document.querySelector(".giphy-image");
document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const search_value = form.querySelector("#search").value
        console.log(search_value)
        const new_img_src = await getGiphyGif(search_value)
        img.src = new_img_src

    })
})
async function getGiphyGif(search_value) {
    try {
        const response = await fetch(`${BASE_URL}?api_key=${GIPHY_API_KEY}&s=${search_value}&weirdness=4`, { mode: 'cors' })
        if (!response.ok) throw new Error('something went wrong')

        const data = await response.json()
        return data.data.images.original.url
    } catch (error) {
        console.log(error)
    }
}