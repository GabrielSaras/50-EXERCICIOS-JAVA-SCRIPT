/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes: 
             25058772-2-1 - Gabriel Saras
             25161131-2-2 - Matheus Ricardo Rocha
             25127228-2-3 - Kaio Eduardo Carvalho O.D
             25270134-2-4 - Stefany Mario Moreira
             25356515-2-5 - Vanessa Cristina de Souza 
Data: 04 de Abril de 2026
Descritivo:21. Crie uma função `soma(a, b)` que retorne a soma de dois números .
*******************************************************************************/
const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  //=================inicio=================

  // Solicitar os números ao usuário
  const num1 = parseFloat(await rl.question("Digite o primeiro número: "));
  // Solicitar os números ao usuário
  const num2 = parseFloat(await rl.question("Digite o segundo número: "));

  const resultado = soma(num1, num2);// Chamar a função soma e exibir o resultado
  console.log(`A soma de ${num1} e ${num2} é: ${resultado}`);// mostrar o resultado da soma

  function soma(a, b) {// Definir a função soma que recebe dois parâmetros
    return a + b;// Retornar a soma dos dois números
  }

  rl.close();
}
main();

//================================================================================
//              DOCUMENTAÇÃO DO CÓDIGO – FUNÇÃO DE SOMA
//================================================================================

//como e  xecutar
// 1. Certifique-se de ter o Node.js instalado em seu computador.
// 2. Salve o código acima em um arquivo chamado "exercicios021.js".
// 3. Abra o terminal ou prompt de comando e navegue até o diretório onde o arquivo está salvo.
// 4. Execute o programa usando o comando: node exercicios021.js
// 5. Siga as instruções no terminal para inserir os números e ver o resultado da soma. 
/*


Neste código utilizamos a estrutura base do JavaScript em Node.js com o módulo 
readline, permitindo a interação com o usuário através do terminal.

Foram utilizadas constantes ('const') para declarar variáveis, garantindo que 
os valores atribuídos não sejam alterados durante a execução do programa.

O programa solicita ao usuário dois números utilizando o método rl.question, 
que retorna os valores no formato de string (texto).

Para permitir operações matemáticas, os valores informados são convertidos para 
número utilizando a função parseFloat, sendo então armazenados nas variáveis 
'num1' e 'num2'.

Em seguida, foi definida a função 'soma(a, b)', responsável por receber dois 
parâmetros e retornar a soma entre eles.

A função é chamada e o resultado é armazenado na variável 'resultado'.

Por fim, utilizamos o comando console.log() para exibir o resultado da soma 
no terminal de forma formatada.

Após a execução, a interface de leitura é encerrada com rl.close().

/*
Percepção:

Foi possível perceber que, diferente da linguagem C, onde o código é mais 
estruturado e dividido em etapas (declaração de variáveis, entrada, saída 
e lógica), no JavaScript essas operações podem ser realizadas de forma mais 
compacta e integrada, o que pode causar certa confusão no início, mas torna 
o código mais simples após o entendimento.

/*
--------------------------------------------------------------------------------
OBSERVAÇÃO SOBRE ORGANIZAÇÃO DO CÓDIGO (COM EXEMPLOS)
--------------------------------------------------------------------------------

Foi possível observar que, diferente da linguagem C, onde o código é 
organizado em etapas separadas, no JavaScript essas operações podem ser 
realizadas de forma mais compacta.

Exemplo na linguagem C (estrutura mais separada):

#include <stdio.h>

int main() {
    int num;

    printf("Digite um número: ");
    scanf("%d", &num);

    printf("Número digitado: %d", num);
}

Exemplo em JavaScript (forma compacta):

const num = Number(await rl.question("Digite um número: "));
console.log(num);

Exemplo em JavaScript (forma organizada, semelhante ao C):

let input;
let num;

input = await rl.question("Digite um número: ");
num = Number(input);

console.log(num);

Dessa forma, percebe-se que o JavaScript permite escrever o código de forma 
mais resumida, porém também pode ser estruturado de maneira mais organizada 
para facilitar o entendimento, principalmente no início do aprendizado.

--------------------------------------------------------------------------------
*/


