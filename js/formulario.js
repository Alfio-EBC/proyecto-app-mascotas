document.getElementById("basicForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const nombre_Mascota = document.getElementById("nombreMascota").value.trim();
    const tipo = document.getElementById("tipoMascota").value.trim();
    const edad_mascota = document.getElementById("edadMascota").value.trim();

    if (nombre === "") {
        document.getElementById("errorNombre").textContent = "Por favor, ingrese su nombre.";
        isValid = false;
    } else {
        document.getElementById("errorNombre").textContent = "";
    }

    if (email === "") {
        document.getElementById("errorEmail").textContent = "Por favor, ingrese su correo electrónico.";
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById("errorEmail").textContent = "Por favor, ingrese un correo electrónico válido.";
        isValid = false;
    } else {
        document.getElementById("errorEmail").textContent = "";
    }

    if (telefono === "") {
        document.getElementById("errorTelefono").textContent = "Por favor, ingrese su teléfono.";
        isValid = false;
    } else if (!validatePhone(telefono)) {
        document.getElementById("errorTelefono").textContent = "Por favor, ingrese un teléfono válido.";
        isValid = false;
    } else {
        document.getElementById("errorTelefono").textContent = "";
    }

    if (nombre === "") {
        document.getElementById("errorTipo").textContent = "Por favor, ingrese su Tipo.";
        isValid = false;
    } else {
        document.getElementById("errorTipo").textContent = "";
    }
    if (nombre === "") {
        document.getElementById("edadMascota").textContent = "Por favor, ingrese la edad de su mascota.";
        isValid = false;
    } else {
        document.getElementById("edadMascota").textContent = "";
    }

    if (nombre === "") {
        document.getElementById("errorNombreMascota").textContent = "Por favor, ingrese el nombre de su mascota.";
        isValid = false;
    } else {
        document.getElementById("errorNombreMascota").textContent = "";
    }
    if (isValid) {
        const resultadosDiv = document.getElementById("resultados");
        resultadosDiv.innerHTML = `
            <h2>Datos del Formulario</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Correo Electrónico:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Tipo de Mascota:</strong> ${tipo}</p>
            <p><strong>Nombre Mascota:</strong> ${nombre_Mascota}</p>
            <p><strong>Edad Mascota:</strong> ${edad_mascota}</p>
        `;
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\d{7,}$/;
    return re.test(phone);
}
