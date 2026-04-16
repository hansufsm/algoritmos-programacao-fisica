# Plano de Aula: Estruturas de Dados em Algoritmos e Programação

**Disciplina:** FSC1189 - Algoritgoritmos e Programação  
**Curso:** Licenciatura em Física  
**Nível:** Graduação  
**Carga Horária:** 6 horas (3 blocos de 2 horas)  
**Foco:** Programação como ferramenta de solução de problemas em Física  

---

## 1. Acompanhamento

| Data da Aula Ministrada | Assunto que foi tratado dentro desse documento e observações |
| ----------------------- | ------------------------------------------------------------ |
| <br><br>                |                                                              |
| <br><br>                |                                                              |
| <br><br>                |                                                              |
| <br><br>                |                                                              |
| <br><br>                |                                                              |

---

## 2. Identificação

| Campo | Descrição |
|---|---|
| Tema | Estruturas de dados: variáveis simples, variáveis compostas unidimensionais, multidimensionais e heterogêneas |
| Público-alvo | Estudantes iniciantes em algoritmo e programação — Licenciatura em Física |
| Pré-requisitos | Noções básicas de variáveis e tipos de dados |
| Modalidade | Presencial com atividades práticas computacionais |
| Material necessário | Computador com Visualg, projetor, tabelas impressas com dados experimentais, roteiro de exercícios |

## 3. Objetivo da Aula

Capacitar os licenciandos em Física a desenvolver o raciocínio lógico-algorítmico e a aplicar os fundamentos da programação estruturada, utilizando o Portugol e o ambiente VisuAlg. O foco é instrumentalizar o futuro professor de Física com ferramentas computacionais para modelar, simular e analisar fenômenos físicos, preparando-o para a resolução de problemas didáticos e de pesquisa em sua área.

**Objetivos Específicos**

Ao final da aula, o estudante será capaz de:

- Declarar variáveis simples e estruturas compostas;
- Diferenciar vetor, matriz e registro quanto à organização e ao uso;
- Acessar e modificar elementos por índice;
- Percorrer conjuntos de dados utilizando estruturas de repetição;
- Modelar um problema físico simples utilizando a estrutura de dados mais adequada;
- Implementar soluções básicas para armazenamento e organização de dados coletados em experimentos de Física.
- Compreender a importância da organização de dados para a representação de fenômenos físicos.
- Identificar e aplicar variáveis para armazenar dados escalares em problemas de Física.
- Utilizar vetores para representar sequências de medições, séries temporais ou conjuntos de dados unidimensionais.
- Empregar matrizes para organizar dados experimentais em tabelas, grades de medições ou sistemas bidimensionais.
- Definir e manipular registros para modelar objetos físicos complexos com múltiplos atributos.
- Desenvolver algoritmos em Portugol/VisuAlg que integrem diferentes estruturas de dados para solucionar problemas físicos de complexidade crescente.
- Analisar a eficiência e a adequação da escolha de uma estrutura de dados para um dado problema físico.

## 4. Justificativa Pedagógica

A formação do professor de Física contemporâneo exige não apenas o domínio dos conceitos teóricos e experimentais, mas também a capacidade de utilizar e desenvolver ferramentas computacionais. A introdução à lógica de programação via Portugol/VisuAlg oferece uma transição suave do pensamento científico para o pensamento computacional, minimizando a barreira sintática de linguagens de programação mais complexas. Ao contextualizar os problemas algorítmicos em cenários da Física, estimula-se a compreensão de que a programação é uma extensão natural da metodologia científica, essencial para a análise de dados experimentais, a construção de modelos e a simulação de sistemas físicos, competências cruciais para a docência e a pesquisa.

## 5. Metodologia

A abordagem pedagógica será centrada na resolução de problemas, seguindo o ciclo **problema físico → representação computacional → implementação algorítmica**.

- **Aula expositiva dialogada:** Apresentação dos conceitos teóricos com exemplos práticos e contextualizados em Física, incentivando a participação dos alunos.
- **Atividade guiada:** Resolução de problemas passo a passo em sala de aula, com o professor demonstrando a construção do algoritmo no VisuAlg e os alunos replicando e experimentando.
- **Trabalho em duplas/grupos:** Resolução de exercícios propostos em laboratório, promovendo a colaboração e a discussão entre os estudantes.
- **Teste e discussão de erros:** Análise conjunta de erros comuns na programação e estratégias de depuração, enfatizando a importância da validação dos resultados.

## 6. Problemas Motivadores de Física

A Física, em sua essência, é a ciência da medição, da observação e da modelagem de fenômenos naturais. Para que um físico possa analisar dados experimentais, simular sistemas ou prever comportamentos, é fundamental que ele saiba como organizar e manipular grandes volumes de informação. As estruturas de dados em programação são as ferramentas conceituais que nos permitem fazer isso de forma eficiente.

Variáveis, vetores, matrizes e registros não são apenas conceitos abstratos da computação; eles são a ponte entre um problema físico do mundo real e sua representação computacional. Um vetor pode representar uma série de medições de temperatura ao longo do tempo, uma matriz pode armazenar os valores de um campo elétrico em uma grade bidimensional, e um registro pode descrever completamente as propriedades de uma partícula em um simulador. A escolha da estrutura de dados correta não só simplifica a escrita do algoritmo, mas também reflete uma compreensão profunda do problema físico em questão. Este plano de aula visa equipar o futuro professor de Física com essa capacidade essencial, utilizando o ambiente didático do VisuAlg para solidificar a lógica antes de avançar para linguagens mais complexas.

