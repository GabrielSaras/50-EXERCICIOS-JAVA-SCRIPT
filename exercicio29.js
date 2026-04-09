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

Descritivo: Fatorial com recursão
*******************************************************************************/
/*
Calcula o fatorial de um número inteiro não negativo.
*/

const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

function fatorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}

async function main() {
  const rl = readline.createInterface({ input, output });

  let num = await rl.question("Digite um número inteiro não negativo: ");
  num = Number(num);

  if (num < 0 || !Number.isInteger(num)) {
    console.log("Digite um número válido.");
  } else {
    console.log("Fatorial:", fatorial(num));
  }

  rl.close();
}

main();