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

Descritivo: Filtrar números pares com filter
*******************************************************************************/
/*
Retorna apenas os números pares do array.
*/

let numeros = [1, 2, 3, 4, 5, 6];

let pares = numeros.filter(n => n % 2 === 0);

console.log(pares);