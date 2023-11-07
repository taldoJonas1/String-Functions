function ex1(){
// Calcule o comprimento de uma string (não use a função strlen).
    let input = prompt('Insira a string')
    let i = 0
    while(input[i] != undefined){
        i++
    }
    console.log(`Comprimento: ${i}`)
}


function ex2(){
// Leia um nome e imprima o nome somente se a primeira letra do nome for 
// ‘a’ (maiúscula ou minúscula).
    let input = prompt('Insira seu nome, ele só será impresso se começar com "A"').toUpperCase()
    if(input[0] == 'A'){
        console.log(input)
    }
}

function ex3(){
// Leia um nome e imprima as 4 primeiras letras do nome.
    let input = prompt('Insira seu nome')
    let answer = input.slice(0,4)
    console.log(answer)
}

function ex4(){
// Digite um nome, calcule e retorne quantas letras tem esse nome.
    let input = prompt('Insira seu nome')
    let text = input.split(' ')
    let answer = ''
    text.forEach(element => {
        answer = answer + element
    });
    console.log(input)
    console.log(answer.length)
}

function ex5(){
// Leia nome, sexo e idade. Se sexo for feminino e idade menor que 
// 25, imprime o nome da pessoa e a palavra “ACEITA”, caso contrário 
// imprimir “NÃO ACEITA”.
    let nome = prompt('Insira seu nome')
    let sexo = prompt('Insira seu sexo [F]eminino ou [M]asculino').toUpperCase()
    while(sexo.length > 1){
        sexo = prompt('Por favor, digite apenas uma letra (F ou M)').toUpperCase()
    }
    let idade = Number(prompt('Insira sua idade'))
    if(sexo == 'F'){
        if(idade < 25){
            console.log(`${nome} ACEITA`)
        }
    }
    else{
        console.log('NÃO ACEITA')
    }
}

function ex9(){
// Receba uma palavra e a imprima de trás-para-frente.
    let palavra = prompt('Insira uma palavra')
    let novaPalavra = ''
    for(i = palavra.length - 1; i > - 1; i--){
        novaPalavra += palavra[i]
    }
    console.log(novaPalavra)
}
