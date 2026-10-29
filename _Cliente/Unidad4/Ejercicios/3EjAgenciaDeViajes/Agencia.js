export class Viaje {
    // Ciudad: cadena
    // Pais: cadena (Italia, Albania, Croacia, Grecia…)
    // Precio: número (euros por persona)
    // Dias: entero
    // Valoracion: numero decimal entre 0 y 5
    // Etiquetas: array de cadenas (por ejemplo ["playa", "cultura","gastronomía"])
    // Vuelo incluido: booleano
    // Url foto: cadena url

    constructor(ciudad, pais, precio, dias, valoracion, etiquetas, vuelo, urlFoto) {
        this.ciudad = ciudad;
        this.pais = pais;
        this.precio = precio;
        this.dias = dias;
        this.valoracion = valoracion;
        this.etiquetas = etiquetas;
        this.vuelo = vuelo;
        this.urlFoto = urlFoto;
    }

    getCiudad() {
        return this.ciudad;
    }
    getPais() {
        return this.pais;
    }
    getPrecio() {
        return this.precio;
    }
    getDias() {
        return this.dias;
    }
    getValoracion() {
        return this.valoracion;
    }
    getEtiquetas() {
        return this.etiquetas;
    }
    getVuelo() {
        return this.vuelo;
    }
    getUrlFoto() {
        return this.urlFoto;
    }

    setCiudad(ciudad) {
        this.ciudad = ciudad;
    }
    setPais(pais) {
        this.pais = pais;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
    setDias(dias) {
        this.dias = dias;
    }
    setValoracion(valoracion) {
        this.valoracion = valoracion;
    }
    setEtiquetas(etiquetas) {
        this.etiquetas = etiquetas;
    }
    setVuelo(vuelo) {
        this.vuelo = vuelo;
    }
    setUrlFoto(urlFoto) {
        this.urlFoto = urlFoto;
    }

    // Reservar: función que mostrará por consola el mensaje "Viaje a XXX (PAÍS)
    // reservado por XXX€", usando template literals ${}

    reservar(pais, precio) {
        console.log(`Viaje a ${pais} reservado por ${precio}€`);
    }

    // toString: función que muestra ciudad en mayúsculas, país, días y precio, con este formato:
    // ROMA | Italia | 5 días | 450€
    toString() {
        console.log(`${this.ciudad.toUpperCase()} | ${this.pais} | ${this.dias} días | ${this.precio}€`);
    }

}