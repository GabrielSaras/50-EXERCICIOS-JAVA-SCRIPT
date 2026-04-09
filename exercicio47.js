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

*******************************************************************************/

const readline = require("readline/promises"); // Importa leitura de dados

async function main() { // Função principal
  const rl = readline.createInterface({ // Cria interface de entrada
    input: process.stdin, // Entrada do teclado
    output: process.stdout, // Saída no terminal
  });
   let numeros = [1,2,3,4,5,6]; // Array

  let resultado = numeros
    .filter(n => n % 2 === 0) // Filtra pares
    .map(n => n * n); // Eleva ao quadrado

  console.log(resultado); // Mostra resultado

  rl.close(); //fecha leitura
}

main();//executa