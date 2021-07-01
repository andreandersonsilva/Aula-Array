var valores = [8,1,7,4,2,9]
valores.sort()
//Imprimindo na sequência sem formatação, de forma simples
//console.log(valores)

//Imprimindo os valores com exemplo de informar as posições
//e valores utilizando o FOR
//for(var val = 0;val<valores.length;val++){
//    console.log(`A posição ${val} tem o valor ${valores[val]}`)
//}

for(var val in valores){
    console.log(`A posição ${val} tem o valor ${valores[val]}`)
}