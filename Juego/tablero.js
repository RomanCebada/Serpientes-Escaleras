class tablero{
    Serpientes(player){
        switch(player.posicion){
            case 38:
                player.posicion=20;
                return `<div style="display: block;">Caiste en una serpiente, ahora estas en la casilla ${player.posicion}</div><br>`;
                break;
            case 51:
                player.posicion=10
                return `<div style="display: block;">Caiste en una serpiente, ahora estas en la casilla ${player.posicion}</div><br>`;
                break;
            case 76:
                player.posicion=54
                return `<div style="display: block;">Caiste en una serpiente, ahora estas en la casilla ${player.posicion}</div><br>`;
                break;
            case 91:
                player.posicion=73
                return `<div style="display: block;">Caiste en una serpiente, ahora estas en la casilla ${player.posicion}</div><br>`;
                break;
            case 97:
                player.posicion=61;
                return `<div style="display: block;">Caiste en una serpiente, ahora estas en la casilla ${player.posicion}</div><br>`;
                break;
            default:
                return `<div style="display: block;">No has caido en serpiente, bien hecho</div><br>`;
                break;
        }
    }
    Escaleras(player){
        switch(player.posicion){
            case 5:
                player.posicion = 58;
                return `<div style="display: block;">Caiste en una escalera, ahora estas en la casilla ${player.posicion}</div><br>`;                
                break;
            case 14:
                player.posicion=49;
                return `<div style="display: block;">Caiste en una escalera, ahora estas en la casilla ${player.posicion}</div><br>`;                                
                break;
            case 53:
                player.posicion=72;
                return `<div style="display: block;">Caiste en una escalera, ahora estas en la casilla ${player.posicion}</div><br>`;                                
                break;
            case 64:
                player.posicion=83;
                return `<div style="display: block;">Caiste en una escalera, ahora estas en la casilla ${player.posicion}</div><br>`;                                
                break;
            default:
                return `<div style="display: block;">No has caido en escalera, suerte la proxima</div><br>`;
                break;
        }
    }
}