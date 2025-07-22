  // Mostrar "Mentirosa" en tiempo real al seleccionar "no" en la pregunta del ex
document.addEventListener("DOMContentLoaded", function() {
    const exOptions = document.querySelectorAll('input[name="ex"]');
    const mentirosaMensaje = document.createElement("p")
    mentirosaMensaje.textContent = "Mentirosaa AJAKJAKS";
    mentirosaMensaje.style.fontWeight = "bold";
    mentirosaMensaje.style.display = "none"; // Oculto al inicio

  // Agregamos el mensaje justo después del bloque de la pregunta
    const pregunta1 = document.querySelector("#pregunta1"); // Asegúrate de ponerle ese id al div de la pregunta 1
    pregunta1.appendChild(mentirosaMensaje);

    exOptions.forEach(option => {
    option.addEventListener("change", function() {
        if (this.value === "no") {
        mentirosaMensaje.style.display = "block";
    } else {
        mentirosaMensaje.style.display = "none";
    }
});
});
});

document.getElementById("compatibilityForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const form = e.target;
    let puntos = 0;

  // Preguntas 1-5
    puntos += form.ex.value === "no" ? 2 : -2;
    puntos += form.infiel.value === "no" ? 2 : -2;
    puntos += form.divertida.value === "si" ? 2 : -1;
    puntos += form.bonita.value === "si" ? 2 : -2;
    puntos += form.disciplinada.value === "si" ? 2 : -1;

  // Pregunta 6: tipo de pelo
    if (form.pelo.value === "si") {
        puntos += 2;
    }


  // Pregunta 7: color de cabello
    puntos += form.cabello.value === "N" ? 2 : -1;

  // Pregunta 8: color de piel
    puntos += form.piel.value === "B" ? 2 : -1;

  // Pregunta 9: estatura
    puntos += form.estatura.value === "si" ? 2 : -1;

  // Pregunta 10: hijos
    const hijos = parseInt(form.hijos.value);
    if (hijos === 2) {
    puntos += 2;
} else if (hijos === 3) {
    puntos += 1;
} else if (hijos === 1){
    puntos += 1;
} else {
    puntos -= 2;
}

  // Calcular la nota sobre 10
  let nota = (puntos / 20) * 10;
  nota = Math.max(0, Math.min(10, nota)); // Limitar entre 0 y 10

    const resultado = document.getElementById("resultado");

    if (nota >= 10) {
    resultado.innerHTML += `<p style="color: green;">¡Match perfecto!, se ganó unos besitoss 😜</p>`;
} else if (nota >= 7) {
    resultado.innerHTML += `<p style="color: orange;">Aprobada, escríbame 😜</p>`;
} else if (nota >= 6.5 && nota < 7) {
    resultado.innerHTML = `<p style="color: orange;">Casi, pero no😬. Desaprobada</p>`;
}else {
    resultado.innerHTML += `<p style="color: red;">Desaprobada, mejor como amigos.</p>`;
}

  // 🔒 Bloquear el formulario después del envío
    const inputs = form.querySelectorAll("input, select, button");
    inputs.forEach(el => el.disabled = true);
});
