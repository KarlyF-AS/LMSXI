const palos = ["espadas", "copas", "bastos", "oros"]
let barajaEspañola = []
let mano = []


    for (let palo of palos){
        for(let numero =1; numero<=10; numer0++){
            if(numero===1){
                barajaEspañola.push(["As", palo])
            }else if (numero===8){
                barajaEspañola.push(["Sota", palo])
            }else if (numero===9){
                barajaEspañola,push(["Caballo", palo])
            }else if (numero===10){
                barajaEspañola,push(["Rey", palo])
            }else{
            barajaEspañola.push([String(numero),palo])
        }
    }
}
barajaEspañola.sort(()=>Math.random()-0.5)

console.log(barajaEspañola[6])

//for (declaracion; condicion; actualizacion)
    // for (let i=0; i < miArray.length; i++){
    //     miArray[i]="manzana"
    //     break;
    // }
    // console.log(miArray)
    
    // miArray.push([1,"espadas"])//añade elemento al final
// miArray.pop()//elimina elemento del final
// miArray.unshift([1, "espadas"])//añade un elemento al inicio
// miArray.shift()//elimina un elemento del final