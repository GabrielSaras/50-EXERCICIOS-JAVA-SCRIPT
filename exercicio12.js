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
Use um `for` para imprimir a tabuada do 5 (de 1 a 10).
*******************************************************************************/


const readline = require("readline/promises"); // Importa leitura de dados

async function main() { // Função principal
  const rl = readline.createInterface({ // Cria interface de entrada
    input: process.stdin, // Entrada do teclado
    output: process.stdout, // Saída no terminal
  });
  for (let i = 1; i <= 10; i++) { // Loop de 1 a 10
    console.log("5 x " + i + " = " + (5 * i)); // Mostra resultado
  }

  rl.close(); //fecha leitura
}

main(); //executa