function calcularPropina() {
    let numPersonas = parseInt(document.getElementById("numPersonas").value);
    let totalCuenta =
        parseFloat(document.getElementById("totalCuenta").value) || 0;
    let calificacion = document.getElementById("calificacion").value;

    if (numPersonas === 0 || totalCuenta === 0) {
        mostrarError("Por favor, complete todos los campos obligatorios.");
        return;
    }

    let porcentajePropina;
    switch (calificacion) {
        case "genial":
            porcentajePropina = 0.1;
            break;
        case "aceptable":
            porcentajePropina = 0.05;
            break;
        case "horrible":
            porcentajePropina = 0.0;
            break;
        default:
            mostrarError("Calificación de servicio no válida.");
            return;
    }

    let propinaTotal = totalCuenta * porcentajePropina;
    let propinaPorPersona = propinaTotal / numPersonas;

    propinaPorPersona = Math.max(propinaPorPersona, 0.5);

    mostrarResultado(propinaPorPersona.toFixed(2));

    limpiarFormulario();
}

function mostrarResultado(propinaPorPersona) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p style="background-color: aquamarine;
    "> La propina por pesona es de ${propinaPorPersona}</p>`;
}

function mostrarError(mensaje) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p style="background-color:red;
    ">${mensaje}</p>`;
}

function limpiarFormulario() {
    document.getElementById("tipForm").reset();
}
