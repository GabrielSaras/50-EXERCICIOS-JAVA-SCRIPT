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
 fatorial de um número informado (ex: 5! = 5*4*3*2*1)

******************************************************************************/


const readline = require("readline/promises"); // Importa leitura de dados

async function main() { // Função principal
  const rl = readline.createInterface({ // Cria interface de entrada
    input: process.stdin, // Entrada do teclado
    output: process.stdout, // Saída no terminal
  });
  let num = await rl.question("Digite um número: "); // Entrada
  num = Number(num); // Converte

  let fatorial = 1; // Começa em 1

  for (let i = num; i >= 1; i--) { // Loop decrescente
    fatorial *= i; // Multiplica
  }

  console.log("Fatorial:", fatorial); // Mostra resultado

  rl.close(); //fecha leitura
}

main(); //executa