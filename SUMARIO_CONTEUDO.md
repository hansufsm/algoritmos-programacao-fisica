# Sumário Detalhado do Material - Algoritmos e Programação para Física

## 📋 Materiais Criados

### 1. APOSTILA_ALGORITMOS_PROGRAMACAO.md
**Formato:** Markdown  
**Extensão:** ~90 páginas (23.000 palavras)  
**Tempo de leitura estimado:** 15-20 horas

---

## 📚 Estrutura Capitular da Apostila

### **CAPÍTULO 1: Introdução a Algoritmos** (8 páginas)

**Objetivos:**
- Definir algoritmo e suas características
- Compreender a importância em Física
- Diferenciar representações de algoritmos
- Introduzir complexidade computacional

**Tópicos principais:**
- 1.1: O que é um algoritmo?
- 1.2: Algoritmos em contexto de Física
  - Exemplo: Cálculo de trajetória de projétil
  - Fórmulas: $H = \frac{v_0^2 \sin^2(\theta)}{2g}$, $R = \frac{v_0^2 \sin(2\theta)}{g}$, $T = \frac{2v_0 \sin(\theta)}{g}$
- 1.3: Formas de representação
  - Narrativa
  - Fluxograma
  - Pseudocódigo
  - Português Estruturado
- 1.4: Exemplo completo com código Portugol
- 1.5: Complexidade (O(1), O(n), O(n²), O(log n))

**Exemplo Portugol:**
```
algoritmo "TrajetoProjetil"
var
   v0, angulo, teta, g, H, R, T, pi: real
inicio
   pi <- 3.14159
   g <- 9.81
   escreva("Digite a velocidade inicial (m/s): ")
   leia(v0)
   ...
fimalgoritmo
```

**Exercício no Notebook 01:**
- Cálculo de trajetória com visualização matplotlib

---

### **CAPÍTULO 2: Lógica de Programação** (6 páginas)

**Objetivos:**
- Entender lógica booleana
- Usar operadores relacionais
- Implementar estruturas lógicas fundamentais

**Tópicos principais:**
- 2.1: Proposições e lógica booleana
  - Operadores: E, OU, NÃO
  - Tabelas-verdade
- 2.2: Operadores relacionais
  - =, ≠, >, <, ≥, ≤
- 2.3: Estruturas lógicas
  - Sequência
  - Seleção
  - Repetição
- 2.4: Aplicações em Física
  - Classificação de movimento
  - Validação de energia cinética

**Exemplo contextualizações:**
```portugol
se (v = 0) entao
   escreva("Repouso")
senao
   se (v > 0) entao
      escreva("Movimento progressivo")
   ...
fimse
```

**Exercício no Notebook 01:**
- Classificação automática de movimentos

---

### **CAPÍTULO 3: Variáveis e Tipos de Dados** (7 páginas)

**Objetivos:**
- Compreender conceito de variável
- Reconhecer tipos primitivos
- Aplicar convenções de nomenclatura
- Entender escopo de variáveis

**Tópicos principais:**
- 3.1: Conceito de variável
  - Analogia com recipientes físicos
- 3.2: Tipos primitivos
  - Inteiro (INT): para contadores, índices
  - Real (REAL): para medidas contínuas
    - Exemplo: $g = 6.674 \times 10^{-11}$ m³/kg·s²
  - Caractere/Cadeia (CARACTERE/CADEIA): texto
  - Lógico (LOGICO): verdadeiro/falso
- 3.3: Declaração de variáveis
  - Sintaxe Portugol
- 3.4: Convenções de nomenclatura
  - Clareza: `velocidade_inicial` em vez de `v0`
  - Consistência: padrão único
  - Sem caracteres especiais
- 3.5: Escopo de variáveis

**Exemplo prático:**
```portugol
var
   temperatura: real
   pressao: real
   numero_mols: real
   constante_R: real

inicio
   constante_R <- 8.314
   temperatura <- 298.15
   ...
   pressao <- (numero_mols * constante_R * temperatura) / volume
fimalgoritmo
```

**Exercícios no Notebook 01:**
- Validação de dados experimentais
- Conversor de temperatura

---

### **CAPÍTULO 4: Estruturas de Controle** (8 páginas)

**Objetivos:**
- Usar estruturas condicional (SE-SENÃO)
- Combinar múltiplas condições
- Aplicar validação de dados

**Tópicos principais:**
- 4.1: Estrutura SE-SENÃO (If-Else)
  - Sintaxe: `se (condicao) entao ... senao ... fimse`
  - Exemplo: Classificar estado de matéria
  - $T < 0°C$: Sólido; $0 ≤ T < 100$: Líquido; $T ≥ 100$: Gasoso
