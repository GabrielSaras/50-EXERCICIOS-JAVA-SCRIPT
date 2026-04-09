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

Descritivo: Calcule a soma de todos os números de 1 a 100 usando um loop.
*******************************************************************************/

/*
  Como o código resolve o problema:
  Um loop "for" percorre todos os inteiros de 1 a 100, acumulando
  cada valor em uma variável "soma" que começa em 0.
  Ao final do loop, a variável contém o resultado da soma total.
  O resultado esperado é 5050 (fórmula de Gauss: n*(n+1)/2).
*/

// Variável acumuladora — começa em 0 e vai receber a soma de cada número
let soma = 0;

// Loop for com três partes:
//   let i = 1      → começa com i valendo 1
//   i <= 100       → continua enquanto i for menor ou igual a 100
//   i++            → incrementa i em 1 a cada repetição (i = i + 1)
for (let i = 1; i <= 100; i++) {

  // Adiciona o valor atual de "i" à variável "soma"
  // Equivale a: soma = soma + i
  soma += i;

  // Exemplo das primeiras iterações:
  //   i=1  → soma = 0 + 1 = 1
  //   i=2  → soma = 1 + 2 = 3
  //   i=3  → soma = 3 + 3 = 6
  //   ...
  //   i=100 → soma = 4950 + 100 = 5050
}

// Exibe o resultado final após o loop terminar
console.log(`A soma de todos os números de 1 a 100 é: ${soma}`);
// Resultado esperado: 5050
