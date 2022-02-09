let apelsin = {
    liik: "puuvili",
    nimi: "apelsin",
    varv: "orange",
    hinnang: 8,
    pilt: "./assets/apelsin.jpg",
    kirjeldus: "dasdfasdfasdf"
}

let porgand = {
    liik: "juurvili",
    nimi: "porgand",
    varv: "orange",
    hinnang: 10,
    pilt: "./assets/porgand.jpg",
    kirjeldus: "dasdfasdfasdf"
}

let banaan = {
    liik: "rohttaim",
    nimi: "banaan",
    varv: "yellow",
    hinnang: 7,
    pilt: "./assets/banaan.png",
    kirjeldus: "dasdfasdfasdf"
}

let saadused = [ apelsin, porgand, banaan ]

function looPuuviljaHTML(puuvili) {
    return `
    <div class="col card">
        <img class="card-img-top" src="${puuvili.pilt}"
        <div class="card-body">
            <div class="card-title">${puuvili.nimi}</div>
            <div class="card-text">
                <p>
                Liik: ${puuvili.liik}, Hinnang: ${puuvili.hinnang}
                </p>
                <div>
                    ${puuvili.kirjeldus}
                </div>
            </div>
        </div>
    </div>
    `
}

let valjundElement = document.getElementById("valjund")
for (let i = 0; i < saadused.length; i++) {
    valjundElement.innerHTML += looPuuviljaHTML(saadused[i])
}