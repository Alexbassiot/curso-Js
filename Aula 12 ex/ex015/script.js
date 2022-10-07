function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Erro ,Verifique os dados Digitados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')  
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criaca
                img.setAttribute('src','bebehomen.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovenhomen.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','homenadulto.png')
            } else { 
                //idoso
                img.setAttribute('src', 'idosohomen.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criaca
                img.setAttribute('src','bebemulher.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovemmulher.png')
                
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','mulheradulta.png')
            } else { 
                //idoso
                img.setAttribute('src','idosamulher.png')
            }

        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} idade ${idade} anos`
        res.appendChild(img)
    }
}