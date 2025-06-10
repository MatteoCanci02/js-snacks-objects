console.log('snack-04')

const persona = [
    {
        nome: 'Claudio',
        cognome: 'Verdi',
        eta: '4',
    },
    {
        nome: 'Giovanni',
        cognome: 'Rossi',
        eta: '99',
    },
    {
        nome: 'Eleonora',
        cognome: 'Gialli',
        eta: '56',
    },
    {
        nome: 'Barbara',
        cognome: 'Bianchi',
        eta: '45',
    },
    {
        nome: 'Luca',
        cognome: 'Arancioni',
        eta: '15',
    },
    {
        nome: 'Franco',
        cognome: 'Marroni',
        eta: '17',
    },
    {
        nome: 'Marco',
        cognome: 'Neri',
        eta: '18',
    },
    {
        nome: 'Francesca',
        cognome: 'Amaranti',
        eta: '20',
    },
    {
        nome: 'Antonio',
        cognome: 'Grigi',
        eta: '87',
    },
    {
        nome: 'Paola',
        cognome: 'Ori',
        eta: '23',
    },
]

const patenti = []

for (let i = 0; i < persona.length; i++) {
    const elementoCorrente = persona[i]
    console.log(i, elementoCorrente)

    if (elementoCorrente.eta >= 18) {
        patenti.push(`${elementoCorrente.nome}  ${elementoCorrente.cognome}  può guidare`)
    } else{
        patenti.push(`${elementoCorrente.nome}  ${elementoCorrente.cognome}  non può guidare`)
    }
}

console.log(patenti)







