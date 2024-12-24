// Recupere les elements du DOM

const touches = [...document.querySelectorAll(".button")];
const listesKeyCodes = touches.map(touche => touche.dataset.key )
const ecran = document.querySelector(".ecran")

document.addEventListener("keydown", (e) => {
    const valeur = e.keyCode.toString()
    calculer(valeur)
})

document.addEventListener("click", (e) => {
    const valeur = e.target.dataset.key
    calculer(valeur)
})

const calculer = (valeur) => {
    if(listesKeyCodes.includes(valeur)){
        switch(valeur){
            case "8":
                ecran.textContent = "";
                break;
            case '187':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listesKeyCodes.indexOf(valeur);
                const touche = touches[indexKeycode]
                ecran.textContent += touche.innerHTML
        }
    }
}

window.addEventListener("error", (e) => {
    alert("Une erreur est survenue dans votre calcul : " + e.message);
})