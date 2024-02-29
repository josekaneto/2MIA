function escreverNoConsole(){
    console.log("Escrevendo no console - função normal\n")
}

escreverNoConsole()



const escreverNoConsoleVariacao = function(){
    console.log("Segundo exemplo - variacao do modo normal\n")
}

escreverNoConsoleVariacao()



const escreverComArrow = () => {
    console.log('Terceiro exemplo - Arrow function\n')
}

escreverComArrow()



const escreverComArrowParametro = (texto) => {
    console.log(texto + '\n')
}

escreverComArrowParametro('Quarto exemplo - Arrow function com parametro')



const somarDois = (numero1, numero2) => {
    console.log("A soma é "+(numero1+numero2) + "\n")
}

somarDois(10,10)



const varianteArrow = texto => console.log(texto + "\n")

varianteArrow("Quinto exemplo - variante Arrow function")




