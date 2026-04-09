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
//Exercicio 25-  Faça uma função que receba um array e retorne a soma de seus elementos.
*******************************************************************************/


// Função que recebe um array como parâmetro
function somaArray(arr) {
  let soma = 0;

  // Percorre todos os elementos do array
  for (let num of arr) {
    soma += num; // Soma cada número
  }

  return soma; // Retorna o resultado final
}

// Exemplo de uso
console.log(somaArray([1, 2, 3, 4])); // 10