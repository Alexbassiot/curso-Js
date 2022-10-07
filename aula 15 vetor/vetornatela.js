let valores = [2,4,3,5,6,8,1]

/* primeira maneira
console.log(valores)

segunda maneira

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])

terceira maneira

for(let pos=0; pos < valores.length; pos++){
console.log(` a posiçao ${pos} tem o valor ${valores[pos]}`)

}
*/
// quarta maneira mais facil
for(let pos in valores) {
    console.log(`a posiçao ${pos} tem o valor ${valores[pos]}`)
}