- 4.2: Estrutura SE-SENÃO-SE aninhada
  - Múltiplas condições
  - Exemplo: Classificar movimento por aceleração
- 4.3: Operador ternário
  - Simplificação de código
- 4.4: Aplicação - Validação de dados experimentais
  - Verificar se medida está dentro de limites
  - Calcular erro percentual

**Exemplo com validação:**
```portugol
se (valor_medido >= limite_minimo e valor_medido <= limite_maximo) entao
   escreva("Medida válida")
   erro_percentual <- ((valor_medido - 9.81) / 9.81) * 100
   escreva("Erro percentual: ", erro_percentual:5:2, "%")
senao
   escreva("Medida fora dos limites aceitáveis")
fimse
```

**Exercício no Notebook 02:**
- Classificação de estados de matéria

---

### **CAPÍTULO 5: Estruturas de Repetição** (9 páginas)

**Objetivos:**
- Implementar loops PARA, ENQUANTO e REPETIR-ATÉ
- Controlar fluxo com SAIA
- Aplicar em cálculos iterativos

**Tópicos principais:**
- 5.1: Loop PARA (FOR)
  - Sintaxe: `para variavel de inicio ate fim passo incremento faca ... fimpara`
  - Aplicação: Tabela de velocidades em queda livre
  - $v(t) = gt$
- 5.2: Loop ENQUANTO (WHILE)
  - Executa enquanto condição é verdadeira
  - Aplicação: Série de Leibniz para π
  - $\frac{\pi}{4} = \sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1}$
- 5.3: Loop REPETIR-ATÉ (DO-UNTIL)
  - Garante pelo menos uma execução
  - Aplicação: Validação repetida de entrada
- 5.4: Controle de fluxo - SAIA
  - Interrompe execução do loop
- 5.5: Aplicação - Integração numérica
  - Regra do Trapézio
  - $\int_a^b f(x) dx \approx \sum_{i=0}^{n-1} \frac{h(f(x_i) + f(x_{i+1}))}{2}$

**Exemplo - Queda Livre:**
```portugol
para tempo de 0 ate 5 passo 1 faca
   velocidade <- g * tempo
   escreva(tempo, "        | ", velocidade:6:2)
fimpara
```

**Exemplo - Série Leibniz:**
```portugol
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
```

**Exercícios no Notebook 02:**
- Tabela de queda livre
- Série de Leibniz para π
- Análise de convergência

---

### **CAPÍTULO 6: Vetores e Matrizes** (8 páginas)

**Objetivos:**
- Trabalhar com estruturas de dados
- Implementar operações vetoriais
- Visualizar dados multidimensionais

**Tópicos principais:**
- 6.1: Conceito de vetor (array 1D)
  - Analogia: Sequência de medições
  - Acesso por índice
- 6.2: Declaração e uso de vetores
  - Sintaxe: `var velocidades: vetor [1..5] de real`
  - Exemplo: Vetor de velocidades
- 6.3: Matrizes (arrays 2D)
  - Declaração: `var matriz_dados: vetor [1..3, 1..3] de real`
  - Aplicação: Coordenadas de partículas
  - Cálculo de distância até origem: $d = \sqrt{x^2 + y^2 + z^2}$
- 6.4: Operações com vetores
  - Produto escalar: $\vec{A} \cdot \vec{B} = \sum_{i=1}^{n} A_i B_i$
  - Norma/magnitude: $|\vec{A}| = \sqrt{\sum A_i^2}$

**Exemplo - Produto Escalar:**
```portugol
produto <- 0
para i de 1 ate 3 passo 1 faca
   produto <- produto + vetor_A[i] * vetor_B[i]
fimpara
escreva("Produto escalar A·B = ", produto)
```

**Exemplo - Matriz de Posições:**
```portugol
posicoes: vetor [1..10, 1..3] de real

para i de 1 ate 10 passo 1 faca
   distancia <- raiz(posicoes[i,1]*posicoes[i,1] + 
                     posicoes[i,2]*posicoes[i,2] + 
                     posicoes[i,3]*posicoes[i,3])
fimpara
```

**Exercícios no Notebook 02:**
- Produto escalar entre vetores
- Matriz de coordenadas 3D
- Visualização 3D de partículas

---

### **CAPÍTULO 7: Funções e Procedimentos** (8 páginas)

**Objetivos:**
- Estruturar código em funções reutilizáveis
- Entender passagem de parâmetros
- Gerenciar escopo local e global

