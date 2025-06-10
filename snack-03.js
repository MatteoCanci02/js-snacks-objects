console.log('snack-03')

const animali = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi',
    },
    {
        nome: 'gallina',
        famiglia: 'fansianidi',
        classe: 'uccelli',
    },
]

const animaliMammiferi = []

for(let i = 0; i < animali.length; i++){
    const elementoCorrente = animali[i]
    console.log(i, elementoCorrente)
    if (elementoCorrente.classe === 'mammiferi'){
        animaliMammiferi.push(elementoCorrente)
    }
}

console.log(animaliMammiferi)


