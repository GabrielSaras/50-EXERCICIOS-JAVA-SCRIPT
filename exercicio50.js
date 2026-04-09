
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

//Exercicio 50- Implemente um "Currying" simples: 'soma(2)(3)' deve retornar 5.

*******************************************************************************/


// Função que retorna outra função (currying)
function soma(a) {
  return function (b) {
    return a + b; // Soma os dois valores
  };
}

// Exemplo de uso
console.log(soma(2)(3)); // 5