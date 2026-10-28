export class libro {
    constructor(nombre, color, autor, numPaginas, editorial, forrado, urlCover) {
        this.nombre = nombre;
        this.color = color;
        this.autor = autor;
        this.numPaginas = numPaginas;
        this.editorial = editorial;
        this.forrado = forrado;
        this.urlCover = urlCover;
    }
    //getter
    getNombre() {
        return this.nombre;
    }

    getColor() {
        return this.color;
    }

    getAutor() {
        return this.autor;
    }

    getNumPaginas() {
        return this.numPaginas;
    }

    getEditorial() {
        return this.editorial;
    }

    getForrado() {
        return this.forrado;
    }

    getUrlCover() {
        return this.urlCover;
    }

    //setter
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setColor(color) {
        this.color = color;
    }

    setAutor(autor) {
        this.autor = autor;
    }

    setNumPaginas(numPaginas) {
        this.numPaginas = numPaginas;
    }

    setEditorial(editorial) {
        this.editorial = editorial;
    }

    setForrado(forrado) {
        this.forrado = forrado;
    }

    setUrlCover(urlCover) {
        this.urlCover = urlCover;
    }

    comprar() {
        console.log(`Libro de aventuras del autor ${this.autor} comprado`);
    }

    toString() {
        console.log(`${this.nombre}-${this.autor}(${this.numPaginas})**${this.forrado}`);
    }
}