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
Data: 2026
Descritivo: Sistema simples de login
*******************************************************************************/
/*
Verifica se o usuário e senha estão corretos.
*/

const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

async function main() {
  const rl = readline.createInterface({ input, output });

  const usuario = await rl.question("Digite o usuario: ");
  const senha = await rl.question("Digite a senha: ");

  if (usuario === "admin" && senha === "1234") {
    console.log("Acesso Permitido");
  } else {
    console.log("Acesso Negado");
  }

  rl.close();
}

main();