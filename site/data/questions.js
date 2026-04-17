/**
 * QuizAlgo Questions Database
 * FSC1189 - Algoritmos e Programação
 * Português Estruturado | Algoritmos | Lógica de Programação | Fluxogramas
 */

const QUESTIONS = {
  basico: [
    {
      id: 1,
      question: "O que é um algoritmo?",
      options: [
        "Uma linguagem de programação como Python",
        "Uma sequência finita e ordenada de instruções para resolver um problema",
        "Um tipo de variável em VisualG",
        "Um método de integração numérica"
      ],
      correct: 1,
      explanation: "Um algoritmo é uma sequência finita, ordenada e bem definida de passos que resolvem um problema específico. Ele é independente de linguagem de programação.",
      topic: "Conceitos Básicos"
    },
    {
      id: 2,
      question: "Qual símbolo representa uma 'decisão' (teste de condição) em um fluxograma?",
      options: [
        "Oval (●)",
        "Retângulo (□)",
        "Losango (◇)",
        "Paralelogramo (▭)"
      ],
      correct: 2,
      explanation: "O losango é usado para representar decisões (IF/ELSE). Oval representa início/fim, retângulo representa processos, paralelogramo representa entrada/saída.",
      topic: "Fluxogramas"
    },
    {
      id: 3,
      question: "Qual é o tipo de dado apropriado para armazenar a altura de uma pessoa em metros?",
      options: [
        "INTEIRO",
        "REAL",
        "CADEIA",
        "LOGICO"
      ],
      correct: 1,
      explanation: "REAL é usado para números decimais (como 1.75 m). INTEIRO seria inadequado pois altura geralmente tem casas decimais.",
      topic: "Tipos de Dados"
    },
    {
      id: 4,
      question: "Em VisualG, como se declara uma variável inteira?",
      options: [
        "var x = inteiro",
        "var x: inteiro",
        "inteiro x",
        "x <- inteiro"
      ],
      correct: 1,
      explanation: "A sintaxe correta em VisualG é 'var x: inteiro' ou 'var x, y, z: inteiro' para múltiplas variáveis.",
      topic: "Sintaxe VisualG"
    },
    {
      id: 5,
      question: "O que é uma variável?",
      options: [
        "Uma função que sempre retorna o mesmo valor",
        "Um espaço de memória que armazena um valor que pode mudar",
        "Um tipo de dados que não pode ser modificado",
        "Um comando de entrada de dados"
      ],
      correct: 1,
      explanation: "Uma variável é um identificador que aponta para um espaço na memória do computador onde um valor é armazenado e pode ser modificado durante a execução.",
      topic: "Variáveis"
    },
    {
      id: 6,
      question: "Qual operador é usado para 'E lógico' em VisualG?",
      options: [
        "||",
        "&&",
        "E",
        "AND"
      ],
      correct: 2,
      explanation: "Em VisualG usa-se 'E' ou 'e' para o operador lógico AND. Em Python seria '&&' ou 'and'.",
      topic: "Operadores Lógicos"
    },
    {
      id: 7,
      question: "O que faz a estrutura 'SE-SENÃO'?",
      options: [
        "Repetir um bloco de código várias vezes",
        "Executar diferentes blocos baseado em uma condição",
        "Declarar variáveis",
        "Fazer entrada de dados"
      ],
      correct: 1,
      explanation: "A estrutura SE-SENÃO (IF-ELSE) permite executar um bloco se a condição for verdadeira, ou outro bloco se for falsa.",
      topic: "Estruturas de Controle"
    },
    {
      id: 8,
      question: "Qual é a sintaxe correta de uma estrutura SE-SENÃO em VisualG?",
      options: [
        "if (condicao) { código } else { código }",
        "se condicao entao { código } senao { código } fimse",
        "SE condicao faça código SENÃO código",
        "if condicao then codigo else codigo"
      ],
      correct: 1,
      explanation: "A sintaxe de VisualG é 'se condicao entao ... senao ... fimse'. As palavras são em português.",
      topic: "Sintaxe VisualG"
    },
    {
      id: 9,
      question: "O que significa 'leia(x)' em VisualG?",
      options: [
        "Imprime o valor de x",
        "Recebe um valor digitado pelo usuário e armazena em x",
        "Deleta a variável x",
        "Compara x com outro valor"
      ],
      correct: 1,
      explanation: "'leia()' é o comando de entrada que permite o usuário digitar um valor que será armazenado na variável.",
      topic: "Entrada/Saída"
    },
    {
      id: 10,
      question: "O que faz 'escreva(x)' em VisualG?",
      options: [
        "Armazena x em um arquivo",
        "Recebe x do teclado",
        "Exibe/imprime o valor de x na tela",
        "Apaga x da memória"
      ],
      correct: 2,
      explanation: "'escreva()' é o comando de saída que exibe o valor da variável na tela para o usuário.",
      topic: "Entrada/Saída"
    },
    {
      id: 11,
      question: "Como se valida se um número está dentro de um intervalo [10, 20]?",
      options: [
        "se x > 10 entao",
        "se (x >= 10) e (x <= 20) entao",
        "se x = 10 ou x = 20 entao",
        "se x > 10 e x < 20 entao"
      ],
      correct: 1,
      explanation: "Para verificar se x está em [10, 20], usa-se (x >= 10) E (x <= 20). Ambos os limites devem estar inclusos (>=, <=).",
      topic: "Validação de Dados"
    },
    {
      id: 12,
      question: "Qual é o símbolo de atribuição em VisualG?",
      options: [
        "=",
        "==",
        "<-",
        ":="
      ],
      correct: 2,
      explanation: "Em VisualG usa-se '<-' (seta apontando para esquerda) para atribuição. Ex: x <- 5 atribui 5 a x.",
      topic: "Atribuição"
    },
    {
      id: 13,
      question: "Qual é a negação de 'x > 5'?",
      options: [
        "x < 5",
        "x != 5",
        "x <= 5",
        "NÃO x > 5"
      ],
      correct: 2,
      explanation: "A negação de 'x > 5' é 'x <= 5' (x menor ou igual a 5). O operador 'NÃO' em VisualG também funciona.",
      topic: "Lógica Booleana"
    },
    {
      id: 14,
      question: "Em um fluxograma, o que representa um retângulo?",
      options: [
        "Uma decisão",
        "Um processo ou atribuição",
        "Entrada ou saída",
        "Início ou fim"
      ],
      correct: 1,
      explanation: "O retângulo representa um processo ou uma atribuição de valor. Exemplo: 'x <- 10' ou 'calcular média'.",
      topic: "Fluxogramas"
    },
    {
      id: 15,
      question: "O que é pseudocódigo?",
      options: [
        "Um código que não funciona",
        "Uma representação informal de um algoritmo em linguagem próxima do português",
        "Uma linguagem de programação real",
        "Um tipo de erro de programa"
      ],
      correct: 1,
      explanation: "Pseudocódigo é uma forma de descrever um algoritmo usando uma linguagem legível por humanos, como Português Estruturado.",
      topic: "Conceitos Básicos"
    }
  ],

  intermediario: [
    {
      id: 16,
      question: "Qual a diferença entre 'PARA' e 'ENQUANTO'?",
      options: [
        "PARA é mais rápido que ENQUANTO",
        "PARA é usado quando o número de repetições é CONHECIDO; ENQUANTO quando é DESCONHECIDO",
        "ENQUANTO só funciona com números inteiros",
        "Não há diferença, são sinônimos"
      ],
      correct: 1,
      explanation: "PARA é usado para loops com número de iterações pré-definido. ENQUANTO é usado quando a repetição depende de uma condição dinâmica.",
      topic: "Estruturas de Repetição"
    },
    {
      id: 17,
      question: "Como se declara um vetor em VisualG?",
      options: [
        "var v: vetor[1..10] de real",
        "var v[10]: real",
        "array v: real[10]",
        "vetor v(1, 10) real"
      ],
      correct: 0,
      explanation: "A sintaxe correta é 'var v: vetor[1..10] de real', que declara um vetor de 10 elementos do tipo real, indexados de 1 a 10.",
      topic: "Vetores"
    },
    {
      id: 18,
      question: "O que é convergência de uma série?",
      options: [
        "Quando uma série aumenta de valor",
        "Quando os termos aproximam-se de um valor limite",
        "Quando a série para de funcionar",
        "Quando todos os termos são iguais"
      ],
      correct: 1,
      explanation: "Convergência significa que conforme adicionamos mais termos de uma série, o resultado aproxima-se cada vez mais de um valor específico.",
      topic: "Séries e Convergência"
    },
    {
      id: 19,
      question: "Na série de Leibniz π = 4(1 - 1/3 + 1/5 - 1/7 + ...), qual é o padrão do sinal dos termos?",
      options: [
        "Sempre positivo",
        "Sempre negativo",
        "Alternado: +, -, +, -, ...",
        "Aleatório"
      ],
      correct: 2,
      explanation: "A série de Leibniz tem sinais alternados devido ao fator (-1)^k, criando oscilação que converge para π.",
      topic: "Séries Numéricas"
    },
    {
      id: 20,
      question: "O que é produto escalar de dois vetores?",
      options: [
        "A soma dos módulos dos vetores",
        "A multiplicação de cada componente correspondente, somada",
        "Sempre um número negativo",
        "Apenas um conceito teórico sem aplicação"
      ],
      correct: 1,
      explanation: "Produto escalar (dot product) é: a⃗ · b⃗ = a_x*b_x + a_y*b_y + a_z*b_z. Resulta em um escalar (número).",
      topic: "Vetores"
    },
    {
      id: 21,
      question: "Qual é a sintaxe de um loop PARA em VisualG?",
      options: [
        "para i = 1 até 10 faça ... fimpara",
        "para (i = 1; i <= 10; i++) { ... }",
        "for i in range(1, 11): ...",
        "para i de 1 ate 10 faca ... fimpara"
      ],
      correct: 3,
      explanation: "A sintaxe correta em VisualG é 'para i de 1 ate 10 faca ... fimpara' (sem parênteses, em português).",
      topic: "Sintaxe VisualG"
    },
    {
      id: 22,
      question: "O que faz 'mod' em programação?",
      options: [
        "Modifica um valor",
        "Retorna o RESTO da divisão",
        "Retorna o QUOCIENTE da divisão",
        "Modula um valor"
      ],
      correct: 1,
      explanation: "'mod' (módulo) retorna o resto de uma divisão. Ex: 17 mod 5 = 2, pois 17 = 3*5 + 2.",
      topic: "Operadores"
    },
    {
      id: 23,
      question: "Como se acessa o elemento na posição 3 de um vetor 'v'?",
      options: [
        "v(3)",
        "v[3]",
        "v.3",
        "v{3}"
      ],
      correct: 1,
      explanation: "Em VisualG, acessa-se com v[3]. A indexação começa em 1 por padrão (diferente de linguagens como Python).",
      topic: "Vetores"
    },
    {
      id: 24,
      question: "O que é uma função?",
      options: [
        "Um bloco de código que NÃO retorna valor",
        "Um bloco de código reutilizável que pode retornar um valor",
        "Um tipo de variável",
        "Um comando de entrada"
      ],
      correct: 1,
      explanation: "Uma função é um bloco de código nomeado que recebe parâmetros, executa operações e retorna um resultado.",
      topic: "Funções"
    },
    {
      id: 25,
      question: "Qual é a diferença entre função e procedimento?",
      options: [
        "São a mesma coisa",
        "Função RETORNA um valor; procedimento NÃO retorna",
        "Procedimento é mais lento",
        "Função só com números inteiros"
      ],
      correct: 1,
      explanation: "Função retorna um valor (usa 'retorne'); procedimento não retorna (apenas executa ações).",
      topic: "Funções e Procedimentos"
    },
    {
      id: 26,
      question: "Como se chama uma função em VisualG?",
      options: [
        "executar nome_funcao(argumentos)",
        "resultado <- nome_funcao(argumentos)",
        "chamar nome_funcao(argumentos)",
        "nome_funcao(argumentos)"
      ],
      correct: 1,
      explanation: "Se a função retorna um valor, usa-se: resultado <- nome_funcao(argumentos). Sem atribuição, executar sozinho também funciona.",
      topic: "Funções"
    },
    {
      id: 27,
      question: "O que é depuração (debugging)?",
      options: [
        "Executar um programa muito rápido",
        "Processo de encontrar e corrigir erros em um programa",
        "Deletar partes do código",
        "Compilar o código"
      ],
      correct: 1,
      explanation: "Debugging é o processo sistemático de encontrar e corrigir erros (bugs) usando ferramentas como breakpoints e inspeção de variáveis.",
      topic: "Depuração"
    },
    {
      id: 28,
      question: "O que significa O(n) em complexidade Big-O?",
      options: [
        "Tempo constante",
        "Tempo linear — cresce proporcionalmente com n",
        "Tempo quadrático",
        "Tempo exponencial"
      ],
      correct: 1,
      explanation: "O(n) significa complexidade linear: se n dobra, o tempo também dobra. Exemplo: busca linear em uma lista.",
      topic: "Complexidade de Algoritmos"
    },
    {
      id: 29,
      question: "Qual estrutura de repetição executa o bloco pelo menos uma vez?",
      options: [
        "PARA",
        "ENQUANTO",
        "REPETIR ... ATÉ",
        "Nenhuma"
      ],
      correct: 2,
      explanation: "REPETIR ... ATÉ testa a condição no final, garantindo pelo menos uma execução do bloco.",
      topic: "Estruturas de Repetição"
    },
    {
      id: 30,
      question: "Como se soma todos os elementos de um vetor?",
      options: [
        "soma = v",
        "soma <- 0; para i de 1 ate tamanho faca soma <- soma + v[i] fimpara",
        "soma = v.sum()",
        "sum(v)"
      ],
      correct: 1,
      explanation: "Usa-se um acumulador: inicialize em 0, depois para cada elemento, adicione ao acumulador.",
      topic: "Vetores"
    }
  ],

  avancado: [
    {
      id: 31,
      question: "O que é o método da bisseção?",
      options: [
        "Uma forma de dividir vetores",
        "Um algoritmo para encontrar raízes de uma função em um intervalo",
        "Uma operação de matriz",
        "Um tipo de integração numérica"
      ],
      correct: 1,
      explanation: "Bisseção encontra a raiz de f(x)=0 dividindo repetidamente um intervalo [a,b] até convergir. Sempre converge se f(a)*f(b) < 0.",
      topic: "Métodos Numéricos"
    },
    {
      id: 32,
      question: "Qual é o erro do método de trapézio para integração numérica?",
      options: [
        "O(h)",
        "O(h²)",
        "O(h³)",
        "O(h⁴)"
      ],
      correct: 1,
      explanation: "O trapézio tem erro O(h²). Simpson é mais preciso com O(h⁴). Retângulo tem erro O(h).",
      topic: "Integração Numérica"
    },
    {
      id: 33,
      question: "O que é diferenciação numérica?",
      options: [
        "Diferenciar dois programas",
        "Aproximar a derivada f'(x) usando valores numéricos de f",
        "Encontrar integrais",
        "Resolver equações diferenciais"
      ],
      correct: 1,
      explanation: "Diferenciação numérica aproxima f'(x) com diferenças finitas: progressiva, regressiva ou central.",
      topic: "Diferenciação Numérica"
    },
    {
      id: 34,
      question: "Qual método de diferenciação é mais preciso?",
      options: [
        "Diferença progressiva",
        "Diferença regressiva",
        "Diferença central",
        "Todos têm a mesma precisão"
      ],
      correct: 2,
      explanation: "Diferença central f'(x) ≈ [f(x+h) - f(x-h)]/(2h) tem erro O(h²), melhor que progressiva/regressiva que têm O(h).",
      topic: "Diferenciação Numérica"
    },
    {
      id: 35,
      question: "O que é o método de Euler para resolver EDO?",
      options: [
        "Um método de integração",
        "Um algoritmo que aproxima a solução de y' = f(t,y) passo a passo",
        "Uma operação com matrizes",
        "Um teste de convergência"
      ],
      correct: 1,
      explanation: "Euler discretiza a EDO: y(t+Δt) ≈ y(t) + f(t,y)*Δt. Simples mas lento (O(Δt)).",
      topic: "EDO"
    },
    {
      id: 36,
      question: "O que é regressão linear?",
      options: [
        "Um movimento para trás",
        "Ajuste de uma reta y = ax + b aos dados para estimar relação linear",
        "Remover dados",
        "Teste de hipótese"
      ],
      correct: 1,
      explanation: "Regressão linear encontra a reta que melhor aproxima os dados usando critério de mínimos quadrados.",
      topic: "Análise de Dados"
    },
    {
      id: 37,
      question: "O que mede o coeficiente R² em regressão?",
      options: [
        "O coeficiente angular",
        "Qualidade do ajuste — proximidade dos dados à reta (0 a 1)",
        "O intercepto",
        "A velocidade de convergência"
      ],
      correct: 1,
      explanation: "R² varia de 0 a 1. R²=1 significa ajuste perfeito. R²=0.5 significa qualidade média.",
      topic: "Análise de Dados"
    },
    {
      id: 38,
      question: "Como detectar outliers usando regra 3σ?",
      options: [
        "Valores |x - μ| < 3σ",
        "Valores |x - μ| > 3σ",
        "Valores x > 3",
        "Valores com mais de 3 dígitos"
      ],
      correct: 1,
      explanation: "Outliers são valores cujo desvio da média é maior que 3 desvios padrão. Esta é a regra 3-sigma para dados normais.",
      topic: "Análise Estatística"
    },
    {
      id: 39,
      question: "O que é IQR (intervalo interquartil)?",
      options: [
        "Diferença entre Q1 e Q3",
        "Diferença entre mínimo e máximo",
        "Desvio padrão",
        "Mediana"
      ],
      correct: 0,
      explanation: "IQR = Q3 - Q1. Outliers por IQR: valores < Q1-1.5*IQR ou > Q3+1.5*IQR.",
      topic: "Análise Estatística"
    },
    {
      id: 40,
      question: "Qual complexidade tem a busca binária?",
      options: [
        "O(n)",
        "O(n²)",
        "O(log n)",
        "O(1)"
      ],
      correct: 2,
      explanation: "Busca binária tem complexidade O(log n). Para n=1000000, apenas ~20 comparações são necessárias.",
      topic: "Complexidade de Algoritmos"
    },
    {
      id: 41,
      question: "O que é uma EDO (Equação Diferencial Ordinária)?",
      options: [
        "Uma equação algébrica simples",
        "Uma equação que envolve derivadas de uma variável independente",
        "Um tipo de integral",
        "Uma operação de matriz"
      ],
      correct: 1,
      explanation: "EDO é uma equação com derivadas, como y' = f(t,y). Descreve taxa de mudança.",
      topic: "EDO"
    },
    {
      id: 42,
      question: "No pêndulo simples, qual é a equação diferencial linearizada?",
      options: [
        "θ' + (g/L)θ = 0",
        "θ'' + (g/L)sin(θ) = 0",
        "θ'' + (g/L)θ = 0",
        "θ = (g/L)t²"
      ],
      correct: 2,
      explanation: "Para pequenas oscilações (θ < 15°), sin(θ) ≈ θ, resultando em θ'' + (g/L)θ = 0.",
      topic: "Pêndulo"
    },
    {
      id: 43,
      question: "Qual é a fórmula teórica do período de um pêndulo simples?",
      options: [
        "T = πL",
        "T = 2π√(L/g)",
        "T = 2π√(g/L)",
        "T = √(g/L)"
      ],
      correct: 1,
      explanation: "T = 2π√(L/g) depende do comprimento L e gravidade g, NÃO da massa ou amplitude (para pequenos ângulos).",
      topic: "Pêndulo"
    },
    {
      id: 44,
      question: "O que é interpolação linear?",
      options: [
        "Encontrar uma reta entre dois pontos",
        "Estimar um valor entre dois pontos conhecidos usando uma reta",
        "Remover pontos de dados",
        "Integrar uma função"
      ],
      correct: 1,
      explanation: "Interpolação linear estima f(x) entre x₁ e x₂ conhecidos usando a reta que passa pelos dois pontos.",
      topic: "Análise de Dados"
    },
    {
      id: 45,
      question: "No método de Simpson, qual é a ordem de precisão?",
      options: [
        "O(h)",
        "O(h²)",
        "O(h³)",
        "O(h⁴)"
      ],
      correct: 3,
      explanation: "Simpson usa parábolas (polinômios de grau 2) e tem erro O(h⁴), muito mais preciso que Trapézio O(h²).",
      topic: "Integração Numérica"
    }
  ],

  ninja: [
    {
      id: 46,
      question: "Qual é a complexidade Big-O do algoritmo bubble sort?",
      options: [
        "O(n log n)",
        "O(n²)",
        "O(n)",
        "O(1)"
      ],
      correct: 1,
      explanation: "Bubble sort compara e troca elementos adjacentes, necessitando O(n²) comparações no pior caso.",
      topic: "Complexidade de Algoritmos"
    },
    {
      id: 47,
      question: "Qual é a relação entre Big-O, Ω (big omega) e Θ (big theta)?",
      options: [
        "São sinônimos",
        "O = pior caso, Ω = melhor caso, Θ = caso médio",
        "O = limite superior, Ω = limite inferior, Θ = limite exato",
        "Não existem diferenças reais"
      ],
      correct: 2,
      explanation: "O(n) é limite superior, Ω(n) é limite inferior, Θ(n) é quando ambos coincidem (crescimento exato).",
      topic: "Complexidade de Algoritmos"
    },
    {
      id: 48,
      question: "No oscilador amortecido y'' + 2β·y' + ω₀²·y = 0, qual regime ocorre quando β = ω₀?",
      options: [
        "Subamortecido (oscila)",
        "Criticamente amortecido (retorna sem oscilar)",
        "Superamortecido (retorna lentamente)",
        "Instável"
      ],
      correct: 1,
      explanation: "β = ω₀ é amortecimento crítico — o sistema retorna ao equilíbrio no menor tempo sem oscilar.",
      topic: "Oscilador Amortecido"
    },
    {
      id: 49,
      question: "O que acontece quando a constante de amortecimento β > ω₀?",
      options: [
        "Oscilação com amplitude crescente",
        "Oscilação com amplitude decrescente",
        "Retorno lento ao equilíbrio sem oscilar",
        "Sistema explode"
      ],
      correct: 2,
      explanation: "β > ω₀ é superamortecimento. A força de dissipação é tão forte que impede oscilações.",
      topic: "Oscilador Amortecido"
    },
    {
      id: 50,
      question: "Em um circuito RC, qual é a constante de tempo τ?",
      options: [
        "τ = R + C",
        "τ = R × C",
        "τ = R / C",
        "τ = 1/(R × C)"
      ],
      correct: 1,
      explanation: "τ = RC. Após tempo τ, o capacitor alcança ~63% da carga máxima.",
      topic: "Circuito RC"
    },
    {
      id: 51,
      question: "Qual é a solução analítica para carga do capacitor em circuito RC?",
      options: [
        "V_c(t) = V₀ · e^(-t/RC)",
        "V_c(t) = V₀(1 - e^(-t/RC))",
        "V_c(t) = V₀ · t/RC",
        "V_c(t) = V₀/RC"
      ],
      correct: 1,
      explanation: "V_c(t) = V₀(1 - e^(-t/RC)) descreve carga do capacitor. Começa em 0 e aproxima-se de V₀.",
      topic: "Circuito RC"
    },
    {
      id: 52,
      question: "O que representa o fator de qualidade Q em um oscilador?",
      options: [
        "Quantidade de energia armazenada / energia dissipada por ciclo",
        "Frequência máxima",
        "Amplitude inicial",
        "Tempo de decaimento"
      ],
      correct: 0,
      explanation: "Q = energia armazenada / energia dissipada por ciclo. Q alto = pouco amortecimento; Q baixo = muito amortecimento.",
      topic: "Oscilador Amortecido"
    },
    {
      id: 53,
      question: "Qual é a relação entre período teórico e período medido em pêndulo real?",
      options: [
        "São sempre iguais",
        "Medido é maior (pêndulo amortecido oscila mais lentamente)",
        "Teórico é maior (fórmula não inclui atrito)",
        "Não há relação"
      ],
      correct: 2,
      explanation: "A fórmula T=2π√(L/g) ignora atrito. Na prática, o amortecimento aumenta o período ligeiramente.",
      topic: "Pêndulo"
    },
    {
      id: 54,
      question: "O que é o método RK4 (Runge-Kutta de 4ª ordem)?",
      options: [
        "Método de integração com erro O(h⁴)",
        "Um tipo de regressão",
        "Uma série numérica",
        "Um detector de outliers"
      ],
      correct: 0,
      explanation: "RK4 é método para resolver EDO com erro O(h⁴) — muito mais preciso que Euler O(h) mas mais complexo.",
      topic: "EDO"
    },
    {
      id: 55,
      question: "Em simulação de projétil com arrasto, qual força é representada por F_drag = -β·v²?",
      options: [
        "Força gravitacional",
        "Força de arrasto / resistência do ar",
        "Força de Coriolis",
        "Força de fricção estática"
      ],
      correct: 1,
      explanation: "F_drag = -β·v² descreve resistência do ar quadrática em v. Torna a trajetória menos parabólica.",
      topic: "Simulação Física"
    },
    {
      id: 56,
      question: "Qual é a propriedade conservada em órbita planetária (sem arrasto)?",
      options: [
        "Só energia",
        "Só momentum angular",
        "Energia e momentum angular",
        "Nenhuma propriedade é conservada"
      ],
      correct: 2,
      explanation: "Em sistema conservativo, energia total (cinética + potencial) e momentum angular L = r × p são conservados.",
      topic: "Órbita Planetária"
    },
    {
      id: 57,
      question: "Qual Lei de Kepler relaciona período com semi-eixo maior?",
      options: [
        "Primeira Lei (órbitas elípticas)",
        "Segunda Lei (velocidade areal)",
        "Terceira Lei: T² ∝ a³",
        "Nenhuma das anteriores"
      ],
      correct: 2,
      explanation: "Terceira Lei de Kepler: T² = (4π²/GM)·a³. Período² proporcional a semi-eixo-maior³.",
      topic: "Órbita Planetária"
    },
    {
      id: 58,
      question: "O que é potencial de Lennard-Jones?",
      options: [
        "V(r) = -GM·m/r",
        "V(r) = 4ε[(σ/r)¹² - (σ/r)⁶]",
        "V(r) = k·x²",
        "V(r) = m·g·h"
      ],
      correct: 1,
      explanation: "Lennard-Jones V(r) = 4ε[(σ/r)¹² - (σ/r)⁶] modela interação entre partículas neutras: repulsão (r¹²) + atração (r⁶).",
      topic: "Dinâmica Molecular"
    },
    {
      id: 59,
      question: "Em análise numérica, qual é o 'passo' (dt ou h) ideal?",
      options: [
        "O maior possível para ser rápido",
        "Sempre 0.001",
        "Maior o passo, maior a precisão",
        "Balanço: pequeno para precisão, grande para rapidez"
      ],
      correct: 3,
      explanation: "Passo pequeno → mais preciso mas mais lento. Passo grande → rápido mas impreciso. Deve-se validar convergência.",
      topic: "Métodos Numéricos"
    },
    {
      id: 60,
      question: "Como validar se um resultado numérico está correto?",
      options: [
        "Confiar cegamente no computador",
        "Comparar com solução analítica, testar variações de parâmetros",
        "Executar uma única vez",
        "Aumentar o número de iterações indefinidamente"
      ],
      correct: 1,
      explanation: "Validação inclui: (1) comparação com solução analítica; (2) teste de convergência (variar h); (3) verificar conservação de leis físicas.",
      topic: "Validação de Resultados"
    }
  ]
};

// Função auxiliar para embaralhar (Fisher-Yates)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Função para obter X questões aleatórias de um nível
function getRandomQuestions(level, count = 10) {
  const levelQuestions = QUESTIONS[level] || QUESTIONS.basico;
  const shuffled = shuffleArray(levelQuestions);
  return shuffled.slice(0, Math.min(count, levelQuestions.length));
}

// Função para obter todas as questões de um nível
function getAllQuestions(level) {
  return QUESTIONS[level] || [];
}

// Stats
console.log(`QuizAlgo Database loaded:`);
console.log(`  Básico: ${QUESTIONS.basico.length} questões`);
console.log(`  Intermediário: ${QUESTIONS.intermediario.length} questões`);
console.log(`  Avançado: ${QUESTIONS.avancado.length} questões`);
console.log(`  Ninja: ${QUESTIONS.ninja.length} questões`);
console.log(`  Total: ${QUESTIONS.basico.length + QUESTIONS.intermediario.length + QUESTIONS.avancado.length + QUESTIONS.ninja.length} questões`);
