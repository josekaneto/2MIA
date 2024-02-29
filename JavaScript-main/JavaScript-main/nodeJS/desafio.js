// DESAFIo

const parImpar = (numero) => {
    if(numero < 0){
        console.log(numero + " ,este valor é negativo")
    }    
    else if(numero == 0){
        console.log(numero + " ,este valor é neutro")
    } 
    else if((numero % 2)==0){
        console.log(numero + " ,este valor é par")
    }
    else if((numero % 2)==1){
        console.log(numero + " ,este valor é impar")
    }   


}

parImpar(2)