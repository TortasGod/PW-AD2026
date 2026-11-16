function Act3Ejercicio1() {
    let numero;
    let intentos = 0;
    let historial = "";

    do {
        numero = Math.floor(Math.random() * 6);
        intentos++;
        historial += "Intento " + intentos + ": Salió el " + numero + "\n";

    } while (numero !== 0);

    let mensajeFinal = historial + "Salió el 0 Se detuvo después de " + intentos + " intentos.";
    console.log(mensajeFinal);
}
//Act3Ejercicio1()

function Act3Ejercicio2() {
    let ventas;
    do {
        let entrada = prompt("Teclea el monto de las ventas del empleado entre $5,000 y $30,000:");
        ventas = parseFloat(entrada);

       
        if (isNaN(ventas) || ventas < 5000 || ventas > 30000) {
            console.log("ingresa un monto válido entre $5,000 y $30,000.");
        }
    } while (isNaN(ventas) || ventas < 5000 || ventas > 30000);

    let porcentajeComision = 0;
    let comisionTotal = 0;


    if (ventas < 10000) {
        porcentajeComision = 10;
        comisionTotal = ventas * 0.10;
    } else {
        porcentajeComision = 15;
        comisionTotal = ventas * 0.15;
    }

   
    let mensaje = "Resumen de Comisión:\n" +
        "• Ventas registradas: $" + ventas.toFixed(2) + "\n" +
        "• Comisión aplicada: " + porcentajeComision + "%\n" +
        "• Dinero a recibir por comisión: $" + comisionTotal.toFixed(2);

    console.log(mensaje);
}
Act3Ejercicio2()