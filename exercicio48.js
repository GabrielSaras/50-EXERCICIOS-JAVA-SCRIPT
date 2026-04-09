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

Descritivo: Use .reduce() para transformar um array de objetos em um objeto
            somatório (ex: somar salários).
*******************************************************************************/

/*
  Como o código resolve o problema:
  O método .reduce() percorre o array acumulando um valor a cada iteração.
  Aqui, ele começa com um acumulador 0 e, a cada funcionário do array,
  soma o salário ao acumulador.
  Além do total, também é gerado um objeto resumo com o total de
  funcionários e a média salarial, demonstrando como o reduce pode
  construir objetos mais complexos como resultado.
*/

// Array de objetos — cada objeto representa um funcionário com nome, cargo e salário
const funcionarios = [
  { nome: "Ana",   cargo: "Desenvolvedora", salario: 5800 },
  { nome: "Pedro", cargo: "Designer",       salario: 4200 },
  { nome: "Maria", cargo: "Analista",       salario: 6500 },
  { nome: "João",  cargo: "DevOps",         salario: 7100 },
  { nome: "Carla", cargo: "QA",             salario: 4900 },
];

// --- USO SIMPLES DO .reduce() ---
// .reduce(função, valorInicial) percorre o array somando os salários
// "acumulador" começa em 0 (valor inicial) e vai acumulando a soma
// "funcionario" representa cada objeto do array a cada iteração
const totalSalarios = funcionarios.reduce(
  (acumulador, funcionario) => acumulador + funcionario.salario,
  0 // valor inicial do acumulador — sem isso, o primeiro elemento seria o acumulador
);
// Passo a passo:
//   iteração 1: acumulador=0    + 5800 = 5800
//   iteração 2: acumulador=5800 + 4200 = 10000
//   iteração 3: acumulador=10000 + 6500 = 16500
//   iteração 4: acumulador=16500 + 7100 = 23600
//   iteração 5: acumulador=23600 + 4900 = 28500

// --- USO AVANÇADO DO .reduce() — acumulando um OBJETO ---
// Aqui o acumulador começa como um objeto com duas propriedades zeradas
// A cada iteração, somamos o salário e incrementamos o contador
const resumo = funcionarios.reduce(
  (acc, funcionario) => {
    acc.totalSalarios    += funcionario.salario; // soma o salário ao total
    acc.totalFuncionarios += 1;                  // conta mais um funcionário
    return acc; // IMPORTANTE: sempre retornar o acumulador no reduce com objeto
  },
  { totalSalarios: 0, totalFuncionarios: 0 } // objeto inicial do acumulador
);

// Calcula a média salarial dividindo o total pelo número de funcionários
// O resultado é adicionado como nova propriedade no objeto resumo
resumo.mediaSalarial = resumo.totalSalarios / resumo.totalFuncionarios;

// --- EXIBIÇÃO DOS RESULTADOS ---

console.log("=== Folha de Pagamento ===");

// .forEach() percorre o array e exibe cada funcionário com seu salário
// .toFixed(2) formata o número com 2 casas decimais — ex: 5800 → "5800.00"
funcionarios.forEach((f) =>
  console.log(`  ${f.nome} (${f.cargo}): R$ ${f.salario.toFixed(2)}`)
);

console.log("-------------------------");

// Exibe o total calculado pelo primeiro .reduce()
console.log(`Total de salários:   R$ ${totalSalarios.toFixed(2)}`);

// Exibe os dados do objeto resumo gerado pelo segundo .reduce()
console.log(`Total de funcionários: ${resumo.totalFuncionarios}`);
console.log(`Média salarial:      R$ ${resumo.mediaSalarial.toFixed(2)}`);
