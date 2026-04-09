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

Descritivo: Use .map() para dobrar todos os valores de um array numérico.
*******************************************************************************/

//Exercicio 35- Use `.map()` para dobrar todos os valores de um array numérico.



// Array de números
const numeros = [5, 8, 12, 3, 20];

// Dobrar todos os valores
const dobrados = numeros.map(n => n * 2 );

console.log(dobrados); // 12