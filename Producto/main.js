entrada1 = document.getElementById("num1")
entrada2 = document.getElementById("num2")
btn = document.getElementById("btn")
salida = document.getElementById("salida")
let num1 = 0
let num2 = 0
// Capturar los numeros en el navegador
entrada1.addEventListener("input",(evento)=>{

    num1 = evento.target.value
}) 
entrada2.addEventListener("input",(evento)=>{

    num2 = evento.target.value
}) 
function producto(parametro1,parametro2){

    return parametro1*parametro2

}
// boton para realisar la opercion del producto cuando le doy click
btn.addEventListener("click",()=>{
    resultado = producto(num1,num2)
    let hijo = document.createElement("h3")
    hijo.innerHTML = `El resultado de ${num1} x ${num2} es ${resultado}`
    salida.appendChild(hijo)
})



