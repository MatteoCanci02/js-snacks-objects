console.log('Snack-01')

const automobili = [
    {
        marca: 'Ford',
        modello: 'Fiesta',
        alimentazione: 'Metano',
    },
    {
        marca: 'Fiat',
        modello: 'Panda',
        alimentazione: 'Benzina',
    },
    {
        marca: 'Lamborghini',
        modello: 'Urus',
        alimentazione: 'Diesel',
    },
    {
        marca: 'Fiat',
        modello: 'Tipo',
        alimentazione: 'Benzina',
    },
    {
        marca: 'Audi',
        modello: 'A1',
        alimentazione: 'Diesel',
    },
    {
        marca: 'Lancia',
        modello: 'Y',
        alimentazione: 'Gpl',
    },
    {
        marca: 'Ford',
        modello: 'Kuga',
        alimentazione: 'Benzina',
    },
    {
        marca: 'Tesla',
        modello: 'Model-Y',
        alimentazione: 'Elettrico',
    },
    {
        marca: 'Peugeot',
        modello: '3008',
        alimentazione: 'Diesel',
    },
    {
        marca: 'Audi',
        modello: 'R8',
        alimentazione: 'Elettrico',
    },
]

const Benzina = []
const Diesel = []
const Altro = []

for(let i = 0; i < automobili.length; i++) {
    const elementoCorrente = automobili[i]
    // console.log(i, elementoCorrente)

    if (elementoCorrente.alimentazione === 'Benzina'){
        Benzina.push(elementoCorrente)
    } else if (elementoCorrente.alimentazione === 'Diesel'){
        Diesel.push(elementoCorrente)
    } else {
        Altro.push(elementoCorrente)
    }
}

console.log(Benzina)
console.log(Diesel)
console.log(Altro)


