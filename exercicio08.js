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

Descritivo: Verifique se três lados informados podem formar um triângulo e,
            se sim, classifique-o (Equilátero, Isósceles, Escaleno).
*******************************************************************************/

/*
  Como o código resolve o problema:
  Para formar um triângulo, a soma de quaisquer dois lados deve ser
  maior que o terceiro lado (condição triangular).
  Se passar na verificação, os lados são comparados entre si:
    - Equilátero: os três lados são iguais
    - Isósceles: apenas dois lados são iguais
    - Escaleno: todos os lados são diferentes
  O usuário informa os três lados pelo terminal.
*/

// Importa o módulo readline/promises para leitura assíncrona do terminal
const readline = require("readline/promises");

// Função principal assíncrona — necessária para usar "await"
async function main() {

  // Cria a interface de leitura (teclado → tela)
  const rl = readline.createInterface({
    input: process.stdin,   // lê do teclado
    output: process.stdout, // exibe na tela
  });

  // Lê os três lados digitados pelo usuário e converte para número decimal
  const a = parseFloat(await rl.question("Digite o lado A: ")); // ex: 3
  const b = parseFloat(await rl.question("Digite o lado B: ")); // ex: 4
  const c = parseFloat(await rl.question("Digite o lado C: ")); // ex: 5

  // Fecha a interface após coletar todos os dados
  rl.close();

  // --- FUNÇÃO 1: Verifica se os três lados podem formar um triângulo ---
  // Regra matemática: a soma de dois lados quaisquer deve ser maior que o terceiro
  function ehTriangulo(a, b, c) {
    return a + b > c && // lado A + lado B > lado C
           a + c > b && // lado A + lado C > lado B
           b + c > a;   // lado B + lado C > lado A
  }

  // --- FUNÇÃO 2: Classifica o tipo de triângulo ---
  function classificarTriangulo(a, b, c) {
    // Equilátero: todos os três lados têm o mesmo valor
    if (a === b && b === c) return "Equilátero";

    // Isósceles: pelo menos um par de lados é igual
    if (a === b || a === c || b === c) return "Isósceles";

    // Escaleno: nenhum lado é igual ao outro
    return "Escaleno";
  }

  // Verifica primeiro se os lados formam um triângulo válido
  if (!ehTriangulo(a, b, c)) {
    // O "!" inverte o resultado: entra aqui se NÃO for triângulo
    console.log("Os lados informados NÃO formam um triângulo.");
  } else {
    // Se for válido, classifica e exibe o tipo
    const tipo = classificarTriangulo(a, b, c);
    console.log(`Os lados formam um triângulo do tipo: ${tipo}`);
  }
}

// Inicia o programa
main();