## 7. Conteúdo programático

- **Bloco 1: Variáveis e vetores**
  - Conceito de variável e tipo de dados.
  - Declaração e atribuição de valores.
  - Introdução a vetores (arrays unidimensionais).
  - Indexação e iteração em vetores.
  - Aplicações em séries de medições físicas.
- **Bloco 2: Matrizes**
  - Conceito de matriz (arrays bidimensionais).
  - Declaração e manipulação de elementos.
  - Iteração com laços aninhados.
  - Aplicações em tabelas de dados experimentais e grades.
- **Bloco 3: Registros e integração**
  - Conceito de registro (structs).
  - Declaração de tipos e variáveis de registro.
  - Acesso a campos de registro.
  - Vetores de registros.
  - Integração de estruturas para modelagem de objetos físicos.

Para ilustrar a necessidade e a utilidade da programação, consideremos os seguintes cenários:

### 6.1 Problema 1: Análise de Dados Experimentais Repetitivos

Imagine que, em um experimento de queda livre, você mede o tempo que um objeto leva para cair de uma certa altura por 5 vezes. Como armazenar esses 5 valores de forma organizada e, posteriormente, calcular a média ou o desvio padrão sem ter que criar uma variável para cada medição? E se fossem 100 medições?

### 6.2 Problema 2: Organização de Dados de Múltiplas Variáveis

Em um laboratório de Física, você realiza um experimento onde mede a posição de um carrinho em diferentes instantes de tempo, para várias massas distintas. Como organizar esses dados de forma que você possa acessar facilmente a posição do carrinho no instante $t=2s$ quando a massa era $m=0.5kg$ ? Ou como visualizar uma tabela completa de resultados?

### 6.3 Problema 3: Representação Computacional de um Objeto Físico

Ao simular o movimento de um projétil, você precisa que o "projétil" tenha propriedades como massa, posição inicial e velocidade inicial. Como agrupar essas características em uma única "entidade" computacional para que você possa manipulá-la como um todo, em vez de lidar com variáveis soltas?

## 8. Fundamentação teórica

### 8.1 Variáveis e Tipos de Dados

**Conceito:** Variáveis são "caixas" na memória do computador que armazenam valores. Cada caixa tem um nome e um tipo primitivo (número inteiro, número real, texto, lógico).
**Relação com a Física:** Medições (tempo, massa, temperatura), constantes físicas (gravidade, velocidade da luz), rótulos de experimentos.

### 8.2 Estruturas de Controle

* **Sequência:** Ações executadas uma após a outra.
  - **Relação com a Física:** Passos de um protocolo experimental, cálculo de uma fórmula.
- **Condição (Se-Então-Senão):** Executa um bloco de código se uma condição for verdadeira.
  - **Relação com a Física:** Decidir se um valor está dentro de uma faixa aceitável, aplicar uma lei diferente dependendo do estado do sistema (e.g., atrito estático vs. cinético).
- **Repetição (Para, Enquanto, Repita):** Executa um bloco de código várias vezes.
  - **Relação com a Física:** Realizar múltiplas medições, iterar em um cálculo numérico, simular o tempo passo a passo.

### 8.3 Estruturas de Dados Homogêneas: Vetores e Matrizes

**Variáveis compostas unidimensionais**

Variáveis compostas unidimensionais são estruturas de dados que reúnem um **conjunto** de **valores do mesmo tipo** em uma única variável lógica, organizada linearmente. Em vez de declarar várias variáveis separadas para armazenar dados semelhantes, **utiliza-se uma única estrutura indexada,** o que facilita a organização, o acesso e o processamento das informações. Na literatura de lógica de programação, essa organização aparece como uma forma mais adequada de representar **coleções homogêneas de dados**, especialmente quando os valores representam medições repetidas de uma mesma grandeza física.

Do ponto de vista prático, esse tipo de estrutura permite armazenar, por exemplo, vários tempos de queda, várias temperaturas medidas em um laboratório ou várias posições de um móvel em instantes sucessivos. Cada posição da estrutura é acessada por um índice, o que torna possível percorrer os elementos em sequência, calcular somas, médias, máximos e mínimos, ou ainda aplicar tratamentos específicos a cada elemento.

#### 8.3.1 Esquema de representação

```text
vetor[1]  vetor[2]  vetor[3]  vetor[4]  vetor[5]
   |         |         |         |         |
  2,1      2,3       2,0       2,2       2,4
```

#### 8.3.2 Declaração geral

```text
var
   nome: vetor[1..n] de tipo
```

#### 8.3.3 Manipulação básica

A manipulação de variáveis compostas unidimensionais envolve, em geral:

- declaração da estrutura;
- atribuição de valores a cada posição;
- leitura dos elementos por meio de índices;
- processamento com laços de repetição;
- tratamento dos dados armazenados.

Esse processo é central na construção de algoritmos, pois permite automatizar operações repetitivas e reduzir o número de variáveis independentes no código. Na prática, isso melhora a legibilidade e evita erros de manutenção.

