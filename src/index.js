import { BASE_URL, GIPHY_API_KEY } from "./assets/enviroments";
import "./assets/styles.css";

console.log("Hello World");
const form = document.querySelector("form");
const img = document.querySelector(".giphy-image");
document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const search_value = form.querySelector("#search").value
        console.log(search_value)
        fetch(`${BASE_URL}?api_key=${GIPHY_API_KEY}&s=${search_value}&weirdness=4`, { mode: 'cors' })
            .then(res => res.json())
            .then(data => {
                console.log(data.data.images.original.url)
                console.log(data.data.url)
                img.src = data.data.images.original.url
            })
    })
})