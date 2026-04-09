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
Data: 05 de Abril de 2026
Descritivo:26. Crie uma função com parâmetro padrão: `digaOla(nome = 'Visitante')`.
*******************************************************************************/
const readline = require("readline/promises");
// Importa o módulo readline com suporte a Promises para ler entrada do usuário no terminal

async function main() {
  // Função principal assíncrona, pois usamos await para ler a entrada do usuário

  const rl = readline.createInterface({
    input: process.stdin,  // Define que a entrada vem do teclado
    output: process.stdout // Define que a saída será exibida no terminal
  });

  let nome = await rl.question("Digite seu nome: ");
  // Solicita que o usuário digite seu nome
  // await garante que o programa espere até o usuário digitar algo

  digaOla(nome || undefined);
  // Chama a função digaOla
  // Se o usuário não digitar nada (string vazia ""), passamos undefined
  // Assim, a função usa o parâmetro padrão 'Visitante'

  rl.close();
  // Fecha a interface de leitura para encerrar o programa
}

function digaOla(nome = 'Visitante') {
  // Função que recebe um parâmetro 'nome'
  // Se nenhum valor for passado, usa o parâmetro padrão 'Visitante'

  console.log(`Olá, ${nome}!`);
  // Imprime no terminal a saudação
}

main();
// Chama a função principal para executar o programa


//===============================================================
//DOCUMENTAÇÃO DO CÓDIGO – FUNÇÃO DE SOMA
//=================================================================

// Como executar
// 1. Abra o terminal e navegue até o diretório onde o arquivo está salvo.
// 2. Execute o comando: node exercicios026.js
// 3. Digite seu nome quando solicitado e pressione Enter para ver a saudação.

//===================CODIGO  COM ERRO===================
/*const readline = require("readline/promises"); 
 Importa o módulo readline com suporte a Promises para ler entrada do usuário no terminal

async function main() { 
  Função principal assíncrona, pois usamos await para ler a entrada do usuário

  const rl = readline.createInterface({
    input: process.stdin,  // Define que a entrada vem do teclado
    output: process.stdout // Define que a saída será exibida no terminal
  });

  let nome = await rl.question("Digite seu nome: "); 
   Solicita que o usuário digite seu nome
   await garante que o programa espere até o usuário digitar algo

   ====================== ERRO ORIGINAL ======================
   O código original era:
   digaOla(nome);
  
  Problema:
   - Mesmo se o usuário apertasse apenas Enter, 'nome' seria "" (string vazia)
   - O parâmetro padrão 'Visitante' só funciona se NENHUM argumento for passado
   - Então, 'nome' vazio substituía o parâmetro padrão, resultando em:
     "Olá, !" ao invés de "Olá, Visitante!"
   ============================================================

   ====================== CORREÇÃO ===========================
  digaOla(nome || undefined); 
   Se 'nome' for vazio (""), passamos undefined
   Assim, a função usa o parâmetro padrão 'Visitante'
   Se o usuário digitar algo, será usado o valor digitado
   ============================================================

  rl.close(); 
   Fecha a interface de leitura para encerrar o programa


function digaOla(nome = 'Visitante') { 
   Função que recebe um parâmetro 'nome'
   Se nenhum valor for passado, usa o parâmetro padrão 'Visitante'
  
  console.log(`Olá, ${nome}!`); 
   Imprime no terminal a saudação
}

main(); 
// Chama a função principal para executar o programa

/*
================================================================================
DOCUMENTAÇÃO DO CÓDIGO – FUNÇÃO DE SOMA
================================================================================

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

================================================================================
*/