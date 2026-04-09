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
Data: 04 de Abril de 2026
Descritivo:22.função `areaRetangulo(base, altura)` que retorne a área.
*******************************************************************************/

const readline = require("readline/promises"); // Importa leitura de dados

function areaRetangulo(base, altura) { // Função
  return base * altura; // Retorna área
}

async function main() { // Função principal
  const rl = readline.createInterface({ // Cria interface de entrada
    input: process.stdin, // Entrada do teclado
    output: process.stdout, // Saída no terminal
  });
  let base = await rl.question("Base: "); // Entrada
  let altura = await rl.question("Altura: ");

  base = Number(base); // Converte
  altura = Number(altura);

  console.log("Área:", areaRetangulo(base, altura)); // Chama função

  rl.close(); //fecha leitura
}

main(); //executa