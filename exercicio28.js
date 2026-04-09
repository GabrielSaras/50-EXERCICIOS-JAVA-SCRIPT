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

Descritivo: Crie uma função que retorne um objeto com "nome" e "idade" da pessoa.
*******************************************************************************/

/*
  Como o código resolve o problema:
  A função "criarPessoa" recebe dois parâmetros (nome e idade) e
  retorna um objeto JavaScript com essas duas propriedades.
  Os dados são coletados do usuário via terminal com readline/promises.
  Ao final, o objeto retornado é exibido no console com suas propriedades.
*/

// Importa o módulo readline/promises para leitura assíncrona do terminal
const readline = require("readline/promises");

// Função principal assíncrona — necessária para usar "await"
async function main() {

  // Cria a interface de leitura (teclado → tela)
  const rl = readline.createInterface({
    input: process.stdin,   // lê do teclado
    output: process.stdout, // exibe na tela
  });

  // Aguarda o usuário digitar o nome — permanece como string
  const nome = await rl.question("Digite o nome da pessoa: ");

  // Aguarda o usuário digitar a idade — ainda está como string aqui
  const idadeStr = await rl.question("Digite a idade da pessoa: ");

  // Fecha a interface após coletar os dados
  rl.close();

  // Converte a string da idade para número inteiro
  // parseInt("25") → 25
  const idade = parseInt(idadeStr);

  // Função que recebe nome e idade e retorna um objeto com essas propriedades
  // A notação { nome, idade } é um atalho para { nome: nome, idade: idade }
  function criarPessoa(nome, idade) {
    return { nome, idade }; // retorna um objeto JavaScript
  }

  // Chama a função e armazena o objeto retornado na variável "pessoa"
  const pessoa = criarPessoa(nome, idade);

  // Exibe o objeto completo (formato: { nome: 'João', idade: 25 })
  console.log("\nObjeto criado:");
  console.log(pessoa);

  // Acessa as propriedades do objeto individualmente usando ponto ( . )
  console.log(`Nome: ${pessoa.nome}`);   // acessa a propriedade "nome"
  console.log(`Idade: ${pessoa.idade}`); // acessa a propriedade "idade"
}

// Inicia o programa chamando a função principal
main();
