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
Descritivo: Verificar se um número é primo
*******************************************************************************/

const readline = require("readline/promises"); // Importa leitura de dados

function ehPrimo(num) { // Função verifica primo
  if (num <= 1) return false; // Não é primo

  for (let i = 2; i < num; i++) { // Testa divisores
    if (num % i === 0) return false; // Se dividir, não é primo
  }

  return true; // É primo
}

async function main() { // Função principal
  const rl = readline.createInterface({ // Cria interface de entrada
    input: process.stdin, // Entrada do teclado
    output: process.stdout, // Saída no terminal
  });
  let num = await rl.question("Digite um número: "); //pede para digitar o numero
  num = Number(num); //converte

  console.log(ehPrimo(num)); // Mostra resultado

  rl.close(); //fecha leitura
}

main(); //executa