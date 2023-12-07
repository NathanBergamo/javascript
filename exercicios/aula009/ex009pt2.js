var hora = 22
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 5){
    console.log('Bom Madrugada')
} else if(hora < 12){
    console.log('Bom dia')
} else if(hora < 18){
    console.log('Boa Tarde')
} else if(hora < 23){
    console.log('Boa Noite')
}
