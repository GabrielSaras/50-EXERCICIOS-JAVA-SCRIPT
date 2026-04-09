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
Data: 03 de Abril de 2026
Descritivo:6. Receba um número de 1 a 7 e exiba o dia da semana correspondente (use `switch`)
*******************************************************************************/


// Importa o módulo readline com suporte a promises
const readline = require("readline/promises");

// Função principal assíncrona
async function main() {

    // Cria a interface de entrada e saída no terminal
    const rl = readline.createInterface({
        input: process.stdin,   // Entrada (teclado)
        output: process.stdout, // Saída (terminal)
    });

    /*===========INICIO DO CÓDIGO===========*/

    // Solicita ao usuário um número de 1 a 7
    const input = await rl.question("Digite um número de 1 a 7: ");

    // Converte o valor digitado (string) para número variavel do tipo Number para comparação no switch
    const numero = Number(input);

    // Estrutura switch para verificar o  número digitado
    switch (numero) {
        /**switch que serve para comparar um valor com várias opções. */
        // Caso o número seja 1
        case 1: // Se o número for 1, exibe "Domingo"
            console.log("Domingo");// Exibe o dia da semana correspondente case palavra chave do switch
            break; // Interrompe o switch

        // Caso o número seja 2
        case 2:
            console.log("Segunda-feira");
            break;

        // Caso o número seja 3
        case 3:
            console.log("Terça-feira");
            break;

        // Caso o número seja 4
        case 4:
            console.log("Quarta-feira");
            break;

        // Caso o número seja 5
        case 5:
            console.log("Quinta-feira");
            break;

        // Caso o número seja 6
        case 6:
            console.log("Sexta-feira");
            break;

        // Caso o número seja 7
        case 7:
            console.log("Sábado");
            break;

        // Caso o número não esteja entre 1 e 7
        default:
            console.log("Número inválido! Digite de 1 a 7.");
    }

    // Fecha a interface para encerrar o programa
    rl.close();
}

// Chama a função principal para iniciar o programa
main();

/*===========COMO RODAR NO TERMINAL===========*/
// 1. Salve este código em um arquivo chamado exercicios06.js
// 2. Abra o terminal e navegue até o diretório onde o arquivo está salvo
// 3. Execute o comando: node exercicios06.js
// 4. Digite um número de 1 a 7 e pressione Enter para ver o resultado
/*
================================================================================
DOCUMENTAÇÃO DO CÓDIGO – DIAS DA SEMANA (SWITCH)
================================================================================
/*executar*/
// 1. Salve este código em um arquivo chamado exercicios06.js
// 2. Abra o terminal e navegue até o diretório onde o arquivo está salvo
// 3. Execute o comando: node exercicios06.js
// 4. Digite um número de 1 a 7 e pressione Enter para ver o resultado
/*
Neste código utilizamos a estrutura base do JavaScript em Node.js, 
com o uso do módulo readline para permitir a entrada de dados pelo usuário.

Foi utilizado o método rl.question para solicitar que o usuário digite 
um número de 1 a 7. Em seguida, o valor digitado foi armazenado na variável 
'input' e convertido para número na variável 'numero'.

Para a verificação, utilizamos a estrutura switch, que permite comparar 
o valor da variável 'numero' com diferentes opções.

Dentro do switch, utilizamos a palavra-chave 'case' acompanhada de valores 
de 1 a 7, representando os dias da semana. Para cada caso, utilizamos 
console.log para exibir o resultado correspondente.

O switch substitui o uso de múltiplos if...else, tornando o código mais 
organizado e de fácil leitura.

--------------------------------------------------------------------------------
IMPLEMENTAÇÃO DO LOOP
--------------------------------------------------------------------------------

Foi utilizada a estrutura de repetição do...while para permitir que o usuário 
digite múltiplos valores sem a necessidade de reiniciar o programa.

O uso do do...while garante que o código seja executado pelo menos uma vez, 
solicitando a entrada do usuário antes da verificação da condição.

O loop continua em execução até que o usuário digite "sair", momento em que 
o programa é encerrado.


/*
===============================================================================
                      REFLEXÃO SOBRE O EXERCÍCIO:
===============================================================================

Durante o desenvolvimento deste exercício, foi possível perceber que a 
linguagem JavaScript apresenta uma sintaxe mais simples em comparação com C, 
principalmente por não exigir a declaração explícita de tipos de variáveis.

Também foi identificado que erros na execução do programa estavam relacionados 
à nomeação de pastas e arquivos, o que impactava diretamente na compilação 
(erro MODULE_NOT_FOUND).

Além disso, foi possível compreender melhor o uso da estrutura switch, que 
organiza múltiplas condições de forma mais clara do que o uso de vários 
if...else.

Por fim, foi percebido que a utilização de estruturas de repetição, como 
while ou do...while, pode melhorar o programa, permitindo múltiplas entradas 
de dados e tornando a aplicação mais interativa.


================================================================================
*/