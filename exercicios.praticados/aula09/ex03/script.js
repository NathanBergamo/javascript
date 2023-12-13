function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 7){
                //crianca
            } else if(idade >=7 && idade < 15){
                //adolescente
            } else if(idade >=15 && idade <21){
                //jovem
            } else if(idade >=21 && idade <35){
                //adulto
            } else if(idade >= 35 && idade <60){
                //ainda aduto
            } else if(idade >= 60 && idade <90){
                //idoso
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 7){
                //crianca
            } else if(idade >=7 && idade < 15){
                //adolescente
            } else if(idade >=15 && idade <21){
                //jovem
            } else if(idade >=21 && idade <35){
                //adulto
            } else if(idade >= 35 && idade <60){
                //ainda aduto
            } else if(idade >= 60 && idade <90){
                //idoso
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    } 
}