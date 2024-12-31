import { BASE_URL, GIPHY_API_KEY } from "./assets/enviroments";
import "./assets/styles.css";

console.log("Hello World");
const form = document.querySelector("form");
document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const search_value = form.querySelector("#search").value
        console.log(search_value)
    })
})