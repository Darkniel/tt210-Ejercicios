// let listaMercado = ["pasta","papa crialla","helado","papa","carne","pollo" ]

// console.log(listaMercado)
// console.log(listaMercado.length)

// listaMercado.push("costillas de cerdo")
// /*listaMercado.forEach((item,index)=>{
//     console.log(item+" "+index)

// })*/

// let fibo = [0,1,1,2,3,5,8,13,21]

// fiboNuevo = fibo.map(numero =>{

//     return numero*2

// })

// console.log(fibo)
// console.log(fiboNuevo)

let lubricante = "aceite"
let receta = "frito"
let tiempo = "3min"
let sal = "con"
console.log("conseguir un huevo")
console.log("conseguir una sarten")
console.log("aceite o mantequilla")
console.log("colocar la sarten en la estufa")
console.log("Encender la estufa a fuego medio")
if(lubricante == "aceite"){
    console.log("Añadir aceite a la sarten")
}else if (lubricante == "mantequilla"){
    console.log("Agragar mantequilla a la sarten")
}else{
    console.log("Apagar apagar la estufa y buscar aceite o mantequilla")
}
if(receta == "frito"){
    console.log("Añadir directo a lasarten")
}else if (receta == "revuelto"){
    console.log("Arevolver antes de añadir a la sarten")
}else{
    console.log("Apagar estufa no cocinar")
}
if(tiempo == "3min"){
    console.log("llema blanda")
}else if (receta == "4min"){
    console.log("llema dura")
}else{
    console.log("mas de 4min se quemo el huevo")
}
console.log("Sacar el huevo")
console.log("apagar la estufa")
if(sal == "con"){
    console.log("El huevo tiene sal")
}else{
    console.log("El huevo no tiene sal")
}
console.log("Disfrutar el huevo")