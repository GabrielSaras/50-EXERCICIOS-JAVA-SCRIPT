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

Descritivo: Ordenar array em ordem crescente
*******************************************************************************/
/*
Ordena números usando sort.
*/

let numeros = [10, 3, 25, 1, 7];

numeros.sort((a, b) => a - b);

console.log(numeros);