**Resumo:** Permitem armazenar múltiplos valores do *mesmo tipo* sob um único nome, acessíveis por um índice.
- **Vetores (Arrays Unidimensionais):** Listas de valores.
  - **Relação com a Física:** Resposta ao Problema 1. Armazenar uma série de medições de uma única grandeza (e.g., tempos de queda, leituras de temperatura ao longo do tempo).
- **Matrizes (Arrays Bidimensionais):** Tabelas de valores.
  - **Relação com a Física:** Resposta ao Problema 2. Organizar dados experimentais em tabelas (e.g., posição vs. tempo para diferentes massas, dados de calibração de um sensor).

### 8.4 Estruturas de Dados Heterogêneas: Registros

Variáveis compostas heterogêneas são estruturas que agrupam informações de tipos diferentes em uma mesma entidade lógica. Diferentemente dos vetores e matrizes, que armazenam valores homogêneos, essas estruturas permitem reunir, em um único registro, dados como texto, números inteiros, reais e até outros conjuntos de dados. Esse recurso é importante quando se deseja representar um objeto, sistema ou experimento com várias propriedades distintas.

Na organização de algoritmos, as variáveis heterogêneas são fundamentais para modelar entidades reais de maneira mais fiel. Em Física, um corpo pode ser descrito por nome, massa, posição, velocidade e tempo de observação; um experimento pode conter identificação, número de medidas, condições iniciais e uma coleção de valores associados. O uso de registros permite estruturar essas informações de forma coerente e próxima da realidade física representada.

#### 8.4.1 Esquema de registro

```text
registro Corpo
   nome: caractere
   massa: real
   posicao: real
   velocidade: real
fimregistro
```

#### 8.4.2 Diagrama conceitual

```text
Corpo
├── nome
├── massa
├── posicao
└── velocidade
```

#### 8.4.3 Observação teórica

A vantagem principal das variáveis compostas heterogêneas está na capacidade de representar uma entidade completa, unificando atributos que pertencem ao mesmo objeto ou processo. Em vez de dispersar dados em variáveis independentes, o registro organiza o conteúdo em uma estrutura semanticamente mais clara, o que favorece a manutenção do código, a leitura do algoritmo e a modelagem de problemas reais.

**Resumo:** Permitem agrupar múltiplos valores de *tipos diferentes* sob um único nome, acessíveis por campos.
- **Relação com a Física:** Resposta ao Problema 3. Representar um objeto físico (corpo, partícula, experimento) com suas diversas propriedades (massa, velocidade, nome, data).

## 9. Aplicação ao ensino de Física

No contexto da Licenciatura em Física, essas estruturas são especialmente úteis porque permitem aproximar programação e modelagem científica. Vetores representam séries de medições; matrizes representam tabelas de dados experimentais; registros representam corpos, sistemas ou experimentos com múltiplas características. Essa associação favorece a compreensão de que programar não é apenas escrever comandos, mas organizar informações de modo compatível com o problema físico investigado.

## 10. Desenvolvimento da aula

### 10.1 Bloco 1 – Variáveis e vetores

- **Objetivo do bloco:** Capacitar o aluno a armazenar e manipular sequências de dados homogêneos, como medições experimentais, utilizando vetores.
- **Problema físico motivador:** Em um experimento de queda livre, foram medidos os tempos (em segundos) que um objeto leva para atingir o solo a partir de diferentes alturas. Como podemos armazenar e processar esses 10 tempos de forma organizada?
- **Explicação didática:** Começamos com variáveis simples para um único valor. Mas e se tivermos muitos valores do mesmo tipo? Em vez de criar `tempo1`, `tempo2`, ..., `tempo10`, usamos um **vetor**. Um vetor é como uma "gaveta com várias divisórias", onde cada divisória tem um número (índice) e guarda um valor. Isso nos permite acessar os dados de forma sistemática, por exemplo, para calcular a média dos tempos.
- **Exemplo em Portugol/VisuAlg:** Cálculo da média de 5 tempos de queda livre.

```portugol
algoritmo "MediaTemposQueda"
var
   tempos: vetor[1..5] de real
   soma: real
   media: real
   i: inteiro
inicio
   soma <- 0
   escrevaL("Digite os 5 tempos de queda livre:")
   para i de 1 ate 5 faca
      leia(tempos[i])
      soma <- soma + tempos[i]
   fimpara
   media <- soma / 5
   escrevaL("Os tempos registrados foram:")
   para i de 1 ate 5 faca
      escreva("Tempo ", i, ": ", tempos[i], "s")
      se i < 5 entao
         escrevaL("")
      fimse
   fimpara
   escrevaL("")
   escrevaL("A média dos tempos é: ", media:4:2, "s")
fim_algoritmo
```

- **Atividade prática guiada:** Modificar o exemplo acima para encontrar o maior e o menor tempo de queda livre registrado.
- **Atividade em duplas:** Desenvolver um algoritmo que leia 7 temperaturas diárias de uma semana (armazenando-as em um vetor) e determine quantos dias a temperatura ficou acima da média semanal.

### 10.2 Bloco 2 – Matrizes

