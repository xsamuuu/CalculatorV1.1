 /*Proyecto: Calculadora -->
 Archivo: script.js -->
Descripción: Este archivo contiene el código JavaScript que maneja la lógica y funcionalidad de la calculadora
 Autor: Samuel Moscoso -->
Fecha: 15/06/2023 -->
*/
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".calculator input");
const historial = document.querySelector(".historial");
const btnIzquierda = document.querySelector(".izquierda");
const btnDerecha = document.querySelector(".derecha");
let operacion = "";
let resultado = "";

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonPresionado = boton.value;

        if (botonPresionado === "AC") {
            pantalla.textContent = "0";
            pantalla.scrollLeft = 0;
            operacion = "";
            resultado = "";
            return;
        }

        if (botonPresionado === "DEL") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!" || pantalla.textContent === "Infinity" || pantalla.textContent === "NaN") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (botonPresionado === "=") {
            try {
                resultado = eval(pantalla.textContent.replace("X", "*"));
                operacion = pantalla.textContent;
                pantalla.textContent = resultado;
                agregarHistorial(operacion, resultado);
            } catch {
                pantalla.textContent = "Error!";
               
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!" || pantalla.textContent === "Infinity" || pantalla.textContent === "NaN") {
            pantalla.textContent = botonPresionado;
        } else {
            pantalla.textContent += botonPresionado;
        }

        pantalla.scrollLeft = pantalla.scrollWidth - pantalla.clientWidth;
    })

});

btnIzquierda.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    pantalla.scrollLeft -= 100;
});

btnDerecha.addEventListener("click", () => {
    pantalla.scrollLeft += 100;
});

function agregarHistorial(operacion, resultado) {
    const entrada = document.createElement('div');
    entrada.textContent = `${operacion} = ${resultado}`;
    historial.appendChild(entrada);
    
  const hr = document.createElement('hr');
  entrada.insertAdjacentHTML('afterend', '<hr>')
}
