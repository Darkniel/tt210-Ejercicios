const entrada = document.getElementById("entradapar")
const btn = document.getElementById("btnpar")
const salida = document.getElementById("salida")

let numero
entrada.addEventListener("input",(evento)=>{
    console.log(evento.target.value)
     numero = evento.target.value
})

btn.addEventListener("click",()=>{
     if(numero%2==0){
         // estoy creando un elemento
         let hijo = document.createElement("h3")
         hijo.innerHTML = `El número ${numero} es Par`
     }else{
        let hijo = document.createElement("h3")
        hijo.innerHTML = "El número " + numero.toString() + " no es Par"
        salida.appendChild(hijo)
     }
})