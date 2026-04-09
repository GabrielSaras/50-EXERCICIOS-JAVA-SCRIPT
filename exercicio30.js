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
//Exercicio 30- Crie uma função que receba uma string e retorne-a invertida. 
*******************************************************************************/


// Função que inverte uma string
function inverterString(str) {
  return str
    .split("")   // Divide a string em um array de caracteres
    .reverse()   // Inverte a ordem
    .join("");   // Junta novamente em string
}

console.log(inverterString("hello")); 