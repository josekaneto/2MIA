const somaNovo = (numero1, numero2) => {
    return (numero1 + numero2);  // retorna o resultado da operação.
}

console.log("A soma dos valores é ", somaNovo (15,20))

const parImpar = (numero) => {
    if(numero < 0){
        return "negativo"
    }    
    else if(numero == 0){
        return "Neutro"
    } 
    else if((numero % 2)==0){
        return "Par"
    }
    else if((numero % 2)==1){
        return "Impar"
    }   
}

console.log("O número é ",parImpar(-5))
console.log("O número é ",parImpar(0))
console.log("O número é ",parImpar(2))
console.log("O número é ",parImpar(5))

