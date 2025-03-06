let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//con esta función optimizamos codigo y podemos reutilizar la función 
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarUsuario(){
    /*se declara una variable y se le asigna el elemento id del imput html
    se convierte en int con el parseInt*/   
    let numeroDeUsuario = Number(document.getElementById("valorUsuario").value.trim());

    //se usa el === para comparar si las variables son del mismo tipo y valor
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        //al acertar habilitamos el boton reiniciar 
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número es menor");
        }
        else{
            asignarTextoElemento("p", "El número es mayor");
        }
        limpiarCaja();

    }
    intentos++; 
}

function limpiarCaja(){
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
}

function generarNumeroSecreto(){
    //Si el n generado está incluido en la lista hacemos una operación si no, hacemos otras
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles!");
    }
    else
    {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
}

function condicionesIniciales(){
    //invocando la función y dandole parametros
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Escoge un numero del 1 al ${numeroMaximo}` );

    //generando un nuevo número secreto aleatorio
    numeroSecreto = generarNumeroSecreto();

    //reiniciando el contador de los intentos
    intentos = 1;

}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();

    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    condicionesIniciales();

    //deshabilitar el boton reiniciar
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
condicionesIniciales(); 