- **Objetivo do bloco:** Habilitar o aluno a organizar e manipular dados bidimensionais, como tabelas de resultados experimentais ou grades de medições, utilizando matrizes.
- **Problema físico motivador:** Em um laboratório de termodinâmica, foram medidas as temperaturas de uma placa metálica em 3 pontos diferentes (linhas) e em 4 instantes de tempo distintos (colunas). Como podemos armazenar e exibir essa "tabela" de temperaturas?
- **Explicação didática:** Se um vetor é uma sequência linear, uma **matriz** é uma "tabela" ou "grade". Ela tem linhas e colunas, e cada elemento é acessado por dois índices: um para a linha e outro para a coluna. Isso é perfeito para dados que dependem de duas variáveis, como posição (x, y) ou tempo e ponto de medição.
- **Exemplo em Portugol/VisuAlg:** Leitura e exibição de uma matriz 3x4 de temperaturas.

```algoritmo
algoritmo "TemperaturasPlaca"
var
   temperaturas: matriz[1..3, 1..4] de real
   linha, coluna: inteiro
inicio
   escrevaL("Digite as temperaturas da placa (3 pontos, 4 instantes):")
   para linha de 1 ate 3 faca
      para coluna de 1 ate 4 faca
         escreva("Ponto ", linha, ", Instante ", coluna, ": ")
         leia(temperaturas[linha, coluna])
      fimpara
   fimpara

   escrevaL("")
   escrevaL("Tabela de Temperaturas:")
   para linha de 1 ate 3 faca
      para coluna de 1 ate 4 faca
         escreva(temperaturas[linha, coluna]:4:1, " ")
      fimpara
      escrevaL("") // Quebra de linha para a próxima linha da matriz
   fimpara
fim_algoritmo
```

- **Atividade prática guiada:** Modificar o exemplo para calcular a temperatura média de cada ponto (média das linhas) e a temperatura média em cada instante (média das colunas).
- **Atividade em duplas:** Desenvolver um algoritmo que simule uma grade 5x5 de sensores de umidade em um solo. O programa deve ler os valores de umidade para cada sensor e identificar qual sensor registrou a maior umidade.

### 10.3 Bloco 3 – Registros e integração

- **Objetivo do bloco:** Permitir ao aluno modelar entidades físicas complexas com múltiplos atributos de diferentes tipos, utilizando registros, e integrar essa estrutura com vetores.
- **Problema físico motivador:** Em uma simulação de colisão de partículas, cada partícula é caracterizada por sua massa (real), posição X (real), posição Y (real) e velocidade (real). Como podemos representar uma única partícula e, em seguida, um conjunto de 10 partículas?
- **Explicação didática:** Uma variável armazena um valor. Um vetor armazena vários valores do *mesmo tipo*. Mas e se quisermos agrupar valores de *tipos diferentes* que descrevem uma única "coisa"? Para isso, usamos um **registro**. Um registro é como uma "ficha" ou "cartão de identificação" que contém vários "campos" (atributos) sobre um mesmo objeto. Podemos ter um registro para uma partícula, e depois um vetor de registros para várias partículas.
- **Exemplo em Portugol/VisuAlg:** Definição de um registro para uma partícula e criação de um vetor de partículas.

```algoritmo
algoritmo "SimulacaoParticulas"
tipo
   tParticula = registro
      massa: real
      posicaoX: real
      posicaoY: real
      velocidade: real
   fim_registro
var
   particulas: vetor[1..3] de tParticula
   i: inteiro
inicio
   escrevaL("Cadastro de 3 partículas:")
   para i de 1 ate 3 faca
      escrevaL("--- Partícula ", i, " ---")
      escreva("Massa (kg): ")
      leia(particulas[i].massa)
      escreva("Posição X (m): ")
      leia(particulas[i].posicaoX)
      escreva("Posição Y (m): ")
      leia(particulas[i].posicaoY)
      escreva("Velocidade (m/s): ")
      leia(particulas[i].velocidade)
   fimpara

   escrevaL("")
   escrevaL("Dados das Partículas Cadastradas:")
   para i de 1 ate 3 faca
      escrevaL("--- Partícula ", i, " ---")
      escrevaL("Massa: ", particulas[i].massa:4:2, " kg")
      escrevaL("Posição: (", particulas[i].posicaoX:4:2, ", ", particulas[i].posicaoY:4:2, ") m")
      escrevaL("Velocidade: ", particulas[i].velocidade:4:2, " m/s")
   fimpara
fim_algoritmo
```

- **Atividade prática guiada:** Adicionar um campo `energiaCinetica: real` ao registro `tParticula` e calcular a energia cinética para cada partícula após a leitura dos dados.
- **Atividade em duplas:** Desenvolver um algoritmo que cadastre 5 experimentos (cada experimento com nome, data, número de amostras e resultado final). Armazenar esses experimentos em um vetor de registros e exibir os dados do experimento com o maior resultado final.

## 11. Avaliação

A avaliação será contínua e formativa, visando acompanhar o desenvolvimento do raciocínio algorítmico e a capacidade de aplicação das estruturas de dados.

- **Participação em aula e laboratório:** Engajamento nas discussões e atividades práticas.
- **Exercícios e listas de problemas:** Resolução de problemas propostos, com foco na correção lógica e na escolha adequada das estruturas de dados.
- **Mini-projetos:** Desenvolvimento de pequenos algoritmos que simulem ou analisem fenômenos físicos, exigindo a integração das estruturas de dados aprendidas.
- **Justificativa da escolha da estrutura de dados:** Em algumas atividades, o aluno deverá justificar por que escolheu um vetor, uma matriz ou um registro para representar os dados de um problema específico.

## 12. Lista de exercícios com gabarito comentado

