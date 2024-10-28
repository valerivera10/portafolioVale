import { acercaDe, proyectos } from "./gallery.js";

const acercaDeElement = document.querySelector(".acerca")
const inicioElement = document.querySelector(".inicio")
const proyectosElement = document.querySelector(".proyectos")
const mainElement = document.querySelector("#main");

export const clearInformation = () => {
    mainElement.innerHTML = "";
}

export const reload = async()=>{
    setTimeout(() => {
        location.reload();
    }, 100);
}

const handleAcercaDe = async () => {
    await clearInformation()
    await acercaDe();
}

const handleInicio = async () => {
    reload()
}

const handleProyectos = async () => {
    await clearInformation()
    await proyectos();
}

document.addEventListener("DOMContentLoaded", async (e) => {

    acercaDeElement.addEventListener("click", (e)=>{
        handleAcercaDe(e)
    })

    inicioElement.addEventListener("click", (e)=>{
        handleInicio(e)
    })

    proyectosElement.addEventListener("click", (e)=>{
        handleProyectos(e)
    })
})
