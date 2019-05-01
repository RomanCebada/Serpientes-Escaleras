var tablero1 = new tablero();
var player1 = new jugador();
var player2 = new jugador();
var d = new dado();

document.getElementById('pla1').addEventListener('click',procesop1);
function procesop1(){
    if(player1.posicion==100||player2.posicion==100){
        alert(`El juego ha terminado`);
    }
    else{
        let tiro =d.lanzar() ;
        player1.moverse(tiro);
        document.getElementById('pl1').innerHTML+=`<div style="display: block;">El numero del dado fue:${tiro}</div><br>`;
        document.getElementById('pl1').innerHTML+=`<div style="display: block;">Te encuentras en la casilla: ${player1.posicion}</div><br>`;
        document.getElementById('pl1').innerHTML+=tablero1.Escaleras(player1);
        document.getElementById('pl1').innerHTML+=tablero1.Serpientes(player1);
        document.getElementById('pl1').innerHTML+=player1.Ganar();
    }
}
document.getElementById('pla2').addEventListener('click',procesop2);
function procesop2(){
    if(player1.posicion==100||player2.posicion==100){
        alert(`el juego ha terminado`);
    }
    else{
        let tiro =d.lanzar() ;
        player2.moverse(tiro);
        document.getElementById('pl2').innerHTML+=`<div style="display: block;">El numero del dado fue: ${tiro}</div><br>`;
        document.getElementById('pl2').innerHTML+=`<div style="display: block;">Te encuentras en la casilla: ${player2.posicion}</div><br>`;
        document.getElementById('pl2').innerHTML+=tablero1.Escaleras(player2);
        document.getElementById('pl2').innerHTML+=tablero1.Serpientes(player2);
        document.getElementById('pl2').innerHTML+=player2.Ganar();    
    }    
} 