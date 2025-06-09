console.log('Snack-02')
const parole = [prompt('scrivi una parola'),'pluto','Paperino','TOPOLINO','ciaO']

const parolaFormattata = []

for(let i = 0; i < parole.length; i++){
    const elementoCorrente = parole[i]
    // console.log(i, elementoCorrente)
    let primaLettera = elementoCorrente.charAt(0).toUpperCase()
    let resto = elementoCorrente.slice(1).toLowerCase()
    parolaFormattata.push(primaLettera + resto)
}

console.log(parolaFormattata)


