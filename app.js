const formulario = document.getElementById("formulario"), expresion = document.getElementById("expresion"), texto = document.getElementById("texto"), advertencia = document.getElementById("advertencia"), limpiarBtn = document.getElementById("limpiar");
const mostrarMensaje = (mensaje, color) => { advertencia.innerHTML = `<div style="background-color: ${color}; padding: 10px; border-radius: 5px; color: black; font-weight: bold;">${mensaje}</div>`;
};
formulario.onsubmit = e => {e.preventDefault();
    const [valorExpresion, valorTexto] = [expresion.value.trim(), texto.value.trim()];
    const mensajes = [(!valorExpresion || !valorTexto) ? "⚠ Necesitas ingresar una expresión y un texto." :
        new RegExp(valorExpresion).test(valorTexto) && /^[a-zA-Z0-9\s\W_]+$/.test(valorTexto) ? "✔ La expresión es correcta y coincide con el texto." :
        "❌ La expresión no coincide con el texto o no es válida."];
    const colores = [ (!valorExpresion || !valorTexto) ? "lightyellow" :
        new RegExp(valorExpresion).test(valorTexto) ? "lightgreen" : "lightcoral"];
    mostrarMensaje(mensajes[0], colores[0]);
};
limpiarBtn.onclick = () => {[expresion.value, texto.value, advertencia.innerHTML] = ["", "", ""];
    mostrarMensaje("✔ Limpieza de inputs exitosa.", "lightblue");
};
/*EXPRESIONES QUE SE INGRESAN: ^\d+$, ^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$, ^\d{5}$, ^[a-zA-Z0-9]+$, ^[a-zA-Z\s]+$, ^[a-zA-Z\W_]+$ */