### 12.1 Exercício 1: Queda Livre e Vetores

**Problema:** Um experimento de queda livre foi repetido 8 vezes, e os tempos (em segundos) para o objeto atingir o solo foram registrados: 1.2, 1.3, 1.1, 1.4, 1.2, 1.3, 1.0, 1.5. Crie um algoritmo em Portugol que armazene esses tempos em um vetor, calcule e exiba o tempo médio e o desvio padrão amostral.

**Gabarito Comentado:**
Este exercício introduz o uso de vetores para armazenar uma série de medições e a aplicação de fórmulas estatísticas básicas. O desvio padrão é crucial em Física para avaliar a dispersão dos dados.

```algoritmo
algoritmo "QuedaLivreEstatistica"
var
   tempos: vetor[1..8] de real
   soma, media, somaQuadrados, desvioPadrao: real
   i: inteiro
inicio
   tempos[1] <- 1.2
   tempos[2] <- 1.3
   tempos[3] <- 1.1
   tempos[4] <- 1.4
   tempos[5] <- 1.2
   tempos[6] <- 1.3
   tempos[7] <- 1.0
   tempos[8] <- 1.5

   soma <- 0
   somaQuadrados <- 0

   para i de 1 ate 8 faca
      soma <- soma + tempos[i]
      somaQuadrados <- somaQuadrados + (tempos[i] * tempos[i])
   fimpara

   media <- soma / 8
   desvioPadrao <- raiz((somaQuadrados - (soma * soma) / 8) / (8 - 1)) // Desvio padrão amostral

   escrevaL("Tempos de queda livre: ", tempos[1]:4:1, ", ", tempos[2]:4:1, ", ", tempos[3]:4:1, ", ", tempos[4]:4:1, ", ", tempos[5]:4:1, ", ", tempos[6]:4:1, ", ", tempos[7]:4:1, ", ", tempos[8]:4:1)
   escrevaL("Tempo médio: ", media:4:2, "s")
   escrevaL("Desvio padrão amostral: ", desvioPadrao:4:2, "s")
fim_algoritmo
```

### 12.2 Exercício 2: Temperatura em Laboratório e Vetores

**Problema:** Em um experimento de resfriamento, a temperatura de um líquido foi medida a cada minuto por 10 minutos. Os valores foram: 80.5, 78.2, 75.9, 73.1, 70.8, 68.5, 66.3, 64.0, 61.7, 59.4. Armazene essas temperaturas em um vetor e determine em qual minuto (índice) a temperatura caiu abaixo de 70°C pela primeira vez.

**Gabarito Comentado:**
Este exercício foca na busca sequencial em um vetor, um conceito fundamental para análise de dados. A identificação do "primeiro" evento é comum em análise de séries temporais.

```algoritmo
algoritmo "TemperaturaLimite"
var
   temperaturas: vetor[1..10] de real
   i: inteiro
   minutoLimite: inteiro
inicio
   temperaturas[1] <- 80.5
   temperaturas[2] <- 78.2
   temperaturas[3] <- 75.9
   temperaturas[4] <- 73.1
   temperaturas[5] <- 70.8
   temperaturas[6] <- 68.5
   temperaturas[7] <- 66.3
   temperaturas[8] <- 64.0
   temperaturas[9] <- 61.7
   temperaturas[10] <- 59.4

   minutoLimite <- 0 // Inicializa com 0 para indicar que não foi encontrado ainda

   para i de 1 ate 10 faca
      se temperaturas[i] < 70 entao
         minutoLimite <- i
         interrompa // Sai do laço assim que encontra o primeiro
      fimse
   fimpara

   se minutoLimite > 0 entao
      escrevaL("A temperatura caiu abaixo de 70°C pela primeira vez no minuto ", minutoLimite, ".")
   senao
      escrevaL("A temperatura não caiu abaixo de 70°C durante o experimento.")
   fimse
fim_algoritmo
```

### 12.3 Exercício 3: Matriz de Dados Experimentais

**Problema:** Um sensor de pressão foi posicionado em uma grade 3x3 em uma superfície. Foram feitas medições de pressão (em kPa) em cada ponto:

Linha 1: 101.2, 100.8, 101.5
Linha 2: 102.1, 101.9, 102.5
Linha 3: 100.5, 101.0, 100.7

Crie um algoritmo em Portugol que armazene esses dados em uma matriz e encontre a maior pressão registrada, indicando sua posição (linha e coluna).

**Gabarito Comentado:**
Este exercício explora a manipulação de matrizes para dados bidimensionais e a busca pelo valor máximo, com a necessidade de armazenar os índices da posição.

```algoritmo
algoritmo "PressaoMaxima"
var
   pressoes: matriz[1..3, 1..3] de real
   linha, coluna: inteiro
   maiorPressao: real
   linhaMax, colunaMax: inteiro
inicio
   pressoes[1,1] <- 101.2
   pressoes[1,2] <- 100.8
   pressoes[1,3] <- 101.5
   pressoes[2,1] <- 102.1
   pressoes[2,2] <- 101.9
   pressoes[2,3] <- 102.5
   pressoes[3,1] <- 100.5
   pressoes[3,2] <- 101.0
   pressoes[3,3] <- 100.7

   maiorPressao <- pressoes[1,1] // Inicializa com o primeiro elemento
   linhaMax <- 1
   colunaMax <- 1

   para linha de 1 ate 3 faca
      para coluna de 1 ate 3 faca
         se pressoes[linha, coluna] > maiorPressao entao
            maiorPressao <- pressoes[linha, coluna]
            linhaMax <- linha
            colunaMax <- coluna
         fimse
      fimpara
   fimpara

   escrevaL("A maior pressão registrada foi: ", maiorPressao:5:2, " kPa")
   escrevaL("Localizada na posição (Linha: ", linhaMax, ", Coluna: ", colunaMax, ")")
fim_algoritmo
```

