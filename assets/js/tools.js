function limitChar(event, tipo, max) {
    let texto = event.target.value;
    let longitud = texto.length;
    if (longitud > max) {
        event.target.value = texto.substring(0, max);
    }
    if (tipo == "0") {
        //no especiales
        event.target.value = event.target.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ, ]/g,"");
    }
    if (tipo == "1") {
        //solo numeros
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
    if (tipo == "2") {
        //Correo
        event.target.value = event.target.value.replace(/[^a-zA-Z0-9@._-]/g, "");
    }
    if (tipo == "3") {
        //Solo letras
        event.target.value = event.target.value.replace(
        /[^a-zA-ZñÑáéíóúÁÉÍÓÚ, ]/g, "");
    }
    if (tipo == "4") {
        //RFC
        event.target.value = event.target.value.replace(/[^a-zA-Z0-9-&]/g, "");
    }
    if (tipo == "5") {
        //Dinero
        event.target.value = event.target.value.replace(/[^0-9.]/g, "");
    }
    if (tipo == "6") {
        //contraseña
        event.target.value = event.target.value.replace(/[^a-zA-Z0-9@._-]/g, "");
    }
    if (tipo == "7") {
        //sin espacios
        event.target.value = event.target.value.replace(/\s/g, "");
    }
}

module.exports= limitChar