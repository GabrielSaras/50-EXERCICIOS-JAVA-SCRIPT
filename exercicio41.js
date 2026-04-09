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
Descritivo:41. Converta a função `function soma(a,b) { return a+b }` para Arrow Function.

*******************************************************************************/

//==================BASE DO CÓDIGO====================
// Importa o módulo readline com suporte a Promises
const readline = require("readline/promises");

// Declara a função principal como assíncrona (permite usar await)
async function main() {

  // Cria a interface de entrada e saída do terminal
  const rl = readline.createInterface({
    input: process.stdin,   // entrada padrão (teclado)
    output: process.stdout, // saída padrão (terminal)
  });

  // Solicita o primeiro número ao usuário e aguarda a resposta
  const valorA = await rl.question("Digite o primeiro número: ");

  // Solicita o segundo número ao usuário e aguarda a resposta
  const valorB = await rl.question("Digite o segundo número: ");

  // Converte os valores recebidos (string) para número
  const a = Number(valorA);
  const b = Number(valorB);

  // Arrow Function que realiza a soma de dois valores
  const soma = (x, y) => x + y;

  // Executa a função soma passando os valores convertidos
  const resultado = soma(a, b);

  // Exibe o resultado da soma no terminal
  console.log("Resultado da soma:", resultado);

  // Encerra a interface de leitura
  rl.close();
}

// Executa a função principal
main();

/*
==================== DOCUMENTAÇÃO TÉCNICA ====================

como roda no terminal
1. Salve o código em um arquivo chamado `exercicios041.js`.
2. Abra o terminal e navegue até o diretório onde o arquivo está salvo.
3. Execute o comando: `node exercicios041.js`.
4. Siga as instruções para digitar os números e veja o resultado da soma.

📌 OBJETIVO:
Converter uma função tradicional de soma para Arrow Function
e aplicá-la em um fluxo com entrada de dados via terminal.

---------------------------------------------------------------

🏗️ ESTRUTURA DO CÓDIGO:

1. Importação de módulo
   → readline/promises

2. Função principal (async)
   → controle de fluxo assíncrono com await

3. Interface de entrada/saída
   → createInterface()

4. Entrada de dados
   → rl.question()

5. Conversão de tipo
   → Number()

6. Definição da função
   → Arrow Function (sintaxe reduzida)

7. Execução da função
   → chamada com parâmetros

8. Saída de dados
   → console.log()

9. Encerramento
   → rl.close()

---------------------------------------------------------------

⚙️ FORMA DE CODIFICAÇÃO:

- Paradigma: funcional (função pura para soma)
- Arrow Function:
  (x, y) => x + y

- Sintaxe reduzida:
  → retorno implícito (sem uso de return)

- Tipagem dinâmica:
  → conversão explícita com Number()

---------------------------------------------------------------

🔄 FLUXO DE DADOS:

Entrada (STRING)
→ Conversão (NUMBER)
→ Processamento (FUNÇÃO)
→ Saída (RESULTADO)

---------------------------------------------------------------

📊 NÍVEL DE DIFICULDADE:

- Entrada de dados → MÉDIO
- Conversão de tipo → FÁCIL
- Arrow Function → FÁCIL/MÉDIO
- Fluxo assíncrono → MÉDIO

---------------------------------------------------------------

⚠️ DIFICULDADES COMUNS:

- Esquecer que rl.question() retorna STRING
- Não converter valores → gera concatenação
- Confundir função tradicional com Arrow Function
- Não entender retorno implícito

---------------------------------------------------------------

🛠️ SOLUÇÕES ADOTADAS:

- Uso de Number() para garantir tipo numérico
- Uso de Arrow Function para simplificação
- Separação clara entre entrada, processamento e saída

---------------------------------------------------------------

🚀 GUIA RÁPIDO:

Função tradicional:
function soma(a,b){ return a+b }

Arrow Function equivalente:
const soma = (a,b) => a+b

Fluxo:
entrada → conversão → função → resultado

---------------------------------------------------------------

🎯 CONCLUSÃO:

O código demonstra a aplicação de Arrow Functions em um contexto
prático, integrando entrada de dados, tipagem e execução de função
de forma simplificada e eficiente.

---------------------------------------------------------------

📈 PERCEPÇÃO DE MELHORIAS E EXTENSÕES:

A lógica implementada neste código pode ser reutilizada e expandida
para outros cenários além da soma simples, demonstrando escalabilidade
do raciocínio aplicado.

Possíveis evoluções identificadas:

1. Cálculo de média de alunos
   → reutilização de:
     - entrada de dados
     - split() para múltiplos valores
     - map(Number) para conversão
     - reduce() para soma

   → adição de:
     - operação de divisão pela quantidade de elementos

2. Processamento de múltiplos registros
   → uso de estrutura de repetição (while)
   → entrada contínua de dados

3. Validação de dados
   → garantir que os valores inseridos sejam numéricos
   → evitar erros de execução ou resultados incorretos

4. Generalização da solução
   → adaptação para outros contextos:
     - cálculo de totais
     - médias gerais
     - relatórios simples

---------------------------------------------------------------

🧠 PERCEPÇÃO DO PROCESSO DE DESENVOLVIMENTO:

Durante a implementação, observa-se que:

- O maior desafio inicial é compreender o fluxo de dados
  (STRING → ARRAY → NUMBER → RESULTADO)

- Após esse entendimento, o código se torna reutilizável
  para diferentes problemas

- A utilização de métodos como map() e reduce() permite
  escrever soluções mais concisas e organizadas

---------------------------------------------------------------

🚀 POSSÍVEIS NOVOS PROJETOS:

- Sistema simples de média de alunos
- Cadastro com cálculo automático
- Análise de dados básicos via terminal
- Reaproveitamento da estrutura para outros cálculos

===============================================================
===============================================================
*/