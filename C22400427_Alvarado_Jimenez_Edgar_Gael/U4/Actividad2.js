
function Act2ejercicio1(){
    let n1 = prompt("Teclea un numero")
    n1= Math.random()*n1
    
    let n2 = prompt("Teclea un numero")
    n2 = Math.random() * n2
    
    if(n1===n2){
        console.log("los numeros son iguales")
    } else if(n1>n2){
        console.log("n1 es mayor",n1)
    } else {
        console.log("n2 es mayor",n2)
        
    }
}
//Act2ejercicio1()

function Act2Ejercicio2() {
 
    let numeroAleatorio = Math.floor(Math.random() * 9) + 2;

    
    let resultadoTabla = "Tabla de multiplicar del " + numeroAleatorio + ":\n\n";

    for (let i = 1; i <= 10; i++) {
        let multiplicacion = numeroAleatorio * i;
        resultadoTabla += numeroAleatorio + " x " + i + " = " + multiplicacion + "\n";
    }
  
    console.log(resultadoTabla);
   
}

Act2Ejercicio2()

function Act2ejercicio3(){
    let n5 = []
    let par = 0
    let impar = 0

   
    for(let i = 1; i <= 10; i++){
        n5[i] = Number(prompt("Dame un número entre el 1 al 100"));
    }   

   
    for(let i = 1; i < n5.length; i++){
        if (n5[i] % 2 === 0) {
            par++;  
        } else {
            impar++; 
        }
    }
    

    console.log("Total de números pares: " + par);
    console.log("Total de números impares: " + impar);
}
 //Act2ejercicio3()

