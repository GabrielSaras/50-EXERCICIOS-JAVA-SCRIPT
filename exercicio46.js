
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
Descritivo:46. Crie uma Higher-Order Function que receba uma função e retorne outra função que execute a primeira
duas vezes.
*******************************************************************************/

//==================BASE DO CÓDIGO====================


// Importa o módulo readline com suporte a Promises
const readline = require("readline/promises");

// Função principal assíncrona
async function main() {

    // Criando a interface de leitura
    const rl = readline.createInterface({
        input: process.stdin,   // entrada padrão (teclado)
        output: process.stdout, // saída padrão (terminal)
    });
    //==================FUNÇÕES====================

    // Função base que será utilizada (recebe um valor e exibe mensagem)
    const mensagem = (nome) => {
        console.log(`Olá, ${nome}!`);
    };

    // Higher-Order Function:
    // recebe uma função como parâmetro
    const executarDuasVezes = (funcao) => {

        // retorna uma nova função
        return (valor) => {

            // primeira execução da função recebida
            funcao(valor);

            // segunda execução da função recebida
            funcao(valor);
        };
    };

    // Cria uma nova função baseada na HOF
    const repetirMensagem = executarDuasVezes(mensagem);// Higher-Order Function que retorna uma função que executa a função original duas vezes

    // Solicita um nome ao usuário
    const nome = await rl.question("Digite um nome: ");

    // Executa a nova função (que chama a original duas vezes)
    repetirMensagem(nome);

    // Fecha a interface de leitura
    rl.close();
}

// Executa a função principal
main();

/*
==================== DOCUMENTAÇÃO TÉCNICA ====================
como executar:

1. Salve o código em um arquivo chamado "exercicios046.js".
2. Abra o terminal e navegue até o diretório onde o arquivo está salvo.
3. Execute o comando: node exercicios046.js
4. Siga as instruções no terminal para digitar um nome.
5. Observe a saída, onde a mensagem será exibida duas vezes.

📌 OBJETIVO:
Criar uma Higher-Order Function (HOF) que receba uma função
como parâmetro e retorne outra função que execute a função
original duas vezes.

---------------------------------------------------------------

🏗️ ESTRUTURA DO CÓDIGO:

1. Importação de módulo
   → readline/promises

2. Função principal (async)
   → controle de fluxo com await

3. Definição da função base
   → função simples (mensagem)

4. Definição da Higher-Order Function
   → recebe função como argumento
   → retorna nova função

5. Criação da função derivada
   → executarDuasVezes(mensagem)

6. Entrada de dados
   → rl.question()

7. Execução da função retornada
   → chamada com parâmetro

8. Encerramento
   → rl.close()

---------------------------------------------------------------

⚙️ FORMA DE CODIFICAÇÃO:

- Paradigma: funcional
- Funções como valores (first-class functions)
- Higher-Order Function:
  → função que recebe outra função ou retorna uma função

- Arrow Functions:
  → sintaxe simplificada

---------------------------------------------------------------

🔄 FLUXO DE EXECUÇÃO:

mensagem → HOF → nova função → execução duplicada

---------------------------------------------------------------

📊 NÍVEL DE DIFICULDADE:

- Função simples → FÁCIL
- Arrow Function → MÉDIO
- Higher-Order Function → MÉDIO/ALTO
- Retorno de função → ALTO

---------------------------------------------------------------

⚠️ PRINCIPAIS DIFICULDADES:

- Entender que função pode ser passada como parâmetro
- Compreender que uma função pode retornar outra função
- Visualizar o fluxo indireto de execução
- Diferenciar criação e execução da função

---------------------------------------------------------------

🛠️ SOLUÇÕES ADOTADAS:

- Separação clara entre função base e HOF
- Uso de nomes descritivos
- Execução explícita da função duas vezes
- Estrutura simples para facilitar entendimento

---------------------------------------------------------------

📈 PERCEPÇÃO DE MELHORIAS:

- Generalizar para executar N vezes
- Criar funções reutilizáveis
- Aplicar em validações e processamento de dados

---------------------------------------------------------------

🚀 GUIA RÁPIDO:

const novaFuncao = executarDuasVezes(funcaoOriginal);

novaFuncao(valor);

→ função original executada duas vezes

---------------------------------------------------------------

🎯 CONCLUSÃO:

O uso de Higher-Order Functions permite abstrair comportamentos
e reutilizar lógica, tornando o código mais flexível e modular.

===============================================================
*/