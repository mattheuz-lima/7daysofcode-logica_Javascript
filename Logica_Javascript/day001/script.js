/*
a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima
as informações de maneira correta, que faça sentido e sem erros:

*/
let tipoNumber = '20'
let tipoString = '30'

if (tipoNumber === tipoString) { //valor e tipo =

    console.log('As variáveis tipoNumber e tipoString possuem o mesmo valor e o mesmo tipo!')

}else if (String(tipoNumber) === tipoString) {
    console.log('As variáveis tipoNumber e tipoString possuem o mesmo valor com tipagem diferente') 
    // valor igual tipagem diferente

}else if (typeof(tipoNumber) === typeof(tipoString) && tipoNumber !== tipoString) {

    console.log('As variáveis tipoNumber e tipoString possuem a mesma tipagem com valores diferentes');

}else {console.log('As variáveis tipoNumber e tipoString possuem a tipagem e o valores difentes!')
    
}

//