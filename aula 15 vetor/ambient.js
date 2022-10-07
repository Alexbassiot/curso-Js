let num =[2,3,4,5,8]
num.push(1)
num.sort()
console.log(num)
    console.log(`o primeiro valo do vetor é${num[0]}`)
    console.log(`nosso vertor tem ${num.length} posicoes`)
   
   
    let pos = num.indexOf(2)
    if (pos == -1) {
        console.log(' O valor nao foi encontrado')

    } else {
        console.log(`o  o valor estar na posiçao ${pos}`)
    }
