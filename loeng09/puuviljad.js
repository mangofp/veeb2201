let apelsin = {
    liik: "puuvili",
    nimi: "apelsin",
    varv: "orange",
    hinnang: 8,
    pilt: "./assets/apelsin.jpg"
}

let porgand = {
    liik: "juurvili",
    nimi: "porgand",
    varv: "orange",
    hinnang: 10,
    pilt: "./assets/porgand.jpg"
}

let banaan = {
    liik: "rohttaim",
    nimi: "banaan",
    varv: "yellow",
    hinnang: 7,
    pilt: "./assets/banaan.jpg"
}

let saadused = [ apelsin, porgand, banaan ]

let valjundElement = document.getElementById("valjund")
for (let i = 0; i < saadused.length; i++) {
    valjundElement.innerHTML += "<div>" + saadused[i].nimi + "</div>"
}