### 12.4 Exercício 4: Registro de Corpo Físico

**Problema:** Em um simulador de dinâmica, um "Corpo" é definido por sua massa (real), posição X (real), posição Y (real) e velocidade (real). Crie um tipo de registro para Corpo e um algoritmo que leia os dados de um corpo e calcule sua energia cinética (Ec = 0.5 *massa* velocidade^2).

**Gabarito Comentado:**
Este exercício introduz o conceito de registro para agrupar dados heterogêneos que descrevem uma única entidade física, e a aplicação de uma fórmula física.

```algoritmo
algoritmo "CorpoFisico"
tipo
   tCorpo = registro
      massa: real
      posicaoX: real
      posicaoY: real
      velocidade: real
   fim_registro
var
   meuCorpo: tCorpo
   energiaCinetica: real
inicio
   escrevaL("--- Cadastro de um Corpo Físico ---")
   escreva("Massa (kg): ")
   leia(meuCorpo.massa)
   escreva("Posição X (m): ")
   leia(meuCorpo.posicaoX)
   escreva("Posição Y (m): ")
   leia(meuCorpo.posicaoY)
   escreva("Velocidade (m/s): ")
   leia(meuCorpo.velocidade)

   energiaCinetica <- 0.5 * meuCorpo.massa * (meuCorpo.velocidade ^ 2)

   escrevaL("")
   escrevaL("--- Dados do Corpo ---")
   escrevaL("Massa: ", meuCorpo.massa:4:2, " kg")
   escrevaL("Posição: (", meuCorpo.posicaoX:4:2, ", ", meuCorpo.posicaoY:4:2, ") m")
   escrevaL("Velocidade: ", meuCorpo.velocidade:4:2, " m/s")
   escrevaL("Energia Cinética: ", energiaCinetica:6:2, " Joules")
fim_algoritmo
```

### 12.5 Exercício 5: Vetor de Registros (Partículas)

**Problema:** Em uma simulação de um gás ideal, temos 5 partículas, cada uma com massa, posição X, posição Y e velocidade. Crie um algoritmo que use um vetor de registros para armazenar essas 5 partículas. O programa deve ler os dados de cada partícula e, ao final, exibir os dados da partícula com a maior velocidade.

**Gabarito Comentado:**
Este exercício integra vetores e registros, uma combinação poderosa para modelar coleções de objetos complexos. A busca pelo maior valor dentro de um campo de registro em um vetor é uma aplicação comum.

```algoritmo
algoritmo "VetorDeParticulas"
tipo
   tParticula = registro
      massa: real
      posicaoX: real
      posicaoY: real
      velocidade: real
   fim_registro
var
   particulas: vetor[1..5] de tParticula
   i: inteiro
   maiorVelocidade: real
   indiceMaior: inteiro
inicio
   escrevaL("--- Cadastro de 5 Partículas ---")
   para i de 1 ate 5 faca
      escrevaL("Partícula ", i, ":")
      escreva("Massa (kg): ")
      leia(particulas[i].massa)
      escreva("Posição X (m): ")
      leia(particulas[i].posicaoX)
      escreva("Posição Y (m): ")
      leia(particulas[i].posicaoY)
      escreva("Velocidade (m/s): ")
      leia(particulas[i].velocidade)
      escrevaL("")
   fimpara

   maiorVelocidade <- particulas[1].velocidade
   indiceMaior <- 1

   para i de 2 ate 5 faca // Começa do 2 porque o 1 já foi inicializado
      se particulas[i].velocidade > maiorVelocidade entao
         maiorVelocidade <- particulas[i].velocidade
         indiceMaior <- i
      fimse
   fimpara

   escrevaL("--- Partícula com Maior Velocidade ---")
   escrevaL("Partícula número: ", indiceMaior)
   escrevaL("Massa: ", particulas[indiceMaior].massa:4:2, " kg")
   escrevaL("Posição: (", particulas[indiceMaior].posicaoX:4:2, ", ", particulas[indiceMaior].posicaoY:4:2, ") m")
   escrevaL("Velocidade: ", particulas[indiceMaior].velocidade:4:2, " m/s")
fim_algoritmo
```

### 12.6 Exercício 6: Análise de Dados de Laboratório (Vetor e Matriz)

**Problema:** Em um laboratório, foram realizadas 4 séries de medições de tensão (V) e corrente (A) em um circuito. Cada série tem 5 pares de (V, A). Crie um algoritmo que armazene essas 4 séries de 5 pares em uma matriz (onde cada linha é uma série e as colunas são os pares V, A) e calcule a resistência média (R = V/A) para cada série.

**Gabarito Comentado:**
Este exercício combina o uso de matrizes para organizar múltiplas séries de dados e a aplicação de uma fórmula física para cada subconjunto de dados.

