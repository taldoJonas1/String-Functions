function ex1() {
// Calcule o comprimento de uma string (não use a função strlen).
    let input = prompt('Insira a string')
    let i = 0
    while(input[i] != undefined){
        i++
    }
    console.log(`Comprimento: ${i}`)
}
    
    
function ex2() {
// Leia um nome e imprima o nome somente se a primeira letra do nome for 
// ‘a’ (maiúscula ou minúscula).
    let input = prompt('Insira seu nome, ele só será impresso se começar com "A"').toUpperCase()
    if(input[0] == 'A'){
        console.log(input)
    }
}
    
function ex3() {
// Leia um nome e imprima as 4 primeiras letras do nome.
    let input = prompt('Insira seu nome')
    let answer = input.slice(0,4)
    console.log(answer)
}
    
function ex4() {
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
    
function ex5() {
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

function ex6() {
// Compare duas strings (não use a função strcmp).
    let palavra1 = prompt('Insira uma palavra')
    let palavra2 = prompt('Insira uma palavra')
    if(palavra1 == palavra2){
        console.log('SÃO IGUAIS')
    }
    else{
        console.log('NÃO SÃO IGUAIS')
    }
}

function ex7(){
// Conte o número de 1s que aparecem em uma string.  Exemplo: “0011001” -> 3
    let string = prompt('Insira a string')
    let cont = 0
    for(i = 0; i < string.length; i++){
        if(string[i] == '1'){
            cont++
        }
    }
    console.log(cont)
}

function ex8() {
// Substitua as ocorrências de um caracter ‘0’ em uma string por outro caracter ‘1’.
    let string = prompt('Insira a string')
    let novaStr = string.replaceAll('0', '1')
    console.log(novaStr)
}
    
function ex9() {
// Receba uma palavra e a imprima de trás-para-frente.
    let palavra = prompt('Insira uma palavra')
    let novaPalavra = ''
    for(i = palavra.length - 1; i > - 1; i--){
        novaPalavra += palavra[i]
    }
    console.log(novaPalavra)
}

function ex10() {
// Receba do usuário uma string. O programa imprime a string sem suas vogais.
    let str = prompt('Insira uma palavra/frase')
    let novaStr = str.replaceAll('a', '').replaceAll('e', '')
    .replaceAll('i', '').replaceAll('o', '').replaceAll('u', '')
    console.log(novaStr)
}

function ex11() {
// Receba uma palavra e calcule quantas vogais (a, e, i, o, u) possui essa 
// palavra. Entre com um caracter (vogal ou consoante) e substitua todas 
// as vogais da palavra dada por esse caractere.
    let str = prompt('Insira uma string')
    let cont = 0
    for(i = 0; i , str.length; i++){
        if(str[i] == 'a', 'e', 'i', 'o', 'u'){
            cont++
        }
    }
    console.log(`NA STRING TINHAM ${cont} VOGAIS`)
    let letra = prompt('Insira UMA letra, essa letra substituirá todas as vogais')
    while(letra.length < 1 || letra.length > 1){
        letra = prompt('Insira UMA letra, essa letra substituirá todas as vogais')
    }
    let novaStr = str.replaceAll('a', letra).replaceAll('e', letra)
    .replaceAll('i', letra).replaceAll('o', letra).replaceAll('u', letra)
    console.log(novaStr)
}

function ex12() {
// Leia uma frase e conte quantos caracteres são espaços em brancos.   
    let str = prompt("Insira uma frase")
    let str2 = str.split(' ')
    let resposta = str2.length
    console.log(resposta - 1)
}
