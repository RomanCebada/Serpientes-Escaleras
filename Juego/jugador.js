class jugador{
    constructor(){
        this.posicion=0;
    }
    moverse(lanzar){
        this.posicion += lanzar;
        if(this.posicion>100){
            this.posicion=100;
        }
    }
    Ganar(){
        if(this.posicion==100){
            return`<div style="display: block;">Haz Ganado!!</div><br>`;
        }
    }
}