```algoritmo
algoritmo "ResistenciaMedia"
var
   dadosVA: matriz[1..4, 1..10] de real // 4 séries, 5 pares (V,A) = 10 colunas
   i, j: inteiro
   somaResistenciaSerie: real
   resistenciaMediaSerie: real
inicio
   escrevaL("--- Entrada de Dados de Tensão e Corrente (4 séries de 5 pares) ---")
   para i de 1 ate 4 faca // Para cada série
      escrevaL("Série de Medições ", i, ":")
      para j de 1 ate 5 faca // Para cada par (V,A)
         escreva("Tensão (V) para o par ", j, ": ")
         leia(dadosVA[i, (j*2)-1]) // Coluna 1, 3, 5, 7, 9 para Tensão
         escreva("Corrente (A) para o par ", j, ": ")
         leia(dadosVA[i, (j*2)]) // Coluna 2, 4, 6, 8, 10 para Corrente
      fimpara
      escrevaL("")
   fimpara

   escrevaL("--- Resistência Média por Série ---")
   para i de 1 ate 4 faca // Para cada série
      somaResistenciaSerie <- 0
      para j de 1 ate 5 faca // Para cada par (V,A)
         // R = V / A
         somaResistenciaSerie <- somaResistenciaSerie + (dadosVA[i, (j*2)-1] / dadosVA[i, (j*2)])
      fimpara
      resistenciaMediaSerie <- somaResistenciaSerie / 5
      escrevaL("Série ", i, ": ", resistenciaMediaSerie:5:2, " Ohms")
   fimpara
fim_algoritmo
```

---

## 13. Referências e recursos complementares

- FORBELLONE, André Luiz Villar; EBERSPÄCHER, Henri Frederico. **Lógica de Programação: a construção de algoritmos e estruturação de dados**. 3. ed. São Paulo: Pearson.
- MANZANO, José Augusto Navarro Garcia; OLIVEIRA, Jayr Figueiredo de. **Algoritmos: lógica para desenvolvimento de programação de computadores**. São Paulo: Érica.
- MANZANO, José Augusto Navarro Garcia. **VisuAlg 3: Programação de computadores em Português**. São Paulo: Clube de Autores / Propes Vivens.
- ASCENCIO, Ana F. G.; CAMPOS, Edilene A. V. **Fundamentos da Programação de Computadores: Algoritmos, Pascal, C/C++ e Java**. 3. ed. São Paulo: Pearson Prentice Hall, 2012.
- GUIMARÃES, Angelo de Moura; LAGES, Newton. **Algoritmos e Estruturas de Dados**. Rio de Janeiro: LTC, 2008.
- Manual do VisuAlg e roteiros de laboratório de Física Experimental.

---
*Plano elaborado para uso na disciplina de Algoritmos e Programação do Curso de Licenciatura em Física.*

---
### Guia de Estruturas de Dados Aplicadas à Física: Vetores, Matrizes e Registros

**1. Introdução: A Programação como Ferramenta Científica)**

A modelagem computacional de sistemas físicos necessita de algo que transcenda o simples armazenamento de números; ela exige organização lógica. Para o estudante de Licenciatura em Física, a transição do pensamento científico para o pensamento computacional significa compreender que a programação é uma extensão natural do método científico. Não se trata apenas de automatizar cálculos, mas de modelar, simular e analisar fenômenos de forma estruturada.

A organização de dados funciona como a "ponte" entre a observação de um fenômeno real e sua execução em um ambiente digital. Sem estruturas adequadas, o código torna-se estático e limitado. Para fundamentar nossa exploração, utilizaremos três problemas motivadores:

- **Análise de dados repetitivos de queda livre:** O desafio de processar múltiplas medições sem incorrer em uma "explosão de variáveis".
- **Organização de tabelas de massa e tempo:** A necessidade de gerenciar dados interdependentes, como a posição de um móvel em função de diferentes massas.
- **Representação de propriedades de partículas:** A modelagem de entidades físicas que possuem múltiplos atributos simultâneos (massa, posição, velocidade).

--------------------------------------------------------------------------------

**2. Vetores: A Gaveta de Divisórias (Dados Unidimensionais)**

Um vetor é uma estrutura que reúne um conjunto de variáveis do mesmo tipo acessíveis por um único nome, organizadas linearmente na memória. Tecnicamente, o vetor é classificado como um Array (arranjo) unidimensional de tipo homogêneo.

**A Analogia da Gaveta e o Problema da Estaticidade**

Imagine o vetor como uma gaveta com várias divisórias. A gaveta possui um nome único (ex: tempos), mas cada divisória interna possui um número de identificação chamado **índice**.

**Por que não usar variáveis simples?** No Problema 1 (Queda Livre), se realizarmos 100 medições, criar variáveis como `tempo1`, `tempo2`, ..., `tempo100` torna o programa "estático". Você não conseguiria criar um laço de repetição para somá-las automaticamente. O vetor torna o código **dinâmico**: o algoritmo pode processar 5 ou 5.000 medições com a mesma estrutura lógica.

**Exemplo de Declaração e Atribuição (VisuAlg):**
```portugol
algoritmo "vetor"
var
   tempos: vetor[1..5] de real // Declaração de 5 divisórias para dados reais

inicio
   // Atribuição de valores específicos via índice
   tempos[1] <- 1.25
   tempos[2] <- 1.30
   tempos[3] <- 1.18
   // ... e assim sucessivamente
fimalgoritmo
```

