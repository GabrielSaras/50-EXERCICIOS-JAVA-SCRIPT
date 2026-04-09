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

//Exercicio 20- Use um `do...while` para garantir que uma variável seja incrementada pelo menos uma vez antes da verificação. 
********************************************************************************/



// Inicializa a variável
let num = 0;

// O bloco executa pelo menos uma vez antes da verificação
do {
  console.log("Valor:", num);
  num++; // Incrementa
} while (num < 3); // Condição