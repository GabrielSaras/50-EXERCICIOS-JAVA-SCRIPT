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

Descritivo: Converter Celsius para Fahrenheit
*******************************************************************************/
/*
Converte temperatura de Celsius para Fahrenheit.
*/

const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

async function main() {
  const rl = readline.createInterface({ input, output });

  let c = await rl.question("Digite a temperatura em Celsius: ");
  c = Number(c);

  let f = (c * 9/5) + 32;

  console.log("Fahrenheit:", f);

  rl.close();
}

main();