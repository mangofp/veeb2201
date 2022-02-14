
const sisuElement = document.getElementById("sisu")

function valjastaYlesanne(ylesanne) {
    let kasTehtud = ""
    if (ylesanne.kasTehtud) {
        kasTehtud = 'class="tehtud"'
    }

    sisuElement.innerHTML += `
    <div>
        <div>Olulisus: ${ylesanne.olulisus}</div>
        <div ${kasTehtud}>${ylesanne.kirjeldus}</div>
    </div>
    `
}

const ylesanded = [
    {
        kirjeldus: "Pese hambad",
        kasTehtud: true,
        olulisus: 8
    },
    {
        kirjeldus: "Hommikvõimlemine",
        kasTehtud: true,
        olulisus: 7
    },
    {
        kirjeldus: "Hommikusöök",
        kasTehtud: false,
        olulisus: 8
    },
]
for (i = 0; i < ylesanded.length; i++) {
    const ylesanne = ylesanded[i]
    valjastaYlesanne(ylesanne)
}

