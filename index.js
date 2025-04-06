saludar("Karly" , 20);
function saludar(nombre,edad){
    console.log("Hola mi nombre es: " + nombre + " y tengo "+ edad + " añitos");
}

//Bucles while y for 
let contador = 0;
while (contador < 5){
    console.log("hola " + contador);
    contador = contador + 1;
}

for (let i = 10; i >= 0; i--){
   console.log("Éste es el hola número: " + i);
}

//Condicion de multiplicación
function multiplicar(num1, num2){
    let resultado = num1 * num2;
    return resultado;
}
console.log(multiplicar (2,5));

//Arrays
let miArreglo = ["Tato", "Figue", "Saray", "Karly"];

for (let i = 0; i < 4; i++){
console.log("Accediendo al indice: " + i);
    let mostrar = miArreglo[i]
    console.log(mostrar)

}
//Objetos
let persona ={
    nombre : "Karly",
    edad : 20,
    femenino : true
};
console.log(persona)

//Funciones
function saludar(){
    alert("Holiss")
}
let pedirPizza = confirm("¿Quieres pizza?");
if(pedirPizza){
    alert("¡Pizza en camino!");
}else{
    alert("Bueno, más para mi.");
}