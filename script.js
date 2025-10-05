function odswiezanie() {
    odswiezanieData();
    odswiezanieGodzina();
}

function odswiezanieData() {
    const dzisiaj = new Date();

    const dzien = dzisiaj.getDate();
    const miesiac = dzisiaj.getMonth();
    const rok = dzisiaj.getFullYear();

    document.getElementById("data").innerHTML =
        dzien +
        "." +
        miesiac +
        "." +
        rok;

    setTimeout("odswiezanieData()", 1000);
}

function odswiezanieGodzina() {
    const teraz = new Date();

    let godzina = teraz.getHours();
    if (godzina < 10) godzina = "0" + godzina;

    let minuta = teraz.getMinutes();
    if (minuta < 10) minuta = "0" + minuta;

    let sekunda = teraz.getSeconds();
    if (sekunda < 10) sekunda = "0" + sekunda;

    document.getElementById("godzina").innerHTML =
        godzina +
        ":" +
        minuta +
        ":" +
        sekunda;

    setTimeout("odswiezanieGodzina()", 1000);
}