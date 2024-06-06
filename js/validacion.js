function validar() {
    var retorno_nombre = validar_nombre();
    var retorno_apellido = validar_apellido();
    var retorno_direccion = validar_direccion();
    var retorno_comuna = validar_comuna();
    var retorno_telefono = validar_telefono();
    var retorno_correo = validar_correo();
    var retorno_contraseña = validar_contraseña();
    var retorno_repetir_contraseña = validar_repetir_contraseña();
    var retorno_url = validar_url();
    var retorno_aficiones = validar_aficiones();
    return retorno_nombre && retorno_apellido &&
           retorno_comuna && retorno_correo &&
           retorno_contraseña && retorno_repetir_contraseña &&
           retorno_url && retorno_aficiones &&
           retorno_direccion && retorno_telefono;
}

function validar_nombre() {
    var input_nombre = document.getElementById("input-nombre");
    var div_error_nombre = document.getElementById("error-nombre");
    var nombre = input_nombre.value;
    if (nombre === "") {
        div_error_nombre.innerHTML = "El nombre es obligatorio";
        div_error_nombre.className = "text-danger small mt-1";
        return false;
    } else if (nombre.length > 20) {
        div_error_nombre.innerHTML = "El nombre no puede tener más de 20 caracteres";
        div_error_nombre.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_nombre.innerHTML = "";
        return true;
    }
}

function validar_apellido() {
    var input_apellido = document.getElementById("input-apellido");
    var div_error_apellido = document.getElementById("error-apellido");
    var apellido = input_apellido.value;
    if (apellido === "") {
        div_error_apellido.innerHTML = "El apellido es obligatorio";
        div_error_apellido.className = "text-danger small mt-1";
        return false;
    } else if (apellido.length > 20) {
        div_error_apellido.innerHTML = "El apellido no puede tener más de 20 caracteres";
        div_error_apellido.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_apellido.innerHTML = "";
        return true;
    }
}

function validar_comuna() {
    var select_comuna = document.getElementById("select-comuna");
    var div_error_comuna = document.getElementById("error-comuna");
    var comuna = select_comuna.value;
    if (comuna === "default") {
        div_error_comuna.innerHTML = "Debe seleccionar una comuna";
        div_error_comuna.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}

function validar_direccion() {
    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;
    if (direccion === "") {
        div_error_direccion.innerHTML = "La dirección es obligatoria";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else if (direccion.length > 50) {
        div_error_direccion.innerHTML = "La dirección no puede tener más de 50 caracteres";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}

function validar_telefono() {
    var input_telefono = document.getElementById("input-fono");
    var div_error_telefono = document.getElementById("error-fono");
    var telefono = input_telefono.value;
    if (telefono === "") {
        div_error_telefono.innerHTML = "El teléfono es obligatorio";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } else if (!/^\+?\d{7,15}$/.test(telefono)) {
        div_error_telefono.innerHTML = "El teléfono no tiene el formato correcto";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_telefono.innerHTML = "";
        return true;
    }
}

function validar_correo() {
    var input_email = document.getElementById("input-email");
    var div_error_email = document.getElementById("error-email");
    var correo = input_email.value;
    var pos_arroba = correo.indexOf("@");
    var pos_punto = correo.lastIndexOf(".");
    var arr_correo = correo.split(".");
    var extension = arr_correo[arr_correo.length - 1];
    if (pos_arroba > 0 && pos_punto > pos_arroba && (extension.length > 1 && extension.length <= 3)) {
        div_error_email.innerHTML = "";
        return true;
    } else {
        div_error_email.innerHTML = "El correo electrónico no tiene el formato correcto";
        div_error_email.className = "text-danger small mt-1";
        return false;
    }
}

function validar_contraseña() {
    var input_contraseña = document.getElementById("input-contraseña");
    var div_error_contraseña = document.getElementById("error-contraseña");
    var contraseña = input_contraseña.value;
    if (contraseña.length >= 3 && contraseña.length <= 6 && /\d/.test(contraseña) && /[a-zA-Z]/.test(contraseña)) {
        div_error_contraseña.innerHTML = "";
        return true;
    } else {
        div_error_contraseña.innerHTML = "La contraseña debe tener entre 3 y 6 caracteres, al menos un número y una letra";
        div_error_contraseña.className = "text-danger small mt-1";
        return false;
    }
}

function validar_repetir_contraseña() {
    var contraseña = document.getElementById("input-contraseña").value;
    var repetir_contraseña = document.getElementById("input-confirmar-contraseña").value;
    var div_error_repetir_contraseña = document.getElementById("error-confirmar-contraseña");
    if (contraseña === repetir_contraseña) {
        div_error_repetir_contraseña.innerHTML = "";
        return true;
    } else {
        div_error_repetir_contraseña.innerHTML = "Las contraseñas no coinciden";
        div_error_repetir_contraseña.className = "text-danger small mt-1";
        return false;
    }
}

function validar_url() {
    var url = document.getElementById("input-url").value;
    var div_error_url = document.getElementById("error-url");
    if (url === "" || /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(url)) {
        div_error_url.innerHTML = "";
        return true;
    } else {
        div_error_url.innerHTML = "La URL no tiene el formato correcto";
        div_error_url.className = "text-danger small mt-1";
        return false;
    }
}

function validar_aficiones() {
    var listaAficiones = document.getElementById("lista-aficiones").getElementsByTagName("li");
    var div_error_aficiones = document.getElementById("error-aficiones");
    if (listaAficiones.length >= 2) {
        div_error_aficiones.innerHTML = "";
        return true;
    } else {
        div_error_aficiones.innerHTML = "Debe seleccionar al menos 2 aficiones";
        div_error_aficiones.className = "text-danger small mt-1";
        return false;
    }
}

function agregarAficion() {
    var input_aficion = document.getElementById("input-aficiones");
    var listaAficiones = document.getElementById("lista-aficiones");
    var div_error_aficiones = document.getElementById("error-aficiones");
    var aficion = input_aficion.value;
    if (aficion !== "") {
        var li = document.createElement("li");
        li.textContent = aficion;
        listaAficiones.appendChild(li);
        input_aficion.value = "";
        div_error_aficiones.innerHTML = "";
    } else {
        div_error_aficiones.innerHTML = "Debe ingresar una afición";
        div_error_aficiones.className = "text-danger small mt-1";
    }
}