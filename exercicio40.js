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

Descritivo: Use o método `trim()` para remover os espaços em branco do início e fim de uma string.
*******************************************************************************/



// String com espaços extras
const texto = "   Olá mundo   ";

// Remove espaços do início e fim
const resultado = texto.trim();

console.log(resultado); // "Olá mundo"