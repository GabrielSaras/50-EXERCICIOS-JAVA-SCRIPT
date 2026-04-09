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
Data: 06 de Abril de 2026
Descritivo:36. Use `.reduce()` para somar todos os elementos de um array.
*******************************************************************************/

//==================BASE DO CÓDIGO====================
const readline = require("readline/promises");

async function main() {
  // Criando a interface de leitura
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // ==================== INICIO DO CÓDIGO ====================

  // Pedindo ao usuário para digitar números separados por espaço
  const entrada = await rl.question("Digite números separados por espaço: ");

  // Transformando a string em array (separando pelos espaços)
 const arrayString = entrada.split(" ");

  // Convertendo cada valor para número
  const numeros = arrayString.map(num => Number(num));

  // Usando reduce para somar todos os valores do array
  const soma = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  }, 0); // começamos o acumulador em 0

  // Exibindo o resultado
  console.log("Soma total:", soma);

  // Fechando o readline
  rl.close();
}

// Chamando a função principal
main();
/*======================DOCUMENTAÇÃO======================

//===================COMO RODA NO TERMINAL====================
// 1. Salve o código em um arquivo chamado exercicios036.js
// 2. Abra o terminal e navegue até o diretório onde o arquivo está salvo
// 3. Execute o comando: node exercicios036.js
// 4. Digite os números separados por espaço e pressione Enter para ver a soma total.

/*


📌 OBJETIVO:
Implementar a soma de valores informados pelo usuário utilizando
entrada via terminal e o método funcional .reduce().

---------------------------------------------------------------

🏗️ ESTRUTURA DO CÓDIGO:

1. Importação de módulo
   → require("readline/promises")

2. Criação da interface de entrada/saída
   → readline.createInterface()

3. Função principal assíncrona
   → uso de async/await para controle de fluxo

4. Leitura de dados
   → rl.question()

5. Processamento dos dados
   → split() → map() → reduce()

6. Saída de dados
   → console.log()

7. Encerramento da interface
   → rl.close()

---------------------------------------------------------------

⚙️ FORMA DE CODIFICAÇÃO UTILIZADA:

- Paradigma: Programação funcional (uso de map e reduce)
- Manipulação de dados imutável (sem alterar array original)
- Uso de arrow functions (funções anônimas)
- Encadeamento de métodos (method chaining)

Exemplo:
entrada.split(" ").map(Number)

---------------------------------------------------------------

🔄 FLUXO DE EXECUÇÃO:

Entrada (STRING)
→ Transformação (ARRAY de strings)
→ Conversão (ARRAY de números)
→ Redução (NUMBER final)
→ Saída (console)

---------------------------------------------------------------

📊 NÍVEL DE DIFICULDADE:

- Entrada de dados (readline) → MÉDIO
- Manipulação de string (split) → FÁCIL
- Conversão de tipo (map) → MÉDIO
- Redução de dados (reduce) → MÉDIO/ALTO

---------------------------------------------------------------

⚠️ PRINCIPAIS DIFICULDADES:

1. Entender que a entrada sempre é STRING
2. Diferenciar transformação (map) de redução (reduce)
3. Compreender o acumulador no reduce
4. Não confundir exibição (console.log) com atribuição (const)

---------------------------------------------------------------

🛠️ SOLUÇÕES ADOTADAS:

- Uso de split(" ") para segmentação da entrada
- Uso de map(Number) para garantir tipagem numérica
- Uso de reduce com acumulador inicial 0
- Separação clara entre processamento e saída

---------------------------------------------------------------

🚀 GUIA RÁPIDO:

const entrada = await rl.question(...)

entrada
  .split(" ")     // STRING → ARRAY
  .map(Number)    // STRING → NUMBER
  .reduce(...)    // ARRAY → VALOR ÚNICO

console.log(...)  // EXIBE RESULTADO

---------------------------------------------------------------

🎯 CONCLUSÃO:

O código demonstra um fluxo linear de transformação de dados,
utilizando conceitos fundamentais de entrada, processamento e saída,
com aplicação de métodos funcionais para manipulação eficiente.

===============================================================
*/
// ❌ ERRO:
// O código abaixo está incorreto porque falta o nome do método após o ponto (.)
// O JavaScript espera algo como entrada.metodo()
// Mas encontrou apenas entrada.(" "), o que gera erro de sintaxe
//===============================================================
// const arrayString = entrada.(" "); // SyntaxError: Unexpected token '('


// ✅ SOLUÇÃO:
// Usar o método correto da string: split()
// Ele divide a string em partes usando o espaço como separador
//----------------------------------------------------------------
//const arrayString = entrada.split(" ");


// 💡 EXPLICAÇÃO:
// entrada → é uma string
// split(" ") → transforma a string em um array, separando pelas palavras

// Exemplo:
// "ola mundo" → ["ola", "mundo"]