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

Descritivo: Escreva uma função que receba dois números e retorne o maior deles.
*******************************************************************************/

/*
  Como o código resolve o problema:
  A função "maiorNumero" recebe dois parâmetros (a e b).
  Usando um operador ternário, compara os dois valores e retorna
  o maior. Se forem iguais, retorna uma mensagem informando isso.
  O readline/promises é usado para capturar os dois números
  digitados pelo usuário no terminal de forma assíncrona.
*/

// Importa o módulo readline/promises para leitura de dados no terminal
const readline = require("readline/promises");

// Declara a função principal como assíncrona para poder usar "await"
async function main() {

  // Cria a interface de leitura conectada ao teclado (stdin) e à tela (stdout)
  const rl = readline.createInterface({
    input: process.stdin,   // entrada de dados = teclado
    output: process.stdout, // saída de dados = tela
  });

  // Aguarda o usuário digitar o primeiro número e pressionar Enter
  const entradaA = await rl.question("Digite o primeiro número: ");

  // Aguarda o usuário digitar o segundo número e pressionar Enter
  const entradaB = await rl.question("Digite o segundo número: ");

  // Fecha a interface de leitura — libera o terminal corretamente
  rl.close();

  // Converte as strings digitadas em números decimais com parseFloat
  const a = parseFloat(entradaA); // ex: "3.5" → 3.5
  const b = parseFloat(entradaB); // ex: "7.0" → 7.0

  // Função que compara dois números e retorna o maior
  function maiorNumero(a, b) {
    // Caso especial: se forem iguais, não há "maior"
    if (a === b) return `Os dois números são iguais: ${a}`;

    // Operador ternário: condição ? valor_se_verdadeiro : valor_se_falso
    // Se a > b é verdadeiro, retorna a; caso contrário, retorna b
    return a > b ? a : b;
  }

  // Executa a função com os valores informados e guarda o resultado
  const resultado = maiorNumero(a, b);

  // Exibe o resultado formatado no console
  console.log(`O maior número é: ${resultado}`);
}

// Inicia o programa chamando a função principal
main();
