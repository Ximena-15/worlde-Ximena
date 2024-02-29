let vidas= 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

console.log ("RANDOM",[Math.floor(Math.random() * diccionario.length)])
console.log("adivina", palabra)

document.getElementById("guess-button").addEventListener("click", ()=>{
    const intento= leerIntento(); //\el algoritmo 
    if (palabra === intento){
        terminar("ganaste");
        //todo: mostrar mensaje
        //TODO: volver a empezar (reset tiene vidas, cambiar palabra)
        return;
    }
    //crear fila
    const row = document.createElement("div");
    row.className = "row";
    const grid = document.getElementById("grid");
    for (const i in intento){
        const spam = document.createElement("spam");
        spam.className ="letter";
        spam.innerText = (intento[i]);
        if (intento[i] === palabra[i]){
            spam.style.background = "green"
        }else if (palabra.includes(intento[i])){
        console.log (intento[i], "amarillo");
        spam.style.background = "yellow"
    }else{
        console.log (intento[i], "gris");
        spam.style.background = "grey"
        }
        row.appendChild(spam);
    }
    grid.appendChild(row)
    vidas--;
    if (!vidas){
        //todo: mostrar mensaje
        //TODO: volver a empezar (reset tiene vidas, cambiar palabra)
        //todo: desabilitar el boton 
        terminar("perdiste")
    }
});

function leerIntento(){
    const input = document.getElementById("guess-input");
    const valor = input.value.toUpperCase();
    return valor;   //mecanismo PARA LEER EL ALGORITMO`
}

function terminar(mensaje){
    let p= document.getElementById("guesses");
    p.innerHTML= "<h1>"+ mensaje +"<h1>";
}

/*let miVector = "hola mundo";

for (const i in miVector){
    console.log(i, miVector[i]);
}
let P= "APPLE";
let I= "ANGEL";
let vidas= 6;

for (i in I){

}*/

/*let i= 0
while(i<5){
    console.log("algo repetido en whil,", i)
    i++;

}**/ //while

//let miCadena = "hola";

/*for (const i in miCadena){
console.log(i,miCadena[i])
}*/ // for in

//for (const letra of miCadena) {
 /*   console.log(letra)
}
/*let miVector= ["a", "b", "c"] //2
for (let i= 0; i<3; i++){
    if (typeof miVector[i] === "string")
    console.log (i,  typeof miVector[i]);
} // for
miVector.forEach((element)=>{
console.log(i, element)
});/* //forEache
/*let b = "hola";
let miVector = [1, 2, 3, b]
miVector.push ('chau', 1);
console.log(miVector);*/ //vectores
