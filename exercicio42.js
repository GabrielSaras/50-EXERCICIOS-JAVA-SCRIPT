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

//Exercicio 40-  Remova os espaços em branco do início e fim de uma string (`trim`).
*******************************************************************************/

const readline = require("readline/promises"); // Importa leitura de dados

async function main() { // Função principal
  const rl = readline.createInterface({ // Cria interface de entrada
    input: process.stdin, // Entrada do teclado
    output: process.stdout, // Saída no terminal
  });
  const quadrado = x => x * x; // Arrow function

  console.log(quadrado(5)); // Teste

  rl.close(); //fecha leitura
}

main(); //executa