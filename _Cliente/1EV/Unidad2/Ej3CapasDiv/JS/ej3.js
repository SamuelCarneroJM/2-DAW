function imprimirMeses() {
    let arrMeses = Array(
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
    );

    for (let i = 0; i < arrMeses.length; i++) {
        let mes = arrMeses[i];
        let meshtml = document.getElementById(mes);
        meshtml.innerHTML = "<tr>" + mes + "</tr>";

        meshtml.style.position = "absolute";
        meshtml.style.left = Math.random() * 800 + "px";
        meshtml.style.top = Math.random() * 200 + "px";
        meshtml.style.width = "80px";
        meshtml.style.height = "20px";
        meshtml.style.border = "2px solid green";
        meshtml.style.padding = "5px";

        let rojo = Math.random() * 256;
        let azul = Math.random() * 256;
        let verde = Math.random() * 256;
        meshtml.style.backgroundColor = "rgb(" + rojo + ", " + verde + ", " + azul + ")";
    }
}
imprimirMeses();

// setInterval(imprimirMeses, 10000);