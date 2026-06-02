// EJERCICIO 1
function esPalindromo() {

    let texto = prompt("Ingrese una palabra o frase:");

    let cadena = texto
        .toLowerCase()
        .replace(/\s/g, "")
        .replace(/[^\w]/g, "");

    let invertida = cadena
        .split("")
        .reverse()
        .join("");

    if (cadena === invertida) {
        alert("Es un palíndromo");
    } else {
        alert("No es un palíndromo");
    }
}


// EJERCICIO 2
function numeroMayor() {

    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (num1 > num2) {
        alert("El número mayor es: " + num1);
    }
    else if (num2 > num1) {
        alert("El número mayor es: " + num2);
    }
    else {
        alert("Los números son iguales");
    }
}


// EJERCICIO 3
function mostrarVocales() {

    let frase = prompt("Ingrese una frase:");

    let vocales = frase.match(/[aeiouáéíóú]/gi);

    if (vocales) {
        alert("Las vocales encontradas son:\n" + vocales.join(" - "));
    }
    else {
        alert("No se encontraron vocales");
    }
}


// EJERCICIO 4
function contarVocales() {

    let frase = prompt("Ingrese una frase:")
        .toLowerCase();

    let contador = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };

    for (let letra of frase) {

        if (contador.hasOwnProperty(letra)) {
            contador[letra]++;
        }

    }

    alert(
        "Cantidad de vocales:\n\n" +
        "A = " + contador.a + "\n" +
        "E = " + contador.e + "\n" +
        "I = " + contador.i + "\n" +
        "O = " + contador.o + "\n" +
        "U = " + contador.u
    );
}
// ==========================
// AJAX 1
// Mostrar URL por defecto
// ==========================
window.onload = function () {

    document.getElementById("recurso").value =
        window.location.href;

};


// ==========================
// AJAX 2, 3, 4 y 5
// ==========================
function mostrarContenido() {

    let url =
        document.getElementById("recurso").value;

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        actualizarEstado(xhr);

        if (xhr.readyState === 4) {

            document.getElementById("contenidos")
                .textContent = xhr.responseText;

            document.getElementById("cabeceras")
                .textContent =
                xhr.getAllResponseHeaders();

            document.getElementById("codigo")
                .textContent =
                xhr.status + " - " + xhr.statusText;
        }

    };

    xhr.open("GET", url, true);

    xhr.send();
}


// ==========================
// Mostrar estado AJAX
// ==========================
function actualizarEstado(xhr) {

    let estado = "";

    switch (xhr.readyState) {

        case 0:
            estado = "No iniciada";
            break;

        case 1:
            estado = "Conexión establecida";
            break;

        case 2:
            estado = "Solicitud recibida";
            break;

        case 3:
            estado = "Procesando";
            break;

        case 4:
            estado = "Completada";
            break;
    }

    document.getElementById("estados")
        .textContent = estado;
}