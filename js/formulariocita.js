document.getElementById('formulario_cita').addEventListener('submit', function(e) {
    e.preventDefault(); 
    let isValid = true;
    
    const fecha = document.getElementById('Fecha').value;
    const hora1 = document.getElementById('hora1').value;
    const hora2 = document.getElementById('hora2').value;
    const hora3 = document.getElementById('hora3').value;
    const checkbox = document.getElementById('checkboxuno').checked;
    const errorFecha = document.getElementById('errorFecha');
    
    if (!fecha) {
        errorFecha.textContent = "Por favor, selecciona una fecha.";
        isValid = false;
    } else if (new Date(fecha) < new Date()) {
        errorFecha.textContent = "La fecha debe ser actual.";
        isValid = false;
    } else {
        errorFecha.textContent = "";
    }
    
    if (!hora1 && !hora2 && !hora3) {
        alert("Por favor, selecciona una hora.");
        isValid = false;
    }
    
    if (!checkbox) {
        alert("Por favor, acepta que la hora de la cita puede estar sujeta a cambios.");
        isValid = false;
    }
    
    if (isValid) {
        // Crear un div que contenga los resultados y aplicarle la clase de animación
        document.write(`
            <div class="fade-in">
                <h2>Formulario enviado correctamente</h2>
                <p>Fecha seleccionada: ${fecha}</p>
                <p>Hora 1: ${hora1 || "No seleccionada"}</p>
                <p>Hora 2: ${hora2 || "No seleccionada"}</p>
                <p>Hora 3: ${hora3 || "No seleccionada"}</p>
                <p>Condiciones aceptadas: ${checkbox ? "Sí" : "No"}</p>
            </div>
        `);
    }
});
