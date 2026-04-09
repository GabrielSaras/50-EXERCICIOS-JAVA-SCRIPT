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

Descritivo: Crie uma função operacao(a, b, callback) que execute o callback com a e b.
*******************************************************************************/

/*
  Como o código resolve o problema:
  A função "operacao" é uma Higher-Order Function que recebe dois
  números (a e b) e uma função "callback" como terceiro parâmetro.
  Ela apenas chama o callback passando a e b como argumentos.
  Isso permite reutilizar a mesma função "operacao" com qualquer
  lógica: soma, subtração, multiplicação, etc.
  O usuário escolhe a operação no terminal.
*/

// Importa o módulo readline/promises para leitura assíncrona do terminal
const readline = require("readline/promises");

// Função principal assíncrona — necessária para usar "await"
async function main() {

  // Cria a interface de leitura (teclado → tela)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Lê os dois números e converte diretamente para float com parseFloat
  const a = parseFloat(await rl.question("Digite o primeiro número: "));
  const b = parseFloat(await rl.question("Digite o segundo número: "));

  // Lê a opção de operação desejada pelo usuário (1, 2, 3 ou 4)
  const opcao = await rl.question(
    "Escolha a operação (1-Soma, 2-Subtração, 3-Multiplicação, 4-Divisão): "
  );

  // Fecha a interface após coletar todos os dados
  rl.close();

  // Higher-Order Function: recebe uma função como parâmetro (callback)
  // e a executa com os valores a e b
  // Isso separa O QUÊ fazer (callback) de COMO chamar (operacao)
  function operacao(a, b, callback) {
    return callback(a, b); // executa o callback passando a e b
  }

  // Cada callback abaixo é uma arrow function que realiza uma operação
  const soma           = (a, b) => a + b;           // retorna a soma
  const subtracao      = (a, b) => a - b;           // retorna a subtração
  const multiplicacao  = (a, b) => a * b;           // retorna a multiplicação
  const divisao        = (a, b) =>                  // retorna a divisão
    b !== 0 ? a / b : "Erro: divisão por zero";     // evita divisão por zero

  // Variáveis que vão guardar o resultado e o nome da operação escolhida
  let resultado;
  let nomeOperacao;

  // switch avalia o valor de "opcao" e executa o case correspondente
  switch (opcao.trim()) { // .trim() remove espaços acidentais na digitação
    case "1":
      resultado = operacao(a, b, soma);        // passa a função soma como callback
      nomeOperacao = "Soma";
      break; // encerra o switch para não executar os próximos cases

    case "2":
      resultado = operacao(a, b, subtracao);   // passa a função subtracao como callback
      nomeOperacao = "Subtração";
      break;

    case "3":
      resultado = operacao(a, b, multiplicacao); // passa multiplicacao como callback
      nomeOperacao = "Multiplicação";
      break;

    case "4":
      resultado = operacao(a, b, divisao);     // passa a função divisao como callback
      nomeOperacao = "Divisão";
      break;

    default:
      // Executado se nenhum case anterior for satisfeito
      console.log("Opção inválida.");
      return; // encerra a função main
  }

  // Exibe o resultado da operação escolhida
  console.log(`${nomeOperacao} de ${a} e ${b} = ${resultado}`);
}

// Inicia o programa chamando a função principal
main();
