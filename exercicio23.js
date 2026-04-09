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

Descritivo: Escreva uma função saudacao(nome) que retorne "Olá, [nome]!".
*******************************************************************************/

/*
  Como o código resolve o problema:
  A função "saudacao" recebe um parâmetro "nome" e usa uma
  template string para montar e retornar a mensagem de saudação
  no formato "Olá, [nome]!".
  O nome é lido do terminal com readline/promises e passado
  para a função, que retorna a string formatada.
*/

// Importa o módulo readline/promises para leitura assíncrona do terminal
const readline = require("readline/promises");

// Função principal assíncrona — necessária para usar "await"
async function main() {

  // Cria a interface de leitura conectada ao teclado e à tela
  const rl = readline.createInterface({
    input: process.stdin,   // lê dados do teclado
    output: process.stdout, // exibe texto na tela
  });

  // Aguarda o usuário digitar o nome e pressionar Enter
  // A variável recebe a string exatamente como foi digitada
  const nome = await rl.question("Digite seu nome: ");

  // Fecha a interface — libera o terminal após coletar o dado
  rl.close();

  // Função que monta e retorna a mensagem de saudação
  // Usa template string (crase + ${}) para inserir o nome na mensagem
  function saudacao(nome) {
    return `Olá, ${nome}!`; // ex: nome="Carlos" → "Olá, Carlos!"
  }

  // Chama a função passando o nome digitado pelo usuário
  const mensagem = saudacao(nome);

  // Exibe a saudação formatada no console
  console.log(mensagem);
}

// Inicia o programa chamando a função principal
main();
