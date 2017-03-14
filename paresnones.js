
function paresynones (){

    
    
document.write(" vamos a jugar a pares y nones ");
var  jugador1 = prompt(" <br> Elije un numero del 1 al 5 ");
document.write(" <br> El jugador 1  ha sacado " + jugador1);
    
var jugador2 = prompt(" <br> Elije un numero del 1 al 5 ");
document.write(" <br> El jugador 2 ha sacado " + jugador2);
jugador1 = Number(jugador1);
jugador2 = Number(jugador2);
var suma = jugador1 + jugador2;
document.write(" <br> La suma de jugadas es = " + suma);
if(suma % 2 === 0){
    document.write(" <br> El jugador 2 ha ganado ");
}
else{
    document.write(" <br> El jugador 1 ha ganado ");
}
    //final de funcion pares y nones 
}