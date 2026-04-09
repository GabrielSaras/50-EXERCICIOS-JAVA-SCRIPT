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

Descritivo: Encontrar maior número de um array
*******************************************************************************/
/*
Percorre o array e identifica o maior valor.
*/

let numeros = [10, 5, 25, 3, 40, 7];

let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}

console.log("Maior número:", maior);