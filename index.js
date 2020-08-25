// const todosLosParrafos = document.getElementsByTagName ("p")
// console.log (todosLosParrafos)

// const todosLosVerdes = document.getElementsByClassName ("verde")
// console.log (todosLosVerdes)

// const todosLosBordesRojos = document.getElementById ("borde-rojo")
// console.log (todosLosBordesRojos)

const elementoClaseVerde = document.querySelector(".verde")
const elementoClaseRojo = document.querySelector(".rojo")
const elementoClaseAmarillo = document.querySelector(".amarillo")
const elementoClaseAzul = document.querySelector(".azul")
const elementoClaseRosa = document.querySelector(".rosa")

console.log (elementoClaseVerde.classList.add("negro"))
console.log (elementoClaseRojo.classList.add("rosa"))
console.log (elementoClaseRosa.classList.toggle("negro"))
console.log (elementoClaseAmarillo.classList.contains("rojo"))