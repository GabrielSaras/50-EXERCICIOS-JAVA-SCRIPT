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

Descritivo: Gere os primeiros 10 números da sequência de Fibonacci.
*******************************************************************************/

/*
  Como o código resolve o problema:
  A sequência de Fibonacci começa com 0 e 1, e cada número seguinte
  é a soma dos dois anteriores: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
  O loop "for" itera 10 vezes. A cada iteração, o próximo número é
  calculado somando os dois últimos e os valores são atualizados.
  Todos os termos são armazenados em um array e exibidos no final.
*/

// Função que gera a sequência de Fibonacci com a quantidade desejada de termos
function gerarFibonacci(quantidade) {

  // Array que vai armazenar todos os termos da sequência
  const sequencia = [];

  // "anterior" representa o número F(n-2) — começa com 0 (primeiro termo)
  let anterior = 0;

  // "atual" representa o número F(n-1) — começa com 1 (segundo termo)
  let atual = 1;

  // Loop que repete exatamente "quantidade" vezes (neste caso, 10)
  for (let i = 0; i < quantidade; i++) {

    // Adiciona o valor de "anterior" ao array (é o termo atual da sequência)
    sequencia.push(anterior);

    // Calcula o próximo termo: soma dos dois últimos valores conhecidos
    // Exemplo: 0 + 1 = 1, depois 1 + 1 = 2, depois 1 + 2 = 3, etc.
    const proximo = anterior + atual;

    // "Avança" os ponteiros para a próxima posição:
    // o que era "atual" passa a ser o "anterior"
    anterior = atual;

    // o que era "próximo" passa a ser o "atual"
    atual = proximo;
  }

  // Retorna o array completo com todos os termos gerados
  return sequencia;
}

// Chama a função pedindo os primeiros 10 termos
const fibonacci = gerarFibonacci(10);

// Exibe o título e a sequência formatada separada por vírgulas
console.log("Os primeiros 10 números de Fibonacci são:");
console.log(fibonacci.join(", ")); // join() une os elementos do array em uma string
// Resultado esperado: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
