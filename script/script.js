import { getData } from "../helpers/getData.js";
import { buscar } from "../modules/buscar.js";
import { verPeliculas } from "../modules/verPeliculas.js";

const main = document.querySelector('#main');
const form = document.querySelector('#form');
// const palabra = document.querySelector('#search'); automatico
let data;

document.addEventListener('DOMContentLoaded', async () => {
    data = await getData();
    verPeliculas(data, main)
})

// palabra.addEventListener('keypress', (e) => { para que sea automatico
form.addEventListener('submit', (e) => {
    const palabra = document.querySelector('#search').value;
     e.preventDefault();
    const value = buscar(palabra, data, main);

    verPeliculas(value, main);
})