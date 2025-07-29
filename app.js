
let NumeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;
let maximosIntentos = 3;


function asignarTextoElement(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //console.log("intentos: "+ intentos);
   // console.log(listaNumerosSorteados);

    if(numeroDeUsuario === NumeroSecreto) {
        asignarTextoElement('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' } `);
        document.getElementById('reiniciar').removeAttribute('disabled');
   
    }else {
        // el usuario no acerto
        intentos++;
        if (intentos > maximosIntentos){
            asignarTextoElement('p', "Se acabaron los intentos");
            document.getElementById('reiniciar').removeAttribute('disabled');
        } 
        else {

            if (numeroDeUsuario > NumeroSecreto){
                asignarTextoElement('p', "El número secreto es menor");
        
            }  
            else {
                asignarTextoElement('p', "El número secreto es mayor");
            }
        }
        limpiarCaja();
    }

    return;
   
}




function limpiarCaja () {
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    console.log(`Nuevo número generado: ${numeroGenerado}`);
    console.log(`Lista de numero sorteado: ${listaNumerosSorteados}`);

    // si ya sorteamos todos los numeros
    
    if (listaNumerosSorteados.length == numeroMaximo){
            asignarTextoElement('p', 'Ya se sortearon todos los numeros posibles');
    }else {
        
        //Si el numero generado está incluido en la lista
         if (listaNumerosSorteados.includes (numeroGenerado)){
            return generarNumeroSecreto();

         } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
         }
     }
   
}

function  condicionesIniciales (){
    
    asignarTextoElement('h1', 'Juego del número secreto!');
    asignarTextoElement('p', `Indica un número del 1 al ${numeroMaximo}`);
    NumeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    // limpiar la caja 
    limpiarCaja();

    //indicar mensaje de intervalo de números
    condicionesIniciales();

    // generar el número aleatorio otra vez
   // intentos el número intentos
   //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
   

}

condicionesIniciales();
