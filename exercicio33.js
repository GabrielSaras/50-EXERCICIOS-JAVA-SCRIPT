/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Flores
Turma: ADS3A
Componentes:
Gabriel Saras -	25058772-2  
Vanessa C. Souza -	25356515-2  
Stefany M. Moreira -	25270134-2  
Kaio Eduardo -	25127228-2  
Matheus R. Rocha -	25161131-2  

Descritivo: Use .map() para dobrar todos os valores de um array numérico.
*******************************************************************************/

/*
  Como o código resolve o problema:
  O método .map() percorre cada elemento do array original e aplica
  uma função de transformação em cada um, retornando um NOVO array
  com os resultados — sem modificar o array original.
  Aqui, a função dobra cada número multiplicando-o por 2.
*/

// Array original com os números que serão dobrados
// Este array NÃO será modificado — .map() cria um novo array
const numerosOriginais = [1, 2, 3, 4, 5, 10, 15, 20];

// .map() percorre cada elemento do array e aplica a função passada
// A arrow function recebe cada elemento como "numero" e retorna numero * 2
// Resultado: um NOVO array onde cada valor foi multiplicado por 2
const numerosDobrados = numerosOriginais.map((numero) => numero * 2);
// Passo a passo do .map():
//   numero=1  → 1 * 2 = 2
//   numero=2  → 2 * 2 = 4
//   numero=3  → 3 * 2 = 6
//   numero=4  → 4 * 2 = 8
//   numero=5  → 5 * 2 = 10
//   numero=10 → 10 * 2 = 20
//   numero=15 → 15 * 2 = 30
//   numero=20 → 20 * 2 = 40

// Exibe o array original (permanece inalterado)
console.log("Array original:   ", numerosOriginais);
// Saída: [1, 2, 3, 4, 5, 10, 15, 20]

// Exibe o novo array com os valores dobrados
console.log("Array dobrado:    ", numerosDobrados);
// Saída: [2, 4, 6, 8, 10, 20, 30, 40]
