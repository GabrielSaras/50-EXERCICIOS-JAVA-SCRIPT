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

Calcule o IMC (Peso / Altura²) e classifique (Abaixo do peso, Normal, Sobrepeso, Obesidade).
*******************************************************************************/


const readline = require("readline/promises"); // Importa leitura de dados

async function main() { // Função principal
  const rl = readline.createInterface({ // Cria interface de entrada
    input: process.stdin, // Entrada do teclado
    output: process.stdout, // Saída no terminal
  });
    let peso = await rl.question("Digite seu peso: "); // Entrada peso
  let altura = await rl.question("Digite sua altura: "); // Entrada altura

  peso = Number(peso); // Converte peso
  altura = Number(altura); // Converte altura

  let imc = peso / (altura * altura); // Calcula IMC

  console.log("IMC:", imc); // Mostra IMC

  if (imc < 18.5) {
    console.log("Abaixo do peso"); // Classificação
  } else if (imc < 25) {
    console.log("Normal");
  } else if (imc < 30) {
    console.log("Sobrepeso");
  } else {
    console.log("Obesidade");
  }

  rl.close(); //fecha leitura
}

main(); //executa