**Tópicos principais:**
- 7.1: Conceito de função
  - Analogia: Fórmula matemática
  - Entrada (parâmetros) → Processamento → Saída (retorno)
- 7.2: Estrutura de função
  - Sintaxe: `funcao Nome_Funcao(parametro1: tipo1, parametro2: tipo2): tipo_retorno`
  - Exemplo: Energia cinética
  - $E_c = \frac{1}{2}mv^2$
- 7.3: Procedimentos
  - Sem valor de retorno
  - Exemplo: Exibir tabela de queda livre
- 7.4: Escopo de variáveis
  - Locais (dentro da função)
  - Globais (no programa principal)
- 7.5: Aplicação - Módulo de conversão de unidades
  - Celsius para Fahrenheit: $F = C \times \frac{9}{5} + 32$
  - Metro para pé: $\text{pés} = \text{metros} \times 3.28084$

**Exemplo - Função de Energia:**
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

**Exercício no Notebook 03:**
- Módulo de funções físicas (energia cinética, potencial, mecânica)

---

### **CAPÍTULO 8: Métodos Numéricos em Física** (12 páginas)

**Objetivos:**
- Implementar métodos para resolver problemas sem solução analítica
- Usar integração numérica
- Resolver equações diferenciais

**Tópicos principais:**
- 8.1: Introdução a métodos numéricos
  - Quando usar: Problemas complexos sem solução fechada
  - Aplicações: EDOs, otimização, simulações
- 8.2: Raízes de funções - Método da Bisseção
  - Encontra raiz em intervalo $[a, b]$ com $f(a) \cdot f(b) < 0$
  - Algoritmo iterativo
  - Convergência: $O(\log n)$
  - Exemplo: $f(x) = x^3 - 2$, raiz = $\sqrt[3]{2}$
- 8.3: Diferenciação numérica
  - Diferença central: $f'(x) \approx \frac{f(x+h) - f(x-h)}{2h}$
  - Diferença progressiva: $f'(x) \approx \frac{f(x+h) - f(x)}{h}$
  - Exemplo: Derivada de $\sin(x)$ = $\cos(x)$
- 8.4: Método de Euler para EDO
  - $y_{n+1} = y_n + h \cdot f(x_n, y_n)$
  - Aplicação: Movimento com arrasto
  - $\frac{dv}{dt} = g - \frac{b}{m}v$
- 8.5: Integração numérica - Regra de Simpson
  - Mais precisa que trapézio
  - Usa polinômios quadráticos

**Exemplo - Bisseção:**
```portugol
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
   
   enquanto (iteracoes < max_iter) faca
      c <- (a + b) / 2
      fa <- F(a)
      fb <- F(b)
      fc <- F(c)
      
      se (abs(fc) < tolerancia) entao
         escreva("Raiz encontrada: ", c)
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

**Exercícios no Notebook 03:**
- Método da Bisseção com análise de convergência
- Diferenciação numérica com comparação de precisão
- Integração numérica com regra do trapézio

---

### **CAPÍTULO 9: Tratamento de Dados e Visualização** (7 páginas)

**Objetivos:**
- Calcular estatísticas descritivas
- Identificar outliers
- Interpolar dados

**Tópicos principais:**
- 9.1: Importância do tratamento de dados
  - Limpeza, normalização, análise, visualização
- 9.2: Estatísticas básicas
  - Média: $\mu = \frac{1}{n}\sum_{i=1}^{n} x_i$
  - Variância: $\sigma^2 = \frac{1}{n-1}\sum_{i=1}^{n} (x_i - \mu)^2$
  - Desvio padrão: $\sigma = \sqrt{\sigma^2}$
  - Aplicação: Análise de medidas experimentais
- 9.3: Detecção de outliers
  - Critério: Valores além de $3\sigma$ são outliers
- 9.4: Interpolação
  - Linear: $y = y_1 + \frac{x - x_1}{x_2 - x_1}(y_2 - y_1)$
  - Aplicação: Estimar valores entre pontos conhecidos
- 9.5: Visualização
  - Histogramas, gráficos de dispersão, curvas
  - Ferramenta: Matplotlib em Python

**Exemplo - Estatísticas:**
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
   
   soma <- 0
   para i de 1 ate n passo 1 faca
      soma <- soma + valores[i]
   fimpara
   media <- soma / n
   
   soma_quad <- 0
   para i de 1 ate n passo 1 faca
      soma_quad <- soma_quad + (valores[i] - media) * (valores[i] - media)
   fimpara
   variancia <- soma_quad / (n - 1)
   desvio_padrao <- raiz(variancia)
   
   escreva("Média: ", media:5:2)
   escreva("Variância: ", variancia:5:4)
   escreva("Desvio Padrão: ", desvio_padrao:5:4)
fimalgoritmo
```

---

### **CAPÍTULO 10: Projetos Integrados em Física** (10 páginas)

**Objetivos:**
- Integrar todos os conceitos aprendidos
- Resolver problemas reais de Física
- Documentar e comunicar resultados

**Tópicos principais:**
- 10.1: Projeto 1 - Simulação de Lançamento de Projétil
  - Equações de movimento com arrasto quadrático
  - Método de Euler para integração
  - Visualização de trajetória
  - Análise de alcance máximo
- 10.2: Projeto 2 - Análise de Dados de Laboratório
  - Pêndulo simples: $T = 2\pi\sqrt{\frac{L}{g}}$
  - Resolução: $g = \frac{4\pi^2 L}{T^2}$
  - Análise estatística de medidas
  - Estimação de g com incerteza
- 10.3: Projeto 3 - Circuito RC
  - Tensão no capacitor: $V_C(t) = V_0(1 - e^{-t/RC})$
  - Simulação da carga
  - Análise de constante de tempo
- 10.4: Orientações para projetos independentes

**Exemplo - Simulação de Projétil:**
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
      
      x <- x + vx * dt
      y <- y + vy * dt
      vy <- vy - g * dt
      t <- t + dt
   fimpara
   
   escreva("Alcance máximo: ", x:5:2, " m")
fimalgoritmo
```

---

## 📓 Notebooks Jupyter

### **Notebook 01: Conceitos Básicos**

**Exercícios resolvidos:**
1. Trajetória de projétil (1.1)
   - Cálculos analíticos
   - Visualização 2D
   
2. Classificação de movimento (2.1)
   - Tabela de casos de teste
   
3. Validação de dados (3.1)
   - Verificação de tolerância
   - Gráfico de validação
   
4. Conversor de temperatura (3.2)
   - Classe com múltiplas conversões

**Exercícios propostos:**
- Energia potencial gravitacional
- Lei de Coulomb

**Bibliotecas usadas:** NumPy, Matplotlib, Pandas

---

### **Notebook 02: Estruturas de Controle e Repetição**

**Exercícios resolvidos:**
1. Estados de matéria (4.1)
2. Tabela de queda livre (5.1)
   - Gráficos de v vs t e h vs t
3. Série de Leibniz (5.2)
   - Análise de convergência
   - Gráfico de erro vs n
4. Produto escalar (6.1)
   - Casos de teste
5. Matriz de coordenadas (6.2)
   - Visualização 3D

**Exercícios propostos:**
- Validação repetida de entrada
- Soma de vetores

**Bibliotecas usadas:** NumPy, Pandas, Matplotlib, mpl_toolkits

---

### **Notebook 03: Métodos Numéricos e Projetos**

**Exercícios resolvidos:**
1. Funções físicas (7.1)
   - Energia cinética, potencial, mecânica
   - Trabalho
2. Método da bisseção (8.1)
   - Encontrar raizes
   - Análise de convergência
3. Diferenciação numérica (8.2)
   - Comparação de métodos
   - Análise de precisão
4. Integração numérica (8.3)
   - Regra do trapézio
   - Convergência
5. Projeto - Pêndulo (10.1)
   - Análise estatística
   - Regressão linear
   - Estimação de g
6. Projeto - Queda com arrasto (10.2)
   - Integração de EDO
   - Velocidade terminal

**Exercícios propostos:**
- Lei de Coulomb numérica
- Oscilador harmônico amortecido

**Bibliotecas usadas:** NumPy, Pandas, Matplotlib, SciPy

---

## 🎓 Correspondência com Tópicos de Física

| Conceito Algoritmo | Aplicação Física | Capítulo |
|-------------------|-----------------|----------|
| Sequência | Cálculo de trajetória | 1, 10 |
| Condicionais | Classificação de movimento | 2, 4 |
| Loops | Integração numérica, séries | 5, 8 |
| Vetores | Coordenadas, vetores força | 6 |
| Funções | Energias, forças | 7 |
| Métodos numéricos | Equações diferenciais, raízes | 8 |
| Estatística | Dados experimentais | 9 |
| Projetos | Simulações físicas completas | 10 |

---

## 📊 Cronograma Recomendado (8 semanas)

### **Semana 1: Fundamentos (Capítulos 1-3)**
- **Aulas:** Apostila cap. 1-3
- **Lab:** Português Estruturado em VisualG
- **Notebook:** 01_Conceitos_Basicos (exercícios 1.1, 2.1, 3.1)
- **Horas:** 6-8h

### **Semana 2: Estruturas de Controle (Capítulo 4)**
- **Aulas:** Apostila cap. 4
- **Lab:** Estruturas SE-SENÃO, aplicações em Física
- **Notebook:** 02_Estruturas (exercício 4.1)
- **Horas:** 4-6h

### **Semana 3: Repetição (Capítulo 5)**
- **Aulas:** Apostila cap. 5
- **Lab:** Loops PARA, ENQUANTO, integração numérica
- **Notebook:** 02_Estruturas (exercícios 5.1, 5.2)
- **Horas:** 6-8h

### **Semana 4: Vetores e Matrizes (Capítulo 6)**
- **Aulas:** Apostila cap. 6
- **Lab:** Operações vetoriais, matrizes
- **Notebook:** 02_Estruturas (exercícios 6.1, 6.2)
- **Horas:** 5-6h

### **Semana 5: Funções (Capítulo 7)**
- **Aulas:** Apostila cap. 7
- **Lab:** Funções reutilizáveis, escopo
- **Notebook:** 03_Metodos (exercício 7.1)
- **Horas:** 5-6h

### **Semana 6: Métodos Numéricos (Capítulo 8)**
- **Aulas:** Apostila cap. 8
- **Lab:** Bisseção, diferenciação, integração
- **Notebook:** 03_Metodos (exercícios 8.1, 8.2, 8.3)
- **Horas:** 8-10h

### **Semana 7: Tratamento de Dados (Capítulo 9)**
- **Aulas:** Apostila cap. 9
- **Lab:** Estatística, outliers, visualização
- **Projeto:** Análise de dados experimentais
- **Horas:** 6-8h

### **Semana 8: Projetos Integrados (Capítulo 10)**
- **Aulas:** Apostila cap. 10
- **Projeto 1:** Simulação de projétil
- **Projeto 2:** Pêndulo simples
- **Notebook:** 03_Metodos (exercícios 10.1, 10.2)
- **Horas:** 8-10h

**Total:** 48-62 horas

---

## 🎯 Competências Desenvolvidas

### **Técnicas:**
- ✓ Programação em Português Estruturado (VisualG)
- ✓ Programação em Python
- ✓ Uso de NumPy, Pandas, Matplotlib
- ✓ Resolução numérica de problemas
- ✓ Análise e visualização de dados

### **Conceituais:**
- ✓ Pensamento algorítmico
- ✓ Lógica computacional
- ✓ Métodos numéricos em Física
- ✓ Análise de erros e convergência
- ✓ Modelagem de sistemas físicos

### **Profissionais:**
- ✓ Documentação de código
- ✓ Comunicação de resultados
- ✓ Resolução de problemas
- ✓ Trabalho com dados experimentais
- ✓ Uso de ferramentas de simulação

---

## 📈 Dificuldade Progressiva

```
Capítulo 1-3: ████░░░░░░ (Básico - 25%)
Capítulo 4-6: ██████░░░░ (Intermediário - 50%)
Capítulo 7-8: ████████░░ (Avançado - 75%)
Capítulo 9-10: ██████████ (Especializado - 100%)
```

---

## ✅ Critérios de Avaliação Sugeridos

### **Prova 1 (30% - Semana 3)**
- Capítulos 1-4
- Tópicos: Algoritmos, lógica, variáveis, condicionais
- Formato: Questões abertas + código em Portugol

### **Prova 2 (30% - Semana 6)**
- Capítulos 5-7
- Tópicos: Loops, vetores, funções
- Formato: Problemas de programação + análise

### **Projetos (30%)**
- Projeto 1 (15%): Análise de dados experimentais
- Projeto 2 (15%): Simulação física completa

### **Participação/Listas (10%)**
- Exercícios propostos dos Notebooks
- Discussão de resultados

---

## 🔗 Recursos Complementares

### **Software Livre:**
- VisualG: https://www.visualg.com.br
- Python: https://www.python.org
- Jupyter: https://jupyter.org
- Google Colab: https://colab.research.google.com

### **Documentação:**
- NumPy: https://numpy.org/doc/
- SciPy: https://docs.scipy.org/
- Matplotlib: https://matplotlib.org/

### **Comunidade:**
- Stack Overflow: Dúvidas de programação
- GitHub: Exemplos e repositórios
- PortalFísica: Recursos em Física

---

**Versão:** 1.0  
**Última atualização:** Abril de 2026  
**Autor:** Docentes de Física - UFSM