--------------------------------------------------------------------------------

**3. Lógica de Índices e Laços de Repetição)**

O índice é o endereço exato do dado. É fundamental que o acadêmico de Física compreenda uma distinção técnica: 
> embora ferramentas didáticas como o VisuAlg permitam iniciar a contagem em 1, o **padrão computacional da indústria e da pesquisa científica inicia os índices em 0**.

**O Laço "Para" (for) como Escaneador)**

A estrutura para atua como um "escaneador" automático das divisórias da gaveta. Ela percorre o vetor posição por posição, permitindo operações em massa.

**Bloco Didático: Cálculo da Média de Medições**

--------------------------------------------------------------------------------

**4. Matrizes: Grades de Dados Experimentais (Dados Bidimensionais)**

A matriz é uma estrutura n-dimensional — definida por seu Rank (número de dimensões) e Size (tamanho de cada dimensão) — que funciona como uma grade ou tabela.

**Contextualização Física: Problema 2 (Dados Multivariáveis)**

Em laboratórios, frequentemente medimos a posição de um objeto em diferentes instantes de tempo para diversas massas. Uma matriz permite que as linhas representem a variação da massa e as colunas representem a passagem do tempo.

**Laços Aninhados: A Lógica de Varredura**

Para processar uma matriz, utilizamos laços aninhados. O laço externo "fixa" uma linha (ex: uma massa específica) enquanto o laço interno "varre" todas as colunas (os tempos medidos para aquela massa).

**Representação de uma Matriz 3x3 de Sensores de Pressão (kPa):**

 Coluna 1 Coluna 2 Coluna 3
Linha 1 `M[1,1]` = 101.2 `M[1,2]` = 100.8 `M[1,3]` = 101.5
Linha 2 `M[2,1]` = 102.1 `M[2,2]` = 101.9 `M[2,3]` = 102.5
Linha 3 `M[3,1]` = 100.5 `M[3,2]` = 101.0 `M[3,3]` = 100.7

--------------------------------------------------------------------------------

**5. Registros: Modelagem de Objetos Físicos (Dados Heterogêneos)**

Enquanto vetores e matrizes são homogêneos (todos os dados devem ser do mesmo tipo), o **registro** (ou struct) é uma estrutura heterogênea. Ele funciona como uma "ficha de identificação" que agrupa propriedades de tipos diferentes sob um mesmo nome, garantindo **Clareza Semântica** ao código.

**Problema 3: Simulação de Partículas**

Para simular uma partícula em um campo gravitacional, não lidamos com dados soltos. Uma partícula é uma entidade única com atributos específicos. Um registro tParticula conteria:

- **massa**: Real
- **pos_x**: Real
- **pos_y**: Real
- **velocidade**: Real

Comparativo Estrutural:

- **Vetor/Matriz**: Coleções de grandezas idênticas (ex: série de temperaturas).
- **Registro**: Modelagem de uma entidade complexa (ex: um corpo físico e suas propriedades variadas).

Acesso ao campo: `particula.velocidade <- 15.5`.

--------------------------------------------------------------------------------

**6. **Desafios Práticos para o Licenciando em Física**

Resolva os problemas abaixo utilizando o VisuAlg ou Portugol Studio. Estes exercícios foram desenhados para integrar a lógica algorítmica aos procedimentos de laboratório.

1. **Exercício de Vetores (Estatística Experimental)**: Armazene 8 tempos de queda livre em um vetor. Calcule a média aritmética e o desvio padrão amostral.

- **Dica do Professor:** O cálculo do desvio padrão requer dois passos (dois laços `para` distintos): o primeiro para encontrar a média e o segundo para somar o quadrado das diferenças $ (x_i - \bar{x})^2$, antes de aplicar a raiz quadrada final.

2. **Exercício de Matrizes (Mapeamento de Pressão)**: Implemente uma matriz 3x3 representando uma grade de sensores. O algoritmo deve ler as pressões e informar as coordenadas (linha e coluna) do ponto que registrou a maior pressão.
2. **Exercício de Registros (Dinâmica de Sistemas)**: Crie um vetor de registros para armazenar 5 partículas, cada uma com `massa`, `pos_x`, `pos_y` e `velocidade`. O programa deve calcular e exibir a energia cinética individual de cada partícula ($E_c = 0.5 \cdot m \cdot v^2$).

--------------------------------------------------------------------------------

7.**Conclusão e Síntese de Aprendizado**

A escolha da estrutura de dados não é uma decisão meramente técnica, mas a própria formalização do modelo físico no computador. Ao selecionar entre um vetor, uma matriz ou um registro, o físico está definindo como a informação flui através de sua simulação.

**Quadro Resumo**

|Estrutura de Dados | Característica | Aplicação na Física
|:--|:--|:--|
|**Vetor** | Unidimensional / Homogêneo |Séries temporais; sequências de medições de uma única grandeza.|
|**Matriz** | Bidimensional / Homogêneo |Mapas de calor; grades de sensores; tabelas de massa vs. tempo.|
|**Registro** | Heterogêneo (Campos) |Modelagem de corpos rígidos; fichas de experimentos; partículas.|

**Lembre-se:** o código deve ser visto como seu laboratório digital. A estrutura correta é o que garante que seu experimento computacional seja escalável, legível e fiel à realidade física.
