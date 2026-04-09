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
Data: 03 de Abril de 2026
Descritivo:11. Use um `for` para imprimir os números de 1 a 10 no console.
*******************************************************************************/
const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });


  for (let i = 1; i <= 10; i++) {
    console.log(i);// Imprime o valor de 'i' no console a cada iteração do laço nao dando um espaço entre os numeros e nova operação de console.log() para pular linha

    
    
  }
}
main();


//*================================================================
//                  DOCUMENTAÇÃO ADICIONAL
// ================================================================
/*
//================= COMO EXECUTAR NO TERMINAL==================== 
// 1. Salve o código em um arquivo chamado exercicios011.js
// 2. Abra o terminal e navegue até o diretório onde o arquivo está salvo
// 3. Execute o comando: node  node exercicios011.js
Funcionamento do código:

Foi utilizado o laço de repetição 'for', que permite executar um bloco de 
código várias vezes.

A estrutura do 'for' é composta por três partes dentro dos parênteses:

- Inicialização: utilizamos 'let i = 1', onde 'i' é a variável de controle 
  iniciando com valor 1.

- Condição: utilizamos 'i <= 10', que determina que o laço será executado 
  enquanto o valor de 'i' for menor ou igual a 10.

- Incremento: utilizamos 'i++', que incrementa o valor de 'i' em 1 a cada 
  repetição.

As três partes são separadas por ponto e vírgula dentro dos parênteses.

Dentro do bloco do 'for', utilizamos 'console.log(i)' para exibir os valores 
no terminal.
/*
================================================================================
PERCEPÇÃO DO DESENVOLVIMENTO
================================================================================

Durante a realização do exercício, foi possível compreender melhor o uso do 
laço de repetição 'for' para executar um bloco de código várias vezes.

Inicialmente, houve confusão na forma de escrever a estrutura, especialmente 
na comparação com a linguagem C, onde utilizamos 'int'. No JavaScript, foi 
compreendido que utilizamos 'let' para declarar a variável de controle.

Foi entendido corretamente que o 'for' precisa de três partes:
- inicialização (let i = 1)
- condição (i <= 10)
- incremento (i++)

Também foi possível compreender a diferença entre atribuição e incremento:
- Atribuição é utilizada para definir ou alterar o valor de uma variável.
- Incremento é utilizado para aumentar o valor da variável, normalmente em +1.

Também foi compreendido que o console.log() é utilizado para exibir os valores 
no terminal, sendo equivalente a um "print".

Como dificuldade, houve confusão em relação ao uso de ponto e vírgula, que no 
'for' não finaliza o comando, mas sim separa as partes da estrutura.

Ao final, foi possível perceber que, apesar das diferenças de sintaxe entre 
as linguagens, a lógica de repetição é a mesma, mudando apenas a forma de 
escrever o código.

================================================================================
*/


