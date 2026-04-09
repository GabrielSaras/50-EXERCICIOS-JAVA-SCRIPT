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
//Exercicio 10- Verifique se um caractere informado é uma vogal ou consoante.
*******************************************************************************/

const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Lê o caractere e transforma em minúsculo
  const letra = (await rl.question("Digite um caractere: ")).toLowerCase();

  // Verifica se está dentro das vogais
  if ("aeiou".includes(letra)) {
    console.log("Vogal");
  } else {
    console.log("Consoante");
  }

  rl.close();
}

main();