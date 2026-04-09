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

Descritivo: Função multiplicadora (Closure)
*******************************************************************************/
/*
Retorna uma função que multiplica valores.
*/

function criarMultiplicador(multiplicador) {
  return function(num) {
    return num * multiplicador;
  };
}

let dobro = criarMultiplicador(2);

console.log(dobro(5));