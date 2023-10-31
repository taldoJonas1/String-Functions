let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length1 = text.length;
console.log(length1)
// output: 26
// lenght mostra o tamanho da string

let text2 = "Apple, Banana, Kiwi";
let part2 = text.slice(2, 13);
console.log(part2)
// output: ple, Banana
// slice reparte a string com .slice(start, end) start tem preferencia

let str3 = "Apple, Banana, Kiwi";
let part3 = str.substring(-10, 13); // = (0, 13)
console.log(part3)
// output: Apple, Banana 
// The difference is that start and end values less than 0 are treated as 0 in substring().

let str4 = "Apple, Banana, Kiwi";
let part4 = str1.substr(7, 10); // = .slice(7, 17)
console.log(part4)
// output: Banana, Ki
// substr começa a contar no primeiro número no parenteses e vai da até a soma com o segundo
// .substr(i, j) == .slice(i, i+j)

let text5 = "Please visit Microsoft and Microsoft!";
let newText5 = text2.replace("Microsoft", "W3Schools");
console.log(newText5)
// output: Please visit W3Schools and Microsoft!
// .replace(a, b)
// replace troca SOMENTE A PRIMEIRA APARIÇÃO de b por a
let text6 = "Please visit Microsoft!";
let newText6 = text.replace(/MICROSOFT/i, "W3Schools");
// output: Please visit W3Schools!
// a /i flag torna o termo insensitive, isso significa que a ou A são a mesma coisa
let text7 = "Please visit Microsoft and Microsoft!";
let newText7 = text.replace(/Microsoft/g, "W3Schools");
// output: Please visit W3Schools and W3Schools!
// a /g flag substitui TODAS AS APARIÇÕES de b por a

let text8 = "Hello";
let str8 = "World";
let newText8 = text8.concat(" ", str8);
console.log(newText8)
// output: Hello World
// text8.concat(' qualquer coisa ', str8) = Hello qualquer coisa World
// concatena duas strings

let text9 = "      Hello World!      ";
let newText9 = text1.trim();
console.log(newText9)
// output: Hello World!
// .trim() tira os whitespaces de ambos os lados
// .trimStart() tira os whitespaces do começo
// .trimEnd() tira os whitespaces do fim
