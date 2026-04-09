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
Descritivo: 1. Crie um programa que verifique se um número é par ou ímpar.
******************************************************************************/
/**====================ESTRUTURA BASE========================= */
// Importa o módulo readline do Node.js com suporte a promises
const readline = require("readline/promises");

// Cria uma função assíncrona para usar await
async function main() {

  // Cria a interface de leitura e escrita no terminal
  const rl = readline.createInterface({
    input: process.stdin,   // Entrada do teclado
    output: process.stdout, // Saída no terminal
  });
  /**==============INICIO DOCODIGO===========================
   * 
   */
  // Pede ao usuário para digitar um número
  const input = await rl.question("Digite um número: ");
  // Converte a resposta (que é string) para número
  const numero = Number(input);

  // Verifica se o valor digitado não é um número
  if (isNaN(numero)) {
    console.log("Isso não é um número válido!");
  }
  // Verifica se o número é divisível por 2 (par)
  else if (numero % 2 === 0) {
    console.log(`O número ${numero} é PAR.`);
  }
  // Se não for par, então é ímpar
  else {
    console.log(`O número ${numero} é ÍMPAR.`);
  }

  // Fecha a interface de leitura para o programa terminar
  rl.close();
}

// Chama a função principal
main();



/*
================================================================================
DOCUMENTAÇÃO TÉCNICA DO CÓDIGO – VERIFICAÇÃO DE NÚMERO PAR/ÍMPAR
================================================================================
/*=====================COMO EXECUTAR NO TERMINAL===================
1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Salve o código acima em um arquivo chamado 'exercicio01.js'.
3. Abra o terminal e navegue até o diretório onde o arquivo está salvo.
4. Execute o comando: node exercicio01.js
5. Siga as instruções no terminal para digitar um número e verifique se é par ou ímpar.
forma de executar no terminal arquivo node exercicio01.js  =copiar e colar no terminal ****/
/*1. Estrutura Base
- Iniciamos o programa com a estrutura base do JavaScript usando Node.js,
  importando o módulo 'readline/promises' para permitir a leitura de dados
  do usuário via terminal.

2. Entrada de Dados
- Criamos uma interface de leitura (rl) e solicitamos ao usuário que digite
  um número.
- A entrada é armazenada na constante 'input' como string e convertida em
  número na constante 'numero'.

3. Condicional para Par e Ímpar
- Utilizamos uma estrutura condicional if...else if...else para definir se
  o número é par ou ímpar:
    a) if (isNaN(numero)) → verifica se o valor digitado não é um número.
    b) else if (numero % 2 === 0) → verifica se o número é par.
       - A expressão 'numero % 2 === 0' significa: 
         "O resto da divisão de numero por 2 é igual a zero?"
    c) else → caso não seja par nem inválido, o número é ímpar.

4. Fechamento da Interface
- Chamamos rl.close() para encerrar a interface de leitura e finalizar o programa.

================================================================================
ADICIONAIS / NÍVEL DE DIFICULDADE/IMPLEMENTAÇÕES FUTURAS 
================================================================================
- Nível de prática em JavaScript: baixa a intermediária (sem experiência em Java)
- Dificuldades enfrentadas: erros ao nomear pastas e arquivos causaram mensagens
  de "MODULE_NOT_FOUND".

- Melhorias percebidas: a adição de um loop permite ao usuário digitar múltiplos
  números sem reiniciar o programa, aumentando a interatividade.
  do...while pois ele garante que o programa execute pelo menos uma vez, solicitando ao usuário a entrada de um número antes de verificar a condição de repetição.

 
  ====
*/




