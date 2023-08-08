/* Como executar o JavaScript na Web.
Toda vez que for chama um elemento no HTML para executar um código no javacript no HTML
usamos a palavra "document".
Ex: HTML -> document.getElementById("Nome do 'ID' dentro do HTML")
vamos aprender como que funcionar esses códigos abaixo: 

getElementById -> Trás UM elemento pelo ID 

Vamos está apenas informar qual será o 'ID' no html que vamos executer um código.

getElementClassName -> Trás TODOS os elementos com essa classe

Nesse código, vamos está chamando todos os códigos no HTML pelo nome da Classe em que ele está usando.

getElementByTagName -> Trás TODOS os elementos com essa TAG

Com esse códigos, vamos está chamando todos os elementos que tem a mesma tag.
Exemplo, se tu quer chama a Tag "p" (Paragrafo), ele vamos está executando o código em todos os paragrafos no seu HTMl

getElementByName -> Trás Todos os elementos com esse NAME

Não foi informado nas aulas anteriores, mas o Name, é uma forma de identificar uma tag no HTML.
 por exemplo, quando executamos um código no HTML e vamos classificar ele, no caso coloca uma classe.
 podemos usar a tag "name = "mussum"" e no javascript chama a pelo name usando o código "document.getElementByName"

querySelector -> Trás UM elemento, o PRIMEIRO que encontrar

Ele sempre chama o primeiro que aparece, mas se você quer executar um código expecífico no HTML devemos usar alguns lembretes das aulas passadas
por exemplo:
const element = document.querySelector(".mussum") = ao usar o "." antes de escrever o nome, tu está chamando uma classe no HTML.
Se usar "#" vou está chamando um ID.
Mas se eu quero chama um código que tenha a mesma classe, mas o primeiro é um paragrafo e o segundo é um botão,
devemos colocar o "." antes de colocar a classe. Exemplo: 
const element = document.querySlector("button.mussum")

querySelectorAll -> Trás TODOS os elementos que encontrar
 */



