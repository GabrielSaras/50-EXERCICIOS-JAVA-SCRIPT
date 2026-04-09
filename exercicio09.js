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

Descritivo: Aplicar desconto de 10% acima de R$100
*******************************************************************************/
/*
Aplica desconto se o valor for maior que 100.
*/

const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

async function main() {
  const rl = readline.createInterface({ input, output });

  let valor = await rl.question("Digite o valor da compra: ");
  valor = Number(valor);

  if (valor > 100) {
    valor = valor * 0.9;
  }

  console.log("Valor final: R$ " + valor.toFixed(2));

  rl.close();
}

main();