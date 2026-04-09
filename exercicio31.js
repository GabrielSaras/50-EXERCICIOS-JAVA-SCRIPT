/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes: 
             25058772-2-1 - Gabriel Saras
             25161131-2-2 - Matheus Ricardo Rocha
             25127228-2-3 - Kaio Eduardo Carvalho O.D
             25270134-2-4 - Stefany Mario Moreira
             25356515-2-5 - Vanessa Cristina de Souza 
Data: 05 de Abril de 2026
Descritivo:31. Dada uma string, transforme-a em um array de caracteres.
*******************************************************************************/

const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const listaFeira = "🍎🍌🍊"; // string com emojis
  const caracteres = Array.from(listaFeira); // transforma cada emoji em elemento do array

  console.log("Lista de feira 🧺"); // título com emoji de cesta
  console.log(caracteres.join(" ")); // imprime os emojis separados por espaço

  rl.close(); // fecha a interface de leitura
}

main(); // chama a função principal

/*
 * =================== DOCUMENTAÇÃO=============================

/*como executar o programa:
1. Salve o código em um arquivo chamado exercicios031.js
2. Abra o terminal e navegue até o diretório onde o arquivo está salvo
3. Execute o comando: node exercicios021.js
4. O programa irá imprimir a lista de feira com os emojis separados por espaço
/**
 
              REFLEXÃO SOBRE O EXERCÍCIO
 * Exercício 31 – Transformar string em array de caracteres
 *
 * Nível de dificuldade percebido:
 * - Inicialmente houve confusão sobre quando usar [ ] para criar arrays literais.
 *   Descobri que Array.from() é necessário apenas para transformar strings ou objetos iteráveis em array,
 *   enquanto [ ] é usado para criar arrays manualmente.
 *
 * Melhorias implementadas:
 * - Uso do método Array.from() para tratar corretamente emojis como caracteres únicos.
 * - Implementação de emojis na lista de feira para deixar o programa mais visual e divertido.
 * - Uso de join(" ") para separar os emojis na impressão, melhorando a leitura.
 *
 * Objetivo da implementação de emojis:
 * - Tornar o exercício mais interativo e visual.
 * - Praticar manipulação de strings e arrays em JavaScript.
 * - Ajudar pessoas que tenham dificuldade em visualizar resultados de arrays com emojis.
 */


