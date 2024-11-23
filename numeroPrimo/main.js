entrada = document.getElementById("num")
btn = document.getElementById("btn")
salida = document.getElementById("resultado")


let numero = 0;
entrada.addEventListener("input",(evento)=>{

    numero = evento.target.value
})

function numeroPrimo(n){
    let esPrimo = false
    let cuenta = 0
    if(n==1){
        esPrimo= false
    }else{
        for(let i = 2; i<=n;i++){
            if(n%i==0){
                cuenta = cuenta + 1
            }

        }
        if(cuenta==1){
            esPrimo = true
        }else{
            esPrimo = false
        }
    }
    return esPrimo
}
btn.addEventListener("click",()=>{
    resultado = numeroPrimo(numero)
    let hijo = document.createElement("h3")
    if(resultado){
        // estoy creando un elemento
        
        hijo.innerHTML = `El número ${numero} es Primo`
        
    }else{
       
       hijo.innerHTML = "El número " + numero.toString() + " no es Primo"
    
    }
    salida.appendChild(hijo)
})
console.log(numeroPrimo(5))
console.log(numeroPrimo(9))
console.log(numeroPrimo(3))