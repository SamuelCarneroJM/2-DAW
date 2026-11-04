export class Figura {
    constructor(tipo) {
        this.x = 0;
        this.y = 0;
        this.tipo = tipo; // "K", "Q", "T", "A", "C" o "P"
    }

    moverA(x, y) {
        this.x = x;
        this.y = y;
    }
}