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

function ex13() {
// Leia um vetor contendo letras de uma frase inclusive os espaços em branco.  
// Retire os espaços em branco do vetor e depois escreva o vetor resultante.
    let str = prompt('Insira uma frase')
    let vetor = str.split('')
    for(i=0;i<vetor.length;i++){
        if(vetor[i] == ' '){
            vetor[i] = ''
        }
    }
    vetor = vetor.join('')
    console.log(vetor)
}

function ex14() {
// Faça um programa em que troque todas as ocorrências de uma letra L1 pela 
// letra L2 em uma string. A string e as letras L1 e L2 devem ser fornecidas 
// pelo usuário.
    str = prompt('Insira uma string')
    l1 = prompt('Insira a LETRA (L1) que será substituida')
    l2 = prompt('Insira a LETRA (L2) que substituirá L1')
    novaStr = str.replaceAll(l1, l2)
    console.log(novaStr)
}

function ex15(){
// Leia a idade e o primeiro nome de 10 pessoas. Seu programa deve terminar 
// quando uma idade negativa for digitada. Ao terminar, seu programa deve 
// escrever o nome e a idade das pessoas mais jovens e mais velhas.
    let vetIDADE = []
    let vetNOME = []
    for(i=0;i<10;i++){
        vetIDADE[i] = Number(prompt(`IDADE [${i+1}]: `))
        if (vetIDADE[i] < 0){
            break;
        }
        vetNOME[i] = prompt(`NOME [${i+1}]: `)
    }
    let maisNovo1 = vetIDADE[0]
    let maisNovo2 = vetNOME[0]
    let maisVelho1 = vetIDADE[0]
    let maisVelho2 = vetNOME[0]

    for(i=0;i<vetIDADE.length;i++){
        if (maisNovo1 > vetIDADE[i] && vetIDADE[i] > 0 ){
            maisNovo1 = vetIDADE[i]
            maisNovo2 = vetNOME[i]
        }
        if (maisVelho1 < vetIDADE[i]){
            maisVelho1 = vetIDADE[i]
            maisVelho2 = vetNOME[i]
        }
    }

    if(vetIDADE.length < 1 || vetIDADE[0] < 0){
        console.log("Nenhum valor válido informado")
    }
    else{
        console.log(`Mais velho: ${maisVelho2} com ${maisVelho1} anos.`)
        console.log(`Mais novo: ${maisNovo2} com ${maisNovo1} anos.`)
    }
}

function ex16() {
// Receba  duas  frases  distintas  e  imprima  de  maneira  invertida, 
// trocando as letras A por '*'.
    let str2 = prompt("Frase 2")
    let str1 = prompt("Frase 1")
    let nova_str1 = str1.split('').reverse().join('').replace(/A/g, '*').replace(/a/g, '*')
    let nova_str2 = str2.split('').reverse().join('').replace(/A/g, '*').replace(/a/g, '*')
    console.log(nova_str1)
    console.log(nova_str2)
}

function ex17() {
// Receba uma string S e inteiros não-negativos I e J e imprima o 
// segmento S[I..J].
    let s = prompt("Frase 1")
    let i = Number(prompt("Insira I"))
    let j = Number(prompt("Insira J"))
    let text = s.slice(i,j+1)
    console.log(text)
}

function ex18() {
// Receba  do  usuário  uma  string  S,  um  caractere  C,  e  uma posição I e 
// devolve o índice da primeira posição da string onde foi encontrado o caractere 
// C. A procura deve começar a partir da posição I.
    let s = prompt("String")
    let caractere = prompt("Caractere")
    let posicao = Number(prompt("Posição"))
    text = s.indexOf(caractere, posicao)
    if(text == -1){
        console.log("Caractere não encontrado")
    }
    else{
        console.log(`Caracter encontrado na posição ${text}`)
    }
}

function ex19() {
// Leia duas palavras e diga qual delas vem primeiro na ordem alfabética. 
// Dica: ‘a’ é menor do que ‘b’.
    let str1 = prompt("String 1")
    let str2 = prompt("String 2")
    let i = 0
    letra1 = str1[0]
    letra2 = str2[0]
    if(letra1<letra2){
        console.log(`A palavra que vem prieiro na ordem alfabética é ${str1}`)
    }
    else if(letra1>letra2){
        console.log(`A palavra que vem prieiro na ordem alfabética é ${strs}`)
    }
    else if(letra1 == letra2){ 
        do{
            i++
            letra1 = str1[i]
            letra2 = str2[i] 
            if(letra1<letra2){
                console.log(`A palavra que vem prieiro na ordem alfabética é '${str1}'`)
            }
            else if(letra1>letra2){
                console.log(`A palavra que vem prieiro na ordem alfabética é '${str2}'`)
            }
        }while(str1[i] == str2[i])
    }
}

