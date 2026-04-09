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

Descritivo: Dada uma frase, conte quantas palavras ela possui (use split).
*******************************************************************************/

/*
  Como o código resolve o problema:
  O método .split(" ") divide a string em um array usando o espaço
  como separador. Cada elemento do array resultante é uma palavra.
  O .filter() remove entradas vazias que surgem quando há espaços
  duplos ou no início/fim da frase, garantindo a contagem correta.
  O usuário digita a frase no terminal.
*/

// Importa o módulo readline/promises para leitura assíncrona do terminal
const readline = require("readline/promises");

// Função principal assíncrona — necessária para usar "await"
async function main() {

  // Cria a interface de leitura (teclado → tela)
  const rl = readline.createInterface({
    input: process.stdin,   // entrada = teclado
    output: process.stdout, // saída = tela
  });

  // Aguarda o usuário digitar uma frase completa e pressionar Enter
  const frase = await rl.question("Digite uma frase: ");

  // Fecha a interface após coletar o dado
  rl.close();

  // Função que conta as palavras de uma frase
  function contarPalavras(frase) {

    // .trim() remove espaços em branco do início e do fim da string
    // ex: "  olá mundo  " → "olá mundo"
    // .split(" ") divide a string em um array usando o espaço como separador
    // ex: "olá mundo" → ["olá", "mundo"]
    // .filter((p) => p !== "") remove elementos vazios causados por espaços duplos
    // ex: ["olá", "", "mundo"] → ["olá", "mundo"]
    const palavras = frase.trim().split(" ").filter((p) => p !== "");

    // Retorna a quantidade de elementos no array (= número de palavras)
    return palavras.length;
  }

  // Chama a função com a frase digitada e armazena o resultado
  const quantidade = contarPalavras(frase);

  // Exibe o resultado no console
  console.log(`A frase possui ${quantidade} palavra(s).`);
}

// Inicia o programa chamando a função principal
main();
