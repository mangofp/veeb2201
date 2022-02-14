
const sisuElement = document.getElementById("sisu")

function valjastaYlesanne(ylesanne) {
   sisuElement.innerHTML += `
    <div>
        <div>${ylesanne}</div>
    </div>
    `
}

const ylesanded = [
    "Pese hambad",
    "Hommikvõimlemine",
    "Hommikusöök"
]
for (i = 0; i < ylesanded.length; i++) {
    const ylesanne = ylesanded[i]
    valjastaYlesanne(ylesanne)
}