function ex20() {
// O Código de César é uma das mais simples e conhecidas técnicas de criptografia. 
// É um tipo de substituição na qual cada letra do texto é substituída por outra, 
// que se apresenta no alfabeto abaixo dela um nu´mero fixo de vezes. Por exemplo, 
// com uma troca de três posições, ‘A’ seria substituído por ‘D’, ‘B’ se tornaria 
// ‘E’, e assim por diante. Faça uso desse Código de César (3 posições), entre com 
// uma string e retorne a string codificada. Exemplo:
// String: a ligeira raposa marrom saltou sobre o cachorro cansado
// Nova string: D OLJHLUD UDSRVD PDUURP VDOWRX VREUH R FDFKRUUR FDQVDGR
    let str = prompt("String").toUpperCase()
    let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let aux = ''
    let novastr = ''
    let j = 0
    for(i=0;i<str.length;i++){
        while(str[i] != alfabeto[j]){
            j++
        }
        aux = alfabeto[j+3]
        novastr = novastr + aux    
    }
    console.log(novastr)
}

function ex21() {
// Dada uma string, diga se ela é um palíndromo ou não. Lembrando que um palíndromo é uma palavra que tenha a 
// propriedade de poder ser lida tanto da direita para a esquerda como da esquerda para a direita. Exemplo:
// ovo
// arara
// Socorram-me, subi no ônibus em Marrocos. 
// Anotaram a data da maratona
    let nova_str = str.split('').reverse().join('')
    if(str == nova_str){
        console.log("É um palíndromo")
    }
    else{
        console.log("Não é um palíndromo")
    }
}

function ex22() {
// Leia duas strings fornecidas pelo usuário e verifique se a segunda string 
// lida esta contida no final da primeira, retornando o resultado da verificação.
    let str1 = prompt("String 1")
    let str2 = prompt("String 2")
    if(str1.includes(str2)){
        console.log(`${str2} esta contido em ${str1}`)
    }
    else{
        console.log("Não esta contido")
    }
}

function ex23() {
// Leia duas strings, str1 e str2, e um valor inteiro positivo N. 
// Concatene não mais que N caracteres da string str2 à string str1 e termine str1 com ‘\0’.
    let str1 = prompt("String 1")
    let str2 = prompt("String 2")
    let n = Number(prompt("N"))
    nova_str = str1+str2.slice(0,n)
    console.log(nova_str)
}

function ex24() {
// Leia duas cadeias de caracteres A e B. Determine quantas vezes a cadeia A ocorre na cadeia B.
    let str1 = prompt("String 1")
    let str2 = prompt("String 2")
    let x1 = str1.split('')
    let x2 = str2.split('')
    console.log(x1)
    console.log(x2)
    let cont = 0
    for(i=0;i<x2.length;i++){
        for(j=0;j<x1.length;j++){
            if(x1[j] == x2[i]){
                cont++
            }
        }
    }
    console.log(cont)
}

function ex25() {
// Leia uma cadeia de caracteres no formato “DD/MM/AAAA” e copie o dia, mês e ano para 3 variáveis 
// inteiras. Antes disso, verifique se as barras estão no lugar certo, e se DD, MM e AAAA são numéricos.
    let str = prompt("String")
    let dia = ''
    let mes = ''
    let ano = ''
    if(str.indexOf('/') != 2 && str.lastIndexOf('/') != 5){
        console.log("As barras não estão no lugar correto. ")
    }
    else{
        str.split('')
        for(i=0;i<str.length;i++){
            if(str.includes('0','1','2','3','4','5','6','7','8','9')){
                if(i == 0 || i == 1){
                    dia = dia.concat(str[i])
                }
                else if(i == 3 || i == 4){
                    mes = mes.concat(str[i])
                }
                else if(i>5){
                    ano =ano.concat(str[i])
                }
            }
            else{
                console.log("Entre apenas com números e barras. ")
                break;
            }
        }
        console.log(`DIA: ${dia}\nMES: ${mes}\nANO: ${ano}`)
    }
}
