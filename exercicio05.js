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
//Exercicio 5- Verifique se um ano é bissexto (divisível por 4, mas não por 100, exceto se for divisível por 400).
******************************************************************************/


// Importa o módulo readline com suporte a Promises
const readline = require("readline/promises");

async function main() {
  // Cria interface de entrada e saída no terminal
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Solicita um ano ao usuário e converte para número
  const ano = Number(await rl.question("Digite um ano: "));

  // Verifica se o ano é bissexto
  // Regra:
  // - Divisível por 4 e NÃO por 100
  // - OU divisível por 400
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log("É bissexto");
  } else {
    console.log("Não é bissexto");
  }

  // Fecha a interface
  rl.close();
}

// Executa o programa
main();