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

Descritivo: script que receba a idade de uma pessoa e diga se ela pode votar (16 anos ou mais).

*******************************************************************************/

const readline = require("readline/promises"); // Importa leitura de dados

async function main() { // Função principal
  const rl = readline.createInterface({ // Cria interface de entrada
    input: process.stdin, // Entrada do teclado
    output: process.stdout, // Saída no terminal
  });
 let idade = await rl.question("Digite sua idade: "); // Pede idade
  idade = Number(idade); // Converte para número

  if (idade >= 16) { // Verifica se pode votar
    console.log("Pode votar"); // Mostra mensagem
  } else {
    console.log("Não pode votar"); // Caso contrário
  }

  rl.close(); // Fecha leitura
}

main(); // Executa