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
                img.setAttribute('src', 'fotos.masculinas/masculino-1ate6.jpg')
            } else if(idade >=7 && idade < 15){
                //adolescente
                 img.setAttribute('src', 'fotos.masculinas/masculino-7ate14.jpg')
            } else if(idade >=15 && idade <21){
                //jovem
                 img.setAttribute('src', 'fotos.masculinas/masculino-15ate20.jpg')
            } else if(idade >=21 && idade <35){
                //adulto
                 img.setAttribute('src', 'fotos.masculinas/masculino-21ate34.jpg')
            } else if(idade >= 35 && idade <60){
                //ainda aduto
                 img.setAttribute('src', 'fotos.masculinas/masculino-35ate59.jpg')
            } else if(idade >= 60 && idade <90){
                //idoso
                 img.setAttribute('src', 'fotos.masculinas/masculino-60ate90.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 7){
                img.setAttribute('src', 'fotos.femininas/feminino-1ate6.jpg')
                //crianca
            } else if(idade >=7 && idade < 15){
                img.setAttribute('src', 'fotos.femininas/feminino-7ate14.jpg')
                //adolescente
            } else if(idade >=15 && idade <21){
                img.setAttribute('src', 'fotos.femininas/feminino-15ate20.jpg')
                //jovem
            } else if(idade >=21 && idade <35){
                img.setAttribute('src', 'fotos.femininas/feminino-21ate34.jpg')
                //adulto
            } else if(idade >= 35 && idade <60){
                img.setAttribute('src', 'fotos.femininas/feminino-35ate59.jpg')
                //ainda aduto
            } else if(idade >= 60 && idade <90){
                img.setAttribute('src', 'fotos.femininas/feminino-60ate90.jpg')
                //idoso
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    } 
}