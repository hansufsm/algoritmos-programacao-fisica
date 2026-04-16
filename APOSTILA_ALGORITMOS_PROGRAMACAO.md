# Algoritmos e Programação para Licenciatura em Física

**Disciplina:** FSC1189 - Algoritmo e Programação  
**Público-alvo:** Alunos de Licenciatura em Física  
**Autores:** Docentes do Departamento de Física  
**Data:** 2026  

---

## Índice

1. [Capítulo 1: Introdução a Algoritmos](#capítulo-1-introdução-a-algoritmos)
2. [Capítulo 2: Lógica de Programação](#capítulo-2-lógica-de-programação)
3. [Capítulo 3: Variáveis e Tipos de Dados](#capítulo-3-variáveis-e-tipos-de-dados)
4. [Capítulo 4: Estruturas de Controle](#capítulo-4-estruturas-de-controle)
5. [Capítulo 5: Estruturas de Repetição](#capítulo-5-estruturas-de-repetição)
6. [Capítulo 6: Vetores e Matrizes](#capítulo-6-vetores-e-matrizes)
7. [Capítulo 7: Funções e Procedimentos](#capítulo-7-funções-e-procedimentos)
8. [Capítulo 8: Métodos Numéricos em Física](#capítulo-8-métodos-numéricos-em-física)
9. [Capítulo 9: Tratamento de Dados e Visualização](#capítulo-9-tratamento-de-dados-e-visualização)
10. [Capítulo 10: Projetos Integrados em Física](#capítulo-10-projetos-integrados-em-física)

---

## Capítulo 1: Introdução a Algoritmos

### 1.1 O que é um Algoritmo?

Um **algoritmo** é uma sequência finita de passos bem definidos que resolvem um problema ou realizam uma computação. A palavra origina-se do nome do matemático persa Al-Khwarizmi (século IX), considerado um dos fundadores da Ciência da Computação.

Na Física, você já usa algoritmos implicitamente. Por exemplo, para resolver uma equação diferencial numericamente, você segue uma série de passos ordenados. O mesmo ocorre ao analisar dados experimentais: coleta, processamento, análise e interpretação formam um algoritmo de tratamento de dados.

**Características essenciais de um algoritmo:**

- **Finitude:** deve terminar após um número finito de passos
- **Definição precisa:** cada passo deve estar bem definido e sem ambiguidades
- **Entrada:** pode ter zero ou mais dados de entrada
- **Saída:** produz pelo menos um resultado
- **Efetividade:** cada operação deve ser executável em tempo finito

### 1.2 Algoritmos em Contexto de Física

Consideremos um problema clássico: **calcular a trajetória de um projétil**.

Dados:
- Velocidade inicial: $v_0$
- Ângulo de lançamento: $\theta$
- Aceleração da gravidade: $g = 9,81 \, \text{m/s}^2$

Desejamos encontrar:
- Altura máxima: $H = \frac{v_0^2 \sin^2(\theta)}{2g}$
- Alcance horizontal: $R = \frac{v_0^2 \sin(2\theta)}{g}$
- Tempo de voo: $T = \frac{2v_0 \sin(\theta)}{g}$

**Algoritmo verbal:**

1. Ler $v_0$ e $\theta$
2. Converter $\theta$ de graus para radianos
3. Calcular $\sin(\theta)$ e $\sin(2\theta)$
4. Calcular $H$, $R$ e $T$ usando as fórmulas
5. Exibir os resultados

### 1.3 Representação de Algoritmos

Existem várias formas de representar algoritmos:

#### 1.3.1 Descrição Narrativa

Descrever o algoritmo em linguagem natural (português).

#### 1.3.2 Fluxograma

Representação gráfica usando símbolos padronizados:
- **Oval:** início/fim
- **Retângulo:** processamento
- **Losango:** decisão
- **Paralelogramo:** entrada/saída

#### 1.3.3 Pseudocódigo e Português Estruturado

Uma notação intermediária entre linguagem natural e linguagem de programação, facilitando a compreensão sem exigir conhecimento de sintaxe específica.

### 1.4 Exemplo Completo: Cálculo de Trajetória de Projétil

**Pseudocódigo:**

```
Algoritmo TrajetoProjetil
    Leia v0, angulo
    pi ← 3.14159
    teta ← angulo × pi / 180
    g ← 9.81
    
    H ← (v0² × sen²(teta)) / (2 × g)
    R ← (v0² × sen(2×teta)) / g
    T ← (2 × v0 × sen(teta)) / g
    
    Escreva "Altura máxima:", H, "m"
    Escreva "Alcance:", R, "m"
    Escreva "Tempo de voo:", T, "s"
FimAlgoritmo
```

**Implementação em Português Estruturado (VisualG):**

```portugol
algoritmo "TrajetoProjetil"
var
   v0, angulo, teta, g, H, R, T, pi: real

inicio
   pi <- 3.14159
   g <- 9.81
   
   escreva("Digite a velocidade inicial (m/s): ")
   leia(v0)
   escreva("Digite o ângulo de lançamento (graus): ")
   leia(angulo)
   
   teta <- angulo * pi / 180
   
   H <- (v0 * v0 * sen(teta) * sen(teta)) / (2 * g)
   R <- (v0 * v0 * sen(2 * teta)) / g
   T <- (2 * v0 * sen(teta)) / g
   
   escreva("")
   escreva("=== RESULTADO ===" )
   escreva("Altura máxima: ", H:5:2, " m")
   escreva("Alcance: ", R:5:2, " m")
   escreva("Tempo de voo: ", T:5:2, " s")
   
fimalgoritmo
```

### 1.5 Complexidade de Algoritmos

A **complexidade de tempo** descreve como o tempo de execução cresce com o tamanho da entrada. Notação Big-O:

- $O(1)$: tempo constante (ex: acesso a um elemento de array)
- $O(n)$: tempo linear (ex: busca em lista)
- $O(n^2)$: tempo quadrático (ex: dois loops aninhados)
- $O(\log n)$: tempo logarítmico (ex: busca binária)

Para cálculos em Física, geralmente trabalhamos com algoritmos $O(1)$ ou $O(n)$, onde $n$ é o número de dados a processar.

---

## Capítulo 2: Lógica de Programação

### 2.1 Proposições e Lógica Booleana

A **lógica booleana** utiliza valores verdadeiro (V) ou falso (F). Em programação, usamos **true** e **false**.

**Operadores lógicos:**

| Operador | Símbolo | Descrição |
|----------|---------|-----------|
| Conjunção (E) | `e` ou `&&` | Verdadeiro se ambas são verdadeiras |
| Disjunção (OU) | `ou` ou `\|\|` | Verdadeiro se ao menos uma é verdadeira |
| Negação (NÃO) | `nao` ou `!` | Inverte o valor booleano |

**Tabelas Verdade:**

**Conjunção (E):**

| A | B | A E B |
|---|---|-------|
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | F |

**Disjunção (OU):**

| A | B | A OU B |
|---|---|--------|
| V | V | V |
| V | F | V |
| F | V | V |
| F | F | F |

### 2.2 Operadores Relacionais

Comparações que retornam valores booleanos:

- Igual: `=` ou `==`
- Diferente: `≠` ou `!=`
- Maior que: `>`
- Menor que: `<`
- Maior ou igual: `>=`
- Menor ou igual: `<=`

**Exemplo:** Verificar se uma medida experimental está dentro de uma tolerância.

```portugol
tolerancia <- 0.05
valor_medido <- 9.87
valor_teorico <- 9.81
diferenca <- valor_medido - valor_teorico

se (diferenca < tolerancia) entao
   escreva("Medida dentro da tolerância")
senao
   escreva("Medida fora da tolerância")
fimse
```

### 2.3 Estruturas Lógicas Fundamentais

#### 2.3.1 Sequência

Execução ordenada de comandos, um após o outro.

```portugol
escreva("Digite a temperatura em Celsius: ")
leia(celsius)
fahrenheit <- (celsius * 9/5) + 32
escreva("Temperatura em Fahrenheit: ", fahrenheit)
```

#### 2.3.2 Seleção (Condicional)

Execução de diferentes blocos conforme uma condição.

```portugol
se condicao entao
   // bloco 1
senao
   // bloco 2
fimse
```

#### 2.3.3 Repetição (Iteração)

Execução de um bloco múltiplas vezes.

```portugol
para i de 1 ate 10 passo 1 faca
   // bloco executado 10 vezes
fimpara
```

### 2.4 Exemplos Contextualizados em Física

**Exemplo 1: Classificação de Movimento**

Dado uma velocidade, classificar o movimento:

```portugol
escreva("Digite a velocidade (m/s): ")
leia(v)

se (v = 0) entao
   escreva("Repouso")
senao
   se (v > 0) entao
      escreva("Movimento progressivo")
   senao
      escreva("Movimento retrógrado")
   fimse
fimse
```

**Exemplo 2: Validação de Energia Cinética**

```portugol
escreva("Digite a massa (kg): ")
leia(m)
escreva("Digite a velocidade (m/s): ")
leia(v)

se (m > 0 e v >= 0) entao
   Ec <- (m * v * v) / 2
   escreva("Energia cinética: ", Ec, " J")
senao
   escreva("Valores físicos inválidos")
fimse
```

---

## Capítulo 3: Variáveis e Tipos de Dados

### 3.1 Conceito de Variável

Uma **variável** é um espaço de memória que armazena um valor. Tem um **nome**, um **tipo** e um **valor**.

**Analogia Física:** Uma variável é como um recipiente que armazena uma quantidade. O nome do recipiente permite identificá-lo, o tipo define que quantidade ele pode conter (capacidade), e o valor é o que está armazenado neste momento.

### 3.2 Tipos de Dados Primitivos

#### 3.2.1 Inteiro (INT)

Armazena números inteiros sem casas decimais: $\{..., -2, -1, 0, 1, 2, ...\}$

**Intervalo típico:** de $-2^{31}$ a $2^{31} - 1$ (em um inteiro de 32 bits)

**Uso em Física:** Contadores, índices, números de medidas discretas.

```portugol
var
   numero_particulas: inteiro
   indice_iteracao: inteiro

numero_particulas <- 1000
indice_iteracao <- 0
```

#### 3.2.2 Real (REAL)

Armazena números com parte decimal (ponto flutuante).

**Precisão:** Típica de 15-17 dígitos significativos

**Uso em Física:** Medidas contínuas, cálculos com constantes físicas.

```portugol
var
   massa_eletron: real
   velocidade: real
   constante_gravitacional: real

massa_eletron <- 9.109e-31
velocidade <- 3.0e8
constante_gravitacional <- 6.674e-11
```

#### 3.2.3 Texto (CARACTERE ou CADEIA)

Armazena sequências de caracteres (strings).

```portugol
var
   nome_objeto: cadeia
   unidade: caractere

nome_objeto <- "Elétron"
unidade <- "m/s"
```

#### 3.2.4 Lógico (LOGICO)

Armazena valores booleanos: verdadeiro ou falso.

```portugol
var
   condicao_terminou: logico
   houve_erro: logico

condicao_terminou <- falso
houve_erro <- verdadeiro
```

### 3.3 Declaração de Variáveis

Em Português Estruturado (VisualG), variáveis são declaradas na seção `var`:

```portugol
algoritmo "ExemploVariaveis"
var
   temperatura: real
   pressao: real
   volume: real
   numero_mols: real
   constante_R: real
   
inicio
   constante_R <- 8.314
   
   temperatura <- 298.15
   volume <- 0.050
   numero_mols <- 2.0
   
   pressao <- (numero_mols * constante_R * temperatura) / volume
   
   escreva("Pressão calculada (Lei dos Gases Ideais): ", pressao:5:2, " Pa")
   
fimalgoritmo
```

### 3.4 Convenções de Nomenclatura

Boas práticas para nomear variáveis:

- **Clareza:** nomes descritivos: `velocidade_inicial` em vez de `v0` ou `x`
- **Consistência:** padrão em toda o código
- **Evitar caracteres especiais:** usar apenas letras, números e underscore
- **Não começar com números:** `velocidade1` não `1velocidade`
- **Minúsculas:** preferir minúsculas com underscores para múltiplas palavras

**Exemplo ruim:**
```portugol
v1 <- 5.0
a <- 9.81
t <- 10
```

**Exemplo bom:**
```portugol
velocidade_inicial <- 5.0
aceleracao_gravidade <- 9.81
tempo_total <- 10
```

### 3.5 Escopo de Variáveis

Em algoritmos simples, todas as variáveis têm escopo global. Em programas maiores (com funções), há variáveis locais e globais. Por enquanto, consideramos todas as variáveis como globais.

---

## Capítulo 4: Estruturas de Controle

### 4.1 Estrutura SE-SENÃO (If-Else)

Executa diferentes blocos de código baseado em uma condição.

**Sintaxe Geral:**

```portugol
se (condicao) entao
   // bloco executado se condicao for verdadeira
senao
   // bloco executado se condicao for falsa
fimse
```

**Exemplo 1: Classificar Estado da Matéria**

```portugol
algoritmo "EstadoMateria"
var
   temperatura: real

inicio
   escreva("Digite a temperatura da água (°C): ")
   leia(temperatura)
   
   se (temperatura < 0) entao
      escreva("Estado: Sólido (gelo)")
   senao
      se (temperatura < 100) entao
         escreva("Estado: Líquido (água)")
      senao
         escreva("Estado: Gasoso (vapor)")
      fimse
   fimse
   
fimalgoritmo
```

### 4.2 Estrutura SE-SENÃO-SE Aninhada

Para múltiplas condições:

```portugol
se (condicao1) entao
   // bloco 1
senao se (condicao2) entao
   // bloco 2
senao se (condicao3) entao
   // bloco 3
senao
   // bloco padrão
fimse
```

**Exemplo 2: Classificar Movimento por Aceleração**

```portugol
algoritmo "ClassificacaoMovimento"
var
   aceleracao: real

inicio
   escreva("Digite a aceleração (m/s²): ")
   leia(aceleracao)
   
   se (aceleracao > 0) entao
      escreva("Movimento acelerado (progressivo)")
   senao se (aceleracao < 0) entao
      escreva("Movimento desacelerado (retrógrado)")
   senao
      escreva("Movimento uniforme (sem aceleração)")
   fimse
   
fimalgoritmo
```

### 4.3 Operador Ternário (Simplificação)

Para situações simples, pode-se usar uma forma mais compacta (em linguagens que suportam).

### 4.4 Aplicação: Validação de Dados Experimentais

**Exemplo 3: Verificar Medida Dentro de Limites Físicos**

```portugol
algoritmo "ValidarMedida"
var
   valor_medido: real
   limite_minimo: real
   limite_maximo: real
   erro_percentual: real

inicio
   limite_minimo <- 9.70
   limite_maximo <- 9.90
   
   escreva("Digite a aceleração da gravidade medida (m/s²): ")
   leia(valor_medido)
   
   se (valor_medido >= limite_minimo e valor_medido <= limite_maximo) entao
      escreva("Medida válida")
      erro_percentual <- ((valor_medido - 9.81) / 9.81) * 100
      escreva("Erro percentual: ", erro_percentual:5:2, "%")
   senao
      escreva("Medida fora dos limites aceitáveis")
      escreva("Intervalo esperado: [", limite_minimo, ", ", limite_maximo, "]")
   fimse
   
fimalgoritmo
```

---

## Capítulo 5: Estruturas de Repetição

### 5.1 Loop Para (FOR)

Executa um bloco um número predefinido de vezes.

**Sintaxe:**

```portugol
para variavel de inicio ate fim passo incremento faca
   // bloco executado repetidamente
fimpara
```

**Exemplo 1: Tabela de Velocidades**

Calcular velocidades em uma queda livre para diferentes tempos:

$$v(t) = gt$$

```portugol
algoritmo "QuedaLivre"
var
   tempo: inteiro
   velocidade: real
   g: real

inicio
   g <- 9.81
   
   escreva("Queda Livre: v = g*t")
   escreva("")
   escreva("Tempo (s) | Velocidade (m/s)")
   escreva("----------|----------------")
   
   para tempo de 0 ate 5 passo 1 faca
      velocidade <- g * tempo
      escreva(tempo, "        | ", velocidade:6:2)
   fimpara
   
fimalgoritmo
```

### 5.2 Loop Enquanto (WHILE)

Executa um bloco enquanto uma condição for verdadeira.

**Sintaxe:**

```portugol
enquanto (condicao) faca
   // bloco executado repetidamente
fimenquanto
```

**Exemplo 2: Soma de Série (Cálculo de π)**

Usar a série de Leibniz: $$\pi/4 = \sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1}$$

```portugol
algoritmo "SeriePI"
var
   n: inteiro
   termo: real
   soma: real
   pi_aproximado: real
   erro: real

inicio
   soma <- 0
   n <- 0
   erro <- 0.0001
   
   enquanto (verdadeiro) faca
      termo <- 1.0 / (2*n + 1)
      
      se (n % 2 = 0) entao
         soma <- soma + termo
      senao
         soma <- soma - termo
      fimse
      
      pi_aproximado <- soma * 4
      
      se (termo < erro) entao
         saia
      fimse
      
      n <- n + 1
   fimenquanto
   
   escreva("Valor de π aproximado: ", pi_aproximado)
   escreva("Número de termos: ", n)
   
fimalgoritmo
```

### 5.3 Loop Repetir-Até (DO-UNTIL)

Executa um bloco e depois verifica a condição (garante pelo menos uma execução).

**Sintaxe:**

```portugol
repita
   // bloco executado
ate (condicao)
```

**Exemplo 3: Validação Repetida de Entrada**

```portugol
algoritmo "ValidacaoEntrada"
var
   valor: real

inicio
   repita
      escreva("Digite um valor positivo: ")
      leia(valor)
      
      se (valor < 0) entao
         escreva("Erro! Digite novamente.")
      fimse
   ate (valor >= 0)
   
   escreva("Valor aceito: ", valor)
   
fimalgoritmo
```

### 5.4 Controle de Fluxo: SAIA

Interrompe a execução do loop.

```portugol
para i de 1 ate 100 passo 1 faca
   se (i = 50) entao
      saia
   fimse
   escreva(i)
fimpara
```

### 5.5 Aplicação: Integração Numérica

**Exemplo 4: Regra do Trapézio para Integração Numérica**

Aproximar uma integral:

$$\int_a^b f(x) dx \approx \sum_{i=0}^{n-1} \frac{h(f(x_i) + f(x_{i+1}))}{2}$$

onde $h = \frac{b-a}{n}$

```portugol
algoritmo "IntegracaoNumerica"
var
   a, b: real
   n, i: inteiro
   h, x, soma: real
   fx_atual, fx_proximo: real

inicio
   a <- 0.0
   b <- 3.14159
   n <- 1000
   
   h <- (b - a) / n
   soma <- 0
   
   para i de 0 ate n-1 passo 1 faca
      x <- a + i * h
      fx_atual <- sen(x)
      fx_proximo <- sen(x + h)
      soma <- soma + h * (fx_atual + fx_proximo) / 2
   fimpara
   
   escreva("Integral de sen(x) de 0 a π ≈ ", soma)
   escreva("(Valor teórico = 2)")
   
fimalgoritmo
```

---

## Capítulo 6: Vetores e Matrizes

### 6.1 Conceito de Vetor (Array Unidimensional)

Um **vetor** é uma coleção de elementos do mesmo tipo, acessados por um índice.

**Analogia Física:** Um vetor é como uma sequência de medições: $x_1, x_2, x_3, ..., x_n$

**Exemplo:** Medições de temperatura em diferentes horas do dia.

### 6.2 Declaração de Vetores

```portugol
var
   velocidades: vetor [1..10] de real
   posicoes: vetor [1..100] de real
   nomes: vetor [1..50] de cadeia
```

**Exemplo 1: Vetor de Velocidades**

```portugol
algoritmo "VetorVelocidades"
var
   velocidades: vetor [1..5] de real
   media, soma: real
   i: inteiro

inicio
   soma <- 0
   
   escreva("Digite 5 velocidades (m/s):")
   para i de 1 ate 5 passo 1 faca
      escreva("Velocidade ", i, ": ")
      leia(velocidades[i])
      soma <- soma + velocidades[i]
   fimpara
   
   media <- soma / 5
   
   escreva("Velocidades digitadas:")
   para i de 1 ate 5 passo 1 faca
      escreva(velocidades[i], " m/s")
   fimpara
   
   escreva("Média: ", media:5:2, " m/s")
   
fimalgoritmo
```

### 6.3 Matrizes (Arrays Bidimensionais)

Uma **matriz** é um array bidimensional, com linhas e colunas.

**Declaração:**

```portugol
var
   matriz_dados: vetor [1..3, 1..3] de real
```

**Exemplo 2: Matriz de Posições (x, y, z)**

Armazenar coordenadas de várias partículas:

```portugol
algoritmo "MatrizPosicoes"
var
   posicoes: vetor [1..10, 1..3] de real
   i, j: inteiro
   distancia: real

inicio
   escreva("Digite as coordenadas (x, y, z) de 10 partículas:")
   
   para i de 1 ate 10 passo 1 faca
      escreva("Partícula ", i)
      escreva("  x: ")
      leia(posicoes[i, 1])
      escreva("  y: ")
      leia(posicoes[i, 2])
      escreva("  z: ")
      leia(posicoes[i, 3])
   fimpara
   
   para i de 1 ate 10 passo 1 faca
      distancia <- raiz(posicoes[i,1]*posicoes[i,1] + 
                        posicoes[i,2]*posicoes[i,2] + 
                        posicoes[i,3]*posicoes[i,3])
      escreva("Distância da partícula ", i, " até origem: ", distancia:5:2, " m")
   fimpara
   
fimalgoritmo
```

### 6.4 Operações com Vetores

**Exemplo 3: Produto Escalar**

Calcular o produto escalar entre dois vetores: $\vec{A} \cdot \vec{B} = \sum_{i=1}^{n} A_i B_i$

```portugol
algoritmo "ProdutoEscalar"
var
   vetor_A: vetor [1..3] de real
   vetor_B: vetor [1..3] de real
   produto: real
   i: inteiro

inicio
   escreva("Digite as componentes do vetor A:")
   para i de 1 ate 3 passo 1 faca
      escreva("A[", i, "]: ")
      leia(vetor_A[i])
   fimpara
   
   escreva("Digite as componentes do vetor B:")
   para i de 1 ate 3 passo 1 faca
      escreva("B[", i, "]: ")
      leia(vetor_B[i])
   fimpara
   
   produto <- 0
   para i de 1 ate 3 passo 1 faca
      produto <- produto + vetor_A[i] * vetor_B[i]
   fimpara
   
   escreva("Produto escalar A·B = ", produto)
   
fimalgoritmo
```

---

## Capítulo 7: Funções e Procedimentos

### 7.1 Conceito de Função

Uma **função** é um bloco de código reutilizável que realiza uma tarefa específica. Recebe **parâmetros** (entrada) e retorna um **resultado** (saída).

**Analogia Física:** Uma função é como uma fórmula. Você fornece dados (entrada), a fórmula processa e retorna um resultado.

### 7.2 Estrutura de Função

```portugol
funcao Nome_Funcao(parametro1: tipo1, parametro2: tipo2): tipo_retorno
var
   // variáveis locais
inicio
   // corpo da função
   retorne resultado
fimfuncao
```

**Exemplo 1: Função para Calcular Energia Cinética**

$$E_c = \frac{1}{2}mv^2$$

```portugol
funcao CalcularEnergiaCinetica(massa: real, velocidade: real): real
var
   energia: real
inicio
   energia <- 0.5 * massa * velocidade * velocidade
   retorne energia
fimfuncao

algoritmo "AplicacaoEnergiaC"
var
   m, v, Ec: real

inicio
   escreva("Digite a massa (kg): ")
   leia(m)
   escreva("Digite a velocidade (m/s): ")
   leia(v)
   
   Ec <- CalcularEnergiaCinetica(m, v)
   
   escreva("Energia cinética: ", Ec:5:2, " J")
   
fimalgoritmo
```

### 7.3 Procedimentos

Um **procedimento** é como uma função, mas não retorna valor.

```portugol
procedimento Nome_Procedimento(parametro1: tipo1, parametro2: tipo2)
var
   // variáveis locais
inicio
   // corpo do procedimento
fimprocedimento
```

**Exemplo 2: Procedimento para Exibir Tabela**

```portugol
procedimento ExibirTabelaQuedaLivre(tempo_maximo: inteiro)
var
   tempo: inteiro
   velocidade, posicao: real
   g: real

inicio
   g <- 9.81
   
   escreva("Tempo(s) | Velocidade(m/s) | Posição(m)")
   escreva("---------|-----------------|----------")
   
   para tempo de 0 ate tempo_maximo passo 1 faca
      velocidade <- g * tempo
      posicao <- 0.5 * g * tempo * tempo
      escreva(tempo, "       | ", velocidade:7:2, "         | ", posicao:5:2)
   fimpara
   
fimprocedimento

algoritmo "AplicacaoQuedaLivre"
inicio
   ExibirTabelaQuedaLivre(5)
fimalgoritmo
```

### 7.4 Escopo de Variáveis

- **Variáveis locais:** definidas dentro de uma função/procedimento
- **Variáveis globais:** definidas no programa principal

**Exemplo 3: Escopo**

```portugol
var
   g: real  // variável global

funcao VelocidadeQueda(tempo: real): real
var
   v: real  // variável local
inicio
   v <- g * tempo
   retorne v
fimfuncao

algoritmo "TestEscopo"
inicio
   g <- 9.81
   escreva("Velocidade em 2s: ", VelocidadeQueda(2.0), " m/s")
fimalgoritmo
```

### 7.5 Aplicação: Módulo de Conversão de Unidades

```portugol
funcao CelsiusParaFahrenheit(celsius: real): real
inicio
   retorne (celsius * 9/5) + 32
fimfuncao

funcao MetroParaP(metros: real): real
inicio
   retorne metros * 3.28084
fimfuncao

procedimento ExibirConversoes(valor: real)
var
   fahrenheit, pes: real

inicio
   fahrenheit <- CelsiusParaFahrenheit(valor)
   pes <- MetroParaP(valor)
   
   escreva("Temperatura: ", fahrenheit:5:2, " °F")
   escreva("Comprimento: ", pes:5:2, " pés")
   
fimprocedimento
```

---

## Capítulo 8: Métodos Numéricos em Física

### 8.1 Introdução a Métodos Numéricos

Muitos problemas em Física não possuem solução analítica. **Métodos numéricos** aproximam a solução através de algoritmos computacionais.

**Aplicações em Física:**
- Integração de funções complexas
- Solução de equações diferenciais
- Otimização
- Simulações de sistemas dinâmicos

### 8.2 Raízes de Funções: Método da Bisseção

O método da bisseção encontra uma raiz de uma função em um intervalo $[a, b]$ onde $f(a) \cdot f(b) < 0$.

**Algoritmo:**

1. Calcular o ponto médio: $c = \frac{a + b}{2}$
2. Se $|f(c)| < \epsilon$, retornar $c$
3. Senão, reduzir o intervalo e repetir

**Exemplo 1: Encontrar Raiz de $f(x) = x^3 - 2$**

```portugol
funcao F(x: real): real
inicio
   retorne (x*x*x) - 2
fimfuncao

algoritmo "BisseccaoRaiz"
var
   a, b, c, fa, fb, fc: real
   iteracoes, max_iter: inteiro
   tolerancia: real

inicio
   a <- 1.0
   b <- 2.0
   tolerancia <- 0.0001
   max_iter <- 50
   iteracoes <- 0
   
   enquanto (iteracoes < max_iter) faca
      c <- (a + b) / 2
      fa <- F(a)
      fb <- F(b)
      fc <- F(c)
      
      se (abs(fc) < tolerancia) entao
         escreva("Raiz encontrada: ", c)
         escreva("f(c) = ", fc)
         escreva("Iterações: ", iteracoes)
         saia
      fimse
      
      se (fa * fc < 0) entao
         b <- c
      senao
         a <- c
      fimse
      
      iteracoes <- iteracoes + 1
   fimenquanto
   
fimalgoritmo
```

### 8.3 Diferenciação Numérica

Aproximar a derivada usando diferenças finitas:

$$f'(x) \approx \frac{f(x + h) - f(x - h)}{2h}$$

**Exemplo 2: Calcular Derivada de $f(x) = \sin(x)$**

```portugol
funcao F(x: real): real
inicio
   retorne sen(x)
fimfuncao

funcao DerivadaNumerica(x: real, h: real): real
var
   df: real
inicio
   df <- (F(x + h) - F(x - h)) / (2 * h)
   retorne df
fimfuncao

algoritmo "DiferenciacaoNumerica"
var
   x, h, derivada: real

inicio
   x <- 0.7854  // π/4 radianos
   h <- 0.001
   
   derivada <- DerivadaNumerica(x, h)
   
   escreva("Derivada de sen(x) em x = π/4")
   escreva("Valor numérico: ", derivada:5:4)
   escreva("Valor teórico (cos(π/4)): ", cos(x):5:4)
   
fimalgoritmo
```

### 8.4 Método de Euler para EDO

Resolver uma equação diferencial ordinária: $\frac{dy}{dx} = f(x, y)$

$$y_{n+1} = y_n + h \cdot f(x_n, y_n)$$

**Exemplo 3: Movimento com Arrasto**

Resolver: $\frac{dv}{dt} = g - \frac{b}{m}v$ (queda com resistência do ar)

```portugol
algoritmo "EulerResistenciaAr"
var
   t, v, a, h: real
   g, b, m: real
   passos, i: inteiro

inicio
   // Parâmetros
   g <- 9.81
   b <- 0.5
   m <- 1.0
   h <- 0.01
   passos <- 100
   
   // Condição inicial
   t <- 0
   v <- 0
   
   escreva("Tempo(s) | Velocidade(m/s)")
   escreva("---------|----------------")
   
   para i de 0 ate passos passo 1 faca
      se (i % 10 = 0) entao
         escreva(t:5:2, "  | ", v:7:2)
      fimse
      
      // Método de Euler
      a <- g - (b/m) * v
      v <- v + h * a
      t <- t + h
   fimpara
   
fimalgoritmo
```

### 8.5 Integração Numérica: Regra de Simpson

Aproximação mais precisa que o trapézio:

$$\int_a^b f(x)dx \approx \frac{h}{3} \sum_{i=0}^{n/2-1} [f(x_{2i}) + 4f(x_{2i+1}) + f(x_{2i+2})]$$

---

## Capítulo 9: Tratamento de Dados e Visualização

### 9.1 Importância do Tratamento de Dados

Em experimentos físicos, os dados brutos raramente estão prontos para análise. O **tratamento de dados** envolve:

- Limpeza (remover outliers)
- Normalização
- Cálculo de estatísticas
- Visualização

### 9.2 Estatísticas Básicas

**Exemplo 1: Média, Desvio Padrão e Variância**

```portugol
algoritmo "EstatisticaBasica"
var
   valores: vetor [1..20] de real
   media, variancia, desvio_padrao: real
   soma, soma_quad: real
   i, n: inteiro

inicio
   n <- 5
   
   escreva("Digite 5 valores de medidas:")
   para i de 1 ate n passo 1 faca
      escreva("Valor ", i, ": ")
      leia(valores[i])
   fimpara
   
   // Calcular média
   soma <- 0
   para i de 1 ate n passo 1 faca
      soma <- soma + valores[i]
   fimpara
   media <- soma / n
   
   // Calcular variância
   soma_quad <- 0
   para i de 1 ate n passo 1 faca
      soma_quad <- soma_quad + (valores[i] - media) * (valores[i] - media)
   fimpara
   variancia <- soma_quad / (n - 1)
   
   desvio_padrao <- raiz(variancia)
   
   escreva("")
   escreva("Média: ", media:5:2)
   escreva("Variância: ", variancia:5:4)
   escreva("Desvio Padrão: ", desvio_padrao:5:4)
   
fimalgoritmo
```

### 9.3 Identificação de Outliers

Usar o critério de desvio padrão: valores além de $3\sigma$ são outliers.

```portugol
algoritmo "DeteccaoOutliers"
var
   dados: vetor [1..100] de real
   media, desvio_padrao: real
   i, n, outliers: inteiro
   limite_superior, limite_inferior: real

inicio
   // ... (cálculo de média e desvio_padrao como anterior)
   
   limite_superior <- media + 3 * desvio_padrao
   limite_inferior <- media - 3 * desvio_padrao
   
   outliers <- 0
   para i de 1 ate n passo 1 faca
      se (dados[i] > limite_superior ou dados[i] < limite_inferior) entao
         escreva("Outlier detectado: ", dados[i])
         outliers <- outliers + 1
      fimse
   fimpara
   
   escreva("Total de outliers: ", outliers)
   
fimalgoritmo
```

### 9.4 Conceito de Interpolação

Estimar valores entre pontos conhecidos.

**Interpolação Linear:** 

$$y = y_1 + \frac{x - x_1}{x_2 - x_1}(y_2 - y_1)$$

**Exemplo 2: Tabela de Dados com Interpolação**

```portugol
funcao InterpolacaoLinear(x: real, x1: real, y1: real, x2: real, y2: real): real
var
   y: real
inicio
   y <- y1 + ((x - x1)/(x2 - x1)) * (y2 - y1)
   retorne y
fimfuncao

algoritmo "InterpolacaoDados"
var
   x_busca: real
   resultado: real

inicio
   // Dados conhecidos
   // x=0 → y=0, x=10 → y=100
   
   escreva("Digite um valor x entre 0 e 10: ")
   leia(x_busca)
   
   resultado <- InterpolacaoLinear(x_busca, 0, 0, 10, 100)
   
   escreva("Valor interpolado de y: ", resultado:5:2)
   
fimalgoritmo
```

### 9.5 Nota sobre Visualização

A visualização de dados é fundamental em Física. Embora Português Estruturado seja limitado para gráficos, em Python (próximo capítulo) usaremos bibliotecas como `matplotlib` para criar visualizações profissionais de:

- Histogramas
- Gráficos de dispersão
- Curvas ajustadas
- Campos vetoriais

---

## Capítulo 10: Projetos Integrados em Física

### 10.1 Projeto 1: Simulação de Lançamento de Projétil com Arrasto

**Objetivo:** Simular a trajetória de um projétil considerando a resistência do ar.

**Física:**

As equações de movimento com arrasto quadrático são:

$$\frac{dx}{dt} = v_x$$
$$\frac{dv_x}{dt} = -\frac{bv_x\sqrt{v_x^2 + v_y^2}}{m}$$
$$\frac{dy}{dt} = v_y$$
$$\frac{dv_y}{dt} = -g - \frac{bv_y\sqrt{v_x^2 + v_y^2}}{m}$$

**Algoritmo Simplificado (sem arrasto para VisualG):**

```portugol
algoritmo "SimulacaoProjetil"
var
   v0, angulo, x, y, vx, vy, t, dt: real
   teta, g, tempo_final: real
   i, passos: inteiro

inicio
   v0 <- 20.0
   angulo <- 45.0
   g <- 9.81
   dt <- 0.01
   tempo_final <- 3.0
   passos <- inteiro(tempo_final / dt)
   
   teta <- angulo * 3.14159 / 180
   vx <- v0 * cos(teta)
   vy <- v0 * sen(teta)
   
   x <- 0
   y <- 0
   t <- 0
   
   escreva("Tempo(s) | Posição X(m) | Posição Y(m) | Altura(m)")
   
   para i de 0 ate passos passo 1 faca
      se (y < 0) entao
         escreva("Projectil atingiu o solo")
         saia
      fimse
      
      se (i % 100 = 0) entao
         escreva(t:5:2, "   | ", x:7:2, "     | ", y:7:2)
      fimse
      
      // Atualizar posições (Método de Euler)
      x <- x + vx * dt
      y <- y + vy * dt
      vy <- vy - g * dt
      t <- t + dt
   fimpara
   
   escreva("Alcance máximo: ", x:5:2, " m")
   
fimalgoritmo
```

### 10.2 Projeto 2: Análise de Dados de Laboratório

**Cenário:** Você realizou um experimento para medir a aceleração da gravidade usando pêndulo simples.

**Fórmula Teórica:**

$$T = 2\pi\sqrt{\frac{L}{g}} \Rightarrow g = \frac{4\pi^2 L}{T^2}$$

**Objetivo:** Análise estatística dos dados e estimativa de $g$.

```portugol
algoritmo "AnalisePendulo"
var
   comprimento, periodo: real
   g_calculado, media_g, soma_g: real
   desvio_padrao, variancia, soma_quad: real
   i, n: inteiro
   g_medido: vetor [1..5] de real
   pi: real

inicio
   pi <- 3.14159
   n <- 5
   
   comprimento <- 1.0  // 1 metro
   
   escreva("Digite 5 períodos medidos (em segundos):")
   soma_g <- 0
   
   para i de 1 ate n passo 1 faca
      escreva("Período ", i, ": ")
      leia(periodo)
      
      g_calculado <- (4 * pi * pi * comprimento) / (periodo * periodo)
      g_medido[i] <- g_calculado
      soma_g <- soma_g + g_calculado
   fimpara
   
   media_g <- soma_g / n
   
   // Calcular desvio padrão
   soma_quad <- 0
   para i de 1 ate n passo 1 faca
      soma_quad <- soma_quad + (g_medido[i] - media_g) * (g_medido[i] - media_g)
   fimpara
   
   variancia <- soma_quad / (n - 1)
   desvio_padrao <- raiz(variancia)
   
   escreva("")
   escreva("=== RESULTADOS ===")
   escreva("g estimado: ", media_g:5:2, " ± ", desvio_padrao:5:2, " m/s²")
   escreva("Valor teórico: 9.81 m/s²")
   escreva("Erro percentual: ", ((media_g - 9.81)/9.81)*100:5:2, "%")
   
fimalgoritmo
```

### 10.3 Projeto 3: Circuito RC - Simulação de Carga de Capacitor

**Física:**

A tensão sobre um capacitor carregando é:

$$V_C(t) = V_0(1 - e^{-t/RC})$$

```portugol
algoritmo "CircuitoRC"
var
   V0, R, C, tau, t, Vc, tmax, dt: real
   i, passos: inteiro

inicio
   V0 <- 10.0   // 10 volts
   R <- 1000.0  // 1 kΩ
   C <- 1.0e-6  // 1 µF
   
   tau <- R * C
   dt <- 0.001
   tmax <- 5.0 * tau
   passos <- inteiro(tmax / dt)
   
   t <- 0
   
   escreva("Carga de Capacitor em Circuito RC")
   escreva("Tempo(s)     | Tensão(V)")
   escreva("------------|----------")
   
   para i de 0 ate passos passo 1 faca
      Vc <- V0 * (1 - exp(-t / tau))
      
      se (i % 100 = 0) entao
         escreva(t:8:4, "  | ", Vc:6:3)
      fimse
      
      t <- t + dt
   fimpara
   
fimalgoritmo
```

### 10.4 Orientações para Projetos Independentes

Ao desenvolver seu próprio projeto:

1. **Defina o problema claramente:** Qual fenômeno físico?
2. **Escreva as equações:** Quais fórmulas e leis estão envolvidas?
3. **Escolha o método numérico:** Integração? Otimização?
4. **Implemente o algoritmo:** Comece simples, teste incrementalmente
5. **Valide os resultados:** Compare com valores teóricos ou experimentais
6. **Documente e comunique:** Código legível com comentários

---

## Referências e Recursos

- **PortalFísica:** https://www.portalfisica.com - Recursos em Física
- **VisualG:** Ferramenta gratuita para programação em Português Estruturado
- **Python:** Linguagem para computação científica (próximos capítulos)

---

## Apêndice: Funções Matemáticas em Português Estruturado

| Função | Descrição |
|--------|-----------|
| `abs(x)` | Valor absoluto |
| `sen(x)` | Seno (x em radianos) |
| `cos(x)` | Cosseno (x em radianos) |
| `tan(x)` | Tangente (x em radianos) |
| `raiz(x)` | Raiz quadrada |
| `exp(x)` | Exponencial ($e^x$) |
| `ln(x)` | Logaritmo natural |
| `log(x)` | Logaritmo base 10 |
| `potencia(x, y)` | $x^y$ |
| `int(x)` | Converte para inteiro |

---

**Fim da Apostila**

*Última revisão: Abril de 2026*
