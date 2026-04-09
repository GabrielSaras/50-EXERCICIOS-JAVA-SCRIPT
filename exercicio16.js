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
Descritivo:16. Crie um loop que pare (`break`) quando encontrar o número 7 em uma contagem de 1 a 10
*******************************************************************************/
const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  //=====================LOOP COM BREAK====================

  for (let i = 1; i <= 10; i++) { // Loop de 1 a 10
    if (i === 7) { // Verifica se o número é 7
      console.log("Número 7 encontrado! Parando o loop.");//
      break;// Sai do loop quando encontrar o número 7
    }
    console.log(i);// Imprime o número atual
  }

  rl.close();// Fecha a interface de leitura
}
main();// Chama a função principal para executar o programa
 /*
================================================================================
DOCUMENTAÇÃO DO CÓDIGO – LOOP COM BREAK
================================================================================

// ======================COMO USAR NO TERMINAL====================
// 1. Salve o código em um arquivo chamado "exercicios016.js".
// 2. Abra o terminal e navegue até o diretório onde o arquivo está salvo.
// 3. Execute o comando "node exercicios016.js" para rodar o programa.


Neste código utilizamos a estrutura base do JavaScript em Node.js, com o uso 
do módulo readline para permitir a execução no terminal.

Foi criada uma função principal assíncrona 'main', responsável por executar 
todo o programa, além da criação da interface de entrada e saída com o usuário.

Em seguida, utilizamos um laço de repetição 'for' para percorrer os números 
de 1 a 10.

A estrutura do 'for' é composta por:
- Inicialização: 'let i = 1'
- Condição: 'i <= 10'
- Incremento: 'i++'

Dentro do loop, foi utilizada uma estrutura condicional 'if' para verificar 
quando o valor da variável 'i' é igual a 7.

Ao encontrar o número 7, o programa exibe a mensagem:
"Número 7 encontrado! Parando o loop."

Em seguida, o comando 'break' é utilizado para interromper imediatamente 
a execução do loop.

Caso a condição não seja atendida, os números são exibidos no terminal 
por meio do 'console.log()'.

Por fim, a interface de leitura é encerrada com 'rl.close()', finalizando 
a execução do programa.

================================================================================
*/