# Perguntas Frequentes — FSC1189 Algoritmos e Programação

**Disciplina:** FSC1189 — Algoritmo e Programação  
**Professor:** Prof. Hans Rogério Zimermann  
**Semestre:** 2026/1  
**Última atualização:** Abril de 2026

---

## 📋 Índice

1. [Conceitos Gerais](#conceitos-gerais)
2. [Módulo 1: Fundamentos](#módulo-1-fundamentos)
3. [Módulo 2: Estruturas de Iteração](#módulo-2-estruturas-de-iteração)
4. [Módulo 3: Funções e Métodos Numéricos](#módulo-3-funções-e-métodos-numéricos)
5. [Módulo 4: Aplicações Avançadas](#módulo-4-aplicações-avançadas)
6. [Ferramentas e Ambiente](#ferramentas-e-ambiente)
7. [Avaliação e Projetos](#avaliação-e-projetos)

---

## Conceitos Gerais

### O que é um algoritmo?

Um **algoritmo** é uma sequência finita de instruções bem definidas e ordenadas que resolvem um problema específico. Em programação, é um conjunto de passos que o computador segue para realizar uma tarefa.

**Exemplo:** Receita de bolo é um algoritmo — tem ingredientes (entrada), passos (instruções) e resultado final (saída).

**Características:**
- Entrada: dados iniciais
- Processamento: transformação dos dados
- Saída: resultado final
- Finitude: deve terminar em tempo finito
- Determinismo: mesmo input → mesmo output

---

### Qual a diferença entre algoritmo, pseudocódigo e código?

| Termo | O quê | Linguagem | Quem entende |
|---|---|---|---|
| **Algoritmo** | Ideia geral de como resolver | Linguagem natural (português) | Humanos |
| **Pseudocódigo** | Estrutura mais formal, próxima de código | Português Estruturado (Portugol) | Humanos + compilador VisualG |
| **Código** | Implementação executável | Linguagem de programação (Python, C, etc.) | Computador |

**Exemplo — Cálculo de média:**

*Algoritmo (português):*
```
1. Receber três notas
2. Somar as notas
3. Dividir por 3
4. Exibir resultado
```

*Pseudocódigo (Portugol em VisualG):*
```
algoritmo "Media"
var n1, n2, n3, media: real
inicio
   leia(n1, n2, n3)
   media <- (n1 + n2 + n3) / 3
   escreva(media)
fimalgoritmo
```

*Código (Python):*
```python
n1 = float(input("Nota 1: "))
n2 = float(input("Nota 2: "))
n3 = float(input("Nota 3: "))
media = (n1 + n2 + n3) / 3
print(f"Média: {media:.2f}")
```

---

### O que é complexidade Big-O?

**Complexidade Big-O** mede como o tempo de execução de um algoritmo cresce com o tamanho da entrada (n).

**Notações comuns:**

| Notação | Nome | Exemplo | Tempo para n=1000 |
|---|---|---|---|
| **O(1)** | Constante | Acesso a array por índice | Instantâneo |
| **O(log n)** | Logarítmica | Busca binária | ~10 operações |
| **O(n)** | Linear | Busca linear | ~1000 operações |
| **O(n log n)** | Linearítmica | Merge sort | ~10,000 operações |
| **O(n²)** | Quadrática | Bubble sort | ~1,000,000 operações |

**Visualmente:**
```
     Tempo
       ↑
       |     O(n²)
       |    /
       |   /  O(n log n)
       |  /  /
       | /  /
       |/  / O(log n)
       +------ O(1)
       └─────────→ Tamanho (n)
```

**Para memorizar:** O(1) < O(log n) < O(n) < O(n log n) < O(n²)

---

### Quando usar Português Estruturado (VisualG) vs Python?

| Aspecto | VisualG | Python |
|---|---|---|
| **Propósito** | Aprender lógica, design de algoritmo | Implementação prática, prototipagem rápida |
| **Sintaxe** | Portuguesa, visual | Inglesa, mais próxima de C |
| **Visualização** | Fluxograma automático | Sem fluxograma automático |
| **Bibliotecas** | Limitadas (entrada/saída básica) | NumPy, Pandas, Matplotlib, SciPy |
| **Ciência de Dados** | Não | Sim — industry standard |
| **Curva de aprendizado** | Suave | Moderada |

**Estratégia do curso:**
1. Aprenda os **conceitos em VisualG** (lógica clara, sem distração de sintaxe)
2. Implemente a mesma solução em **Python** (transferência de habilidades)
3. Use **Python para análise** de dados e projetos (NumPy, Matplotlib)

---

## Módulo 1: Fundamentos

### O que é um fluxograma e quando usar?

Um **fluxograma** é uma representação visual de um algoritmo usando símbolos padrão:

- **Óval** (●) — Início/Fim
- **Retângulo** (□) — Processo/atribuição
- **Losango** (◇) — Decisão (if)
- **Paralelogramo** (▭) — Entrada/Saída
- **Setas** (→) — Fluxo de controle

**Quando usar:**
- ✅ Na fase de design (antes de escrever código)
- ✅ Para comunicar com não-programadores
- ✅ Para algoritmos com muitas decisões (condicionals)
- ❌ Para algoritmos muito simples (media de 3 números)
- ❌ Para código já escrito (documento de depois)

**Exemplo — Validar temperatura:**
```
Início → Ler T → T ∈ [20,30]? 
                    ↙         ↘
                  Sim         Não
                   ↓           ↓
            "Válida"    "Fora do range"
                   ↓           ↓
                   └─→ Fim ←──┘
```

---

### Como fazer validação de dados em VisualG?

**Validação** significa verificar se a entrada está dentro de limites aceitáveis.

**Padrão básico:**

```visualg
algoritmo "Validacao"
var idade: inteiro
var valido: logico

inicio
   escreva("Digite sua idade: ")
   leia(idade)
   
   se (idade >= 0) e (idade <= 120) entao
      escreva("Idade válida")
      valido <- verdadeiro
   senao
      escreva("Idade fora do intervalo")
      valido <- falso
   fimse
fimalgoritmo
```

**Regras de validação comuns:**

```python
# Intervalo
if a <= valor <= b:
    print("Válido")

# Múltiplas condições (AND)
if (idade >= 18) e (renda > 1500):
    print("Qualificado para crédito")

# Exclusão (NÃO)
if valor <> 0:  # VisualG
if valor != 0:  # Python
    print("Não pode ser zero")

# Limites absolutos (ABS)
if |erro| < 0.001:
    print("Precisão atingida")
```

---

### Qual é a diferença entre tipos de dados: INTEIRO, REAL, CADEIA, LOGICO?

| Tipo | Intervalo | Exemplo | Operações |
|---|---|---|---|
| **INTEIRO** | -2³¹ a 2³¹-1 | 42, -5, 0 | +, −, ×, ÷ (inteira), mod |
| **REAL** | ±10⁻³⁸ a ±10³⁸ | 3.14, 2.71, -0.5 | +, −, ×, ÷, potência |
| **CADEIA** | Sequência de caracteres | "Olá", "T = 25°C" | concatenação (+), comprimento |
| **LOGICO** | Verdadeiro ou Falso | verdadeiro, falso | E, OU, NÃO |

**Exemplos em VisualG:**

```visualg
var idade: inteiro
var altura: real
var nome: cadeia
var aprovado: logico

idade <- 20
altura <- 1.75
nome <- "Maria"
aprovado <- idade >= 18

escreva(nome + " tem " + idade + " anos")
```

---

### Como usar estruturas de decisão (SE-SENÃO)?

**SE-SENÃO** controla o fluxo do programa baseado em condições booleanas.

**Sintaxe VisualG:**

```visualg
se condicao entao
   { comandos executados se true }
senao
   { comandos executados se false }
fimse
```

**Exemplo — Classificar movimento:**

```visualg
algoritmo "ClassificaMovimento"
var a, v: real

inicio
   escreva("Aceleração (m/s²): ")
   leia(a)
   escreva("Velocidade (m/s): ")
   leia(v)
   
   se (a = 0) entao
      escreva("Movimento uniforme")
   senao
      se (a * v > 0) entao
         escreva("Acelerado (velocidade e aceleração mesmo sentido)")
      senao
         escreva("Desacelerado (sentidos opostos)")
      fimse
   fimse
fimalgoritmo
```

**SE-SENÃO aninhado** vs **CASO:**

Para múltiplas condições, use `CASO`:

```visualg
var estado: cadeia

escreva("Estado da água (sólido/líquido/gasoso): ")
leia(estado)

caso estado
   "solido"
      escreva("H₂O em forma de gelo")
   "liquido"
      escreva("H₂O em forma de água")
   "gasoso"
      escreva("H₂O em forma de vapor")
   outrocaso
      escreva("Estado desconhecido")
fimcaso
```

---

## Módulo 2: Estruturas de Iteração

### Quando usar PARA vs ENQUANTO?

| Aspecto | PARA | ENQUANTO |
|---|---|---|
| **Quando usar** | Número de repetições **conhecido** | Número **desconhecido** (depende de condição) |
| **Inicialização** | Automática (i = início) | Manual |
| **Incremento** | Automático | Manual |
| **Exemplo** | Preencher tabela 10 linhas | Ler valores até que usuário diga "parar" |

**PARA — Exemplo com tabuada:**

```visualg
algoritmo "Tabuada"
var n, i, resultado: inteiro

inicio
   escreva("Digite um número: ")
   leia(n)
   
   para i de 1 ate 10 faca
      resultado <- n * i
      escreva(n + " × " + i + " = " + resultado)
   fimpara
fimalgoritmo
```

**ENQUANTO — Exemplo com série convergente:**

```visualg
algoritmo "SerieLeibiniz"
var pi_aprox, termo, k: real
var erro_relativo: real

inicio
   pi_aprox <- 0
   k <- 0
   termo <- 1
   
   enquanto (|termo| > 0.0001) faca
      pi_aprox <- pi_aprox + termo
      k <- k + 1
      termo <- (-1)^k / (2*k + 1)
   fimenquanto
   
   escreva("π ≈ " + 4*pi_aprox)
   escreva("Com " + k + " termos")
fimalgoritmo
```

---

### O que é convergência de série? Por que é importante?

**Convergência** significa que, à medida que adicionamos mais termos de uma série, o resultado se aproxima cada vez mais de um valor limite.

**Série de Leibniz para π:**

$$\pi = 4 \sum_{k=0}^{\infty} \frac{(-1)^k}{2k+1} = 4\left(1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \ldots\right)$$

| Termos | Valor | Erro |
|---|---|---|
| 1 | 4.000000 | 0.858407 |
| 10 | 3.232315 | 0.090908 |
| 100 | 3.150784 | 0.009377 |
| 1000 | 3.141084 | 0.000675 |
| ∞ | **3.141593** | 0 |

**Critério de parada:** Pare quando `|novo_termo| < tolerância` ou `|erro_relativo| < tolerância`

```python
import numpy as np

pi_aprox = 0
k = 0
termo = 1
tolerancia = 1e-6

while abs(termo) > tolerancia:
    pi_aprox += termo
    k += 1
    termo = (-1)**k / (2*k + 1)

print(f"π ≈ {4*pi_aprox:.8f}")
print(f"Termos: {k}")
```

---

### Como operar com vetores e matrizes?

**Vetor** = matriz 1D (lista de números)  
**Matriz** = vetor 2D (grid de números)

**Em VisualG — Vetores:**

```visualg
var v: vetor[1..10] de real  // Vetor de 10 elementos
var i: inteiro

inicio
   // Preencher
   para i de 1 ate 10 faca
      v[i] <- i * 0.5
   fimpara
   
   // Somar
   var soma: real := 0
   para i de 1 ate 10 faca
      soma <- soma + v[i]
   fimpara
   escreva("Soma: " + soma)
fimalgoritmo
```

**Em Python — Vetores com NumPy:**

```python
import numpy as np

v = np.array([1, 2, 3, 4, 5])
print(v.sum())      # 15
print(v.mean())     # 3.0
print(np.sqrt(np.sum(v**2)))  # Magnitude: 7.416...
```

**Produto escalar (dot product):**

$$\vec{a} \cdot \vec{b} = a_x b_x + a_y b_y + a_z b_z = |\vec{a}| |\vec{b}| \cos\theta$$

```python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
dot_product = np.dot(a, b)  # 32
```

**Matrizes em Python:**

```python
M = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])

print(M[0, :])      # Linha 0: [1 2 3]
print(M[:, 1])      # Coluna 1: [2 5 8]
print(M.T)          # Transposta
```

---

## Módulo 3: Funções e Métodos Numéricos

### O que é uma função e qual é a diferença entre função e procedimento?

| Aspecto | Função | Procedimento |
|---|---|---|
| **Retorna valor?** | Sim (return) | Não |
| **Exemplo** | `energia_cinetica(m, v) → E` | `imprimir_resultado(E)` |
| **Uso** | Em expressões: `E = energia_cinetica(2, 5)` | Sozinho: `imprimir_resultado(E)` |

**Função em VisualG:**

```visualg
funcao energia_cinetica(m, v: real): real
var E: real
inicio
   E <- 0.5 * m * v * v
   retorne E
fimfuncao

algoritmo "TesteEnergia"
var Ec: real
inicio
   Ec <- energia_cinetica(2, 5)  // m = 2 kg, v = 5 m/s
   escreva("Ec = " + Ec + " J")  // Ec = 25 J
fimalgoritmo
```

**Procedimento em VisualG:**

```visualg
procedimento imprimir_resultado(valor: real)
inicio
   escreva("Resultado: " + valor)
fimprocedimento
```

---

### O que é o método da bisseção e quando usar?

**Bisseção** encontra a raiz (zero) de uma função f(x) em um intervalo [a, b] onde f(a) e f(b) têm sinais opostos.

**Algoritmo:**
1. Calcule meio: c = (a + b) / 2
2. Se f(c) ≈ 0, encontrou a raiz
3. Se f(c) e f(a) têm mesmo sinal, mova a para c
4. Senão, mova b para c
5. Repita até convergência

**Vantagens:**
- ✅ Sempre converge (se f contínua e sinais opostos)
- ✅ Simples de implementar
- ❌ Lento (O(log n) iterações)

**Exemplo — Encontrar √2:**

Encontrar raiz de f(x) = x² − 2 no intervalo [1, 2]:

```python
def f(x):
    return x**2 - 2

def bisseccao(f, a, b, tol=1e-6):
    while (b - a) > tol:
        c = (a + b) / 2
        if f(c) * f(a) < 0:
            b = c
        else:
            a = c
    return (a + b) / 2

raiz = bisseccao(f, 1, 2)
print(f"√2 ≈ {raiz:.8f}")  # 1.41421356
```

---

### Como fazer diferenciação numérica?

**Diferenciação numérica** estima a derivada f'(x) sem conhecer a função analítica.

**3 Métodos:**

| Método | Fórmula | Erro | Quando usar |
|---|---|---|---|
| **Progressiva** | f'(x) ≈ [f(x+h) − f(x)] / h | O(h) | Rápido, menos preciso |
| **Regressiva** | f'(x) ≈ [f(x) − f(x−h)] / h | O(h) | Menos comum |
| **Central** | f'(x) ≈ [f(x+h) − f(x−h)] / (2h) | O(h²) | **Mais preciso** — use! |

**Exemplo — f(x) = x³, encontrar f'(2) = 12:**

```python
def f(x):
    return x**3

def dif_central(f, x, h=0.001):
    return (f(x + h) - f(x - h)) / (2 * h)

derivada = dif_central(f, 2)
print(f"f'(2) ≈ {derivada:.6f}")  # 12.000000 (muito preciso!)
```

---

### Como integrar numericamente?

**Integração numérica** calcula ∫ₐᵇ f(x) dx sem forma analítica fechada.

**Métodos e precisão:**

| Método | Fórmula | Erro | Uso |
|---|---|---|---|
| **Retângulo** | Σ f(xᵢ) · Δx | O(h) | Mínimo |
| **Trapézio** | Σ [f(xᵢ) + f(xᵢ₊₁)] / 2 · Δx | O(h²) | Comum, rápido |
| **Simpson** | Σ [f(xᵢ) + 4f(xᵢ₊₁) + f(xᵢ₊₂)] / 6 · Δx | O(h⁴) | **Mais preciso** |

**Exemplo — Integrar f(x) = x² de 0 a 1 (resposta exata: 1/3):**

```python
import numpy as np

def f(x):
    return x**2

def trapezio(f, a, b, n):
    h = (b - a) / n
    soma = 0
    for i in range(n):
        x1, x2 = a + i*h, a + (i+1)*h
        soma += (f(x1) + f(x2)) / 2 * h
    return soma

integral = trapezio(f, 0, 1, 1000)
print(f"∫₀¹ x² dx ≈ {integral:.6f}")  # 0.333334
print(f"Erro: {abs(integral - 1/3):.2e}")
```

---

### O que é método de Euler para resolver EDO?

**EDO (Equação Diferencial Ordinária):** y' = f(t, y)

**Euler (mais simples):**
```
y(t+Δt) ≈ y(t) + f(t, y) · Δt
```

Avança passo a passo usando a derivada local como aproximação.

**Vantagens:** Simples, intuitivo
**Desvantagens:** Lento, erros acumulam (O(Δt))

**Exemplo — Circuito RC: dV/dt = (V₀ − V) / (RC)**

```python
import numpy as np
import matplotlib.pyplot as plt

def euler(f, y0, t0, tf, dt):
    """Resolve y' = f(t, y) de t0 a tf com passo dt"""
    t = np.arange(t0, tf + dt, dt)
    y = np.zeros_like(t)
    y[0] = y0
    
    for i in range(len(t) - 1):
        y[i+1] = y[i] + f(t[i], y[i]) * dt
    
    return t, y

# EDO do RC
V0 = 10  # V
RC = 0.001  # s
def dV_dt(t, V):
    return (V0 - V) / RC

t, V = euler(dV_dt, 0, 0, 0.005, 0.0001)

# Solução analítica
V_analitica = V0 * (1 - np.exp(-t / RC))

plt.plot(t, V, 'o-', label='Euler')
plt.plot(t, V_analitica, 'b-', label='Analítica')
plt.legend()
plt.show()
```

---

## Módulo 4: Aplicações Avançadas

### Como simular um projétil com arrasto?

**Sem arrasto:** Parábola simples
**Com arrasto:** f_drag = −β·v² (não linear!)

**Equações do movimento:**
```
m·aₓ = −β·vₓ·|v|
m·aᵧ = −m·g − β·vᵧ·|v|
```

**Implementação com SciPy (RK4):**

```python
from scipy.integrate import odeint
import numpy as np
import matplotlib.pyplot as plt

def derivadas(y, t, m, g, beta):
    """y = [x, vx, y, vy]"""
    x, vx, y, vy = y
    v_mag = np.sqrt(vx**2 + vy**2) + 1e-10  # evita divisão por zero
    
    dxdt = vx
    dvx_dt = -beta * vx * v_mag / m
    dydt = vy
    dvy_dt = -g - beta * vy * v_mag / m
    
    return [dxdt, dvx_dt, dydt, dvy_dt]

# Parâmetros
m = 0.05  # kg
g = 9.81  # m/s²
v0 = 100  # m/s
theta = 45 * np.pi / 180

# Condições iniciais
x0 = 0
y0 = 0
vx0 = v0 * np.cos(theta)
vy0 = v0 * np.sin(theta)
y_init = [x0, vx0, y0, vy0]

# Tempo
t = np.linspace(0, 15, 10000)

# Integrar sem arrasto
beta = 0
sol_sem = odeint(derivadas, y_init, t, args=(m, g, beta))

# Integrar com arrasto
beta = 0.04
sol_com = odeint(derivadas, y_init, t, args=(m, g, beta))

# Plotar
plt.figure(figsize=(10, 6))
plt.plot(sol_sem[:, 0], sol_sem[:, 2], 'b-', linewidth=2, label='Sem arrasto')
plt.plot(sol_com[:, 0], sol_com[:, 2], 'r-', linewidth=2, label='Com arrasto')
plt.xlabel('Distância horizontal (m)')
plt.ylabel('Altura (m)')
plt.legend()
plt.grid(True)
plt.show()

# Resultados
idx_sem = np.argmin(np.abs(sol_sem[:, 2]))  # índice onde y=0
idx_com = np.argmin(np.abs(sol_com[sol_com[:, 2] >= 0, 2] - 0))

print(f"Sem arrasto: Alcance = {sol_sem[idx_sem, 0]:.1f} m, Altura = {sol_sem[np.argmax(sol_sem[:, 2]), 2]:.1f} m")
print(f"Com arrasto: Alcance = {sol_com[idx_com, 0]:.1f} m, Altura = {sol_com[np.argmax(sol_com[:, 2]), 2]:.1f} m")
```

---

### Como analisar um pêndulo simples numericamente?

**Teoria:** T = 2π√(L/g)

**EDO não-linear:** θ'' + (g/L)sin(θ) = 0

**Linearização (pequenas oscilações, θ < 15°):** θ'' + (g/L)θ = 0

```python
from scipy.integrate import odeint
import numpy as np
import matplotlib.pyplot as plt

def pendulo_edo(y, t, L, g):
    """y = [theta, omega] onde omega = dtheta/dt"""
    theta, omega = y
    
    # EDO: d²θ/dt² = -(g/L)sin(θ)
    dtheta_dt = omega
    domega_dt = -(g / L) * np.sin(theta)
    
    return [dtheta_dt, domega_dt]

# Parâmetros
g = 9.81  # m/s²
comprimentos = [0.25, 0.50, 0.75, 1.00, 1.25]  # metros

T_teorico = 2 * np.pi * np.sqrt(np.array(comprimentos) / g)
T_numerico = []

for L in comprimentos:
    # Condição inicial: θ(0) = 10°, ω(0) = 0
    theta0 = 10 * np.pi / 180
    y_init = [theta0, 0]
    
    # Integrar 5 segundos
    t = np.linspace(0, 5, 10000)
    sol = odeint(pendulo_edo, y_init, t, args=(L, g))
    
    # Encontrar período: tempo de 2 oscilações
    theta = sol[:, 0]
    # Detectar zero-crossings
    crossing = np.where(np.diff(np.sign(theta)))[0]
    if len(crossing) >= 4:
        T_num = 2 * (t[crossing[3]] - t[crossing[0]])
        T_numerico.append(T_num)
    else:
        T_numerico.append(np.nan)

T_numerico = np.array(T_numerico)

# Comparação
print("L (m) | T teórico (s) | T numérico (s) | Erro (%)")
for i, L in enumerate(comprimentos):
    if not np.isnan(T_numerico[i]):
        erro = 100 * abs(T_numerico[i] - T_teorico[i]) / T_teorico[i]
        print(f"{L:.2f}  |  {T_teorico[i]:.4f}  |  {T_numerico[i]:.4f}  |  {erro:.2f}%")

# Estimar g a partir de T² vs L
from scipy import stats
T2 = T_teorico**2
slope, intercept, r, p, se = stats.linregress(comprimentos, T2)
g_estimado = 4 * np.pi**2 / slope
print(f"\ng estimado: {g_estimado:.2f} m/s² (teórico: 9.81)")
```

---

### Qual a diferença entre regressão linear, polinomial e não-linear?

| Tipo | Modelo | Uso | Exemplo |
|---|---|---|---|
| **Linear** | y = a·x + b | Relação simples | T² vs L (pêndulo) |
| **Polinomial** | y = a₀ + a₁x + a₂x² + ... | Curva suave | Queda livre com arrasto |
| **Não-linear** | y = A·e^(−kt) | Decay exponencial | Aquecimento RC |

**Regressão Linear em Python:**

```python
from scipy import stats
import numpy as np

# Dados de pêndulo
L = np.array([0.25, 0.50, 0.75, 1.00, 1.25])
T = np.array([1.00, 1.41, 1.73, 2.01, 2.24])

# Ajustar linear
slope, intercept, r_value, p_value, std_err = stats.linregress(L, T**2)

# Estimativa de g
g = 4 * np.pi**2 / slope

print(f"Coeficiente angular: {slope:.4f} s²/m")
print(f"g estimado: {g:.2f} m/s²")
print(f"R²: {r_value**2:.4f}")

# Visualizar
import matplotlib.pyplot as plt
plt.scatter(L, T**2, color='red', label='Dados')
plt.plot(L, slope * L + intercept, 'b-', label='Ajuste')
plt.xlabel('Comprimento L (m)')
plt.ylabel('Período² T² (s²)')
plt.legend()
plt.show()
```

**Regressão Exponencial:**

```python
from scipy.optimize import curve_fit

# EDO: V(t) = V₀(1 - e^(-t/τ))
def modelo_exponencial(t, V0, tau):
    return V0 * (1 - np.exp(-t / tau))

# Dados sintéticos
t_dados = np.array([0, 0.001, 0.002, 0.003, 0.004, 0.005])
V_dados = np.array([0, 6.3, 9.5, 9.8, 9.95, 9.99])

# Ajustar
popt, pcov = curve_fit(modelo_exponencial, t_dados, V_dados, p0=[10, 0.001])
V0_est, tau_est = popt

print(f"V₀ estimado: {V0_est:.2f} V")
print(f"τ estimado: {tau_est:.6f} s")
print(f"RC = {tau_est:.6f} s")
```

---

## Ferramentas e Ambiente

### Qual é a versão correta do VisualG para instalar?

**Versão recomendada:** VisualG 3.0.7 ou superior

**Download:**
- 🌐 https://www.visualg.com.br (oficial)
- Compatível com Windows, Linux, macOS

**Características:**
- ✅ Ambiente integrado
- ✅ Fluxograma automático
- ✅ Depuração passo a passo
- ✅ Biblioteca básica de funções

**Instalação:**
1. Baixe o instalador
2. Instale com permissões de administrador (Windows)
3. Teste: abra `Arquivo → Exemplo → algum_exemplo.alg`

---

### Como instalar Python e bibliotecas necessárias?

**Opção 1: Anaconda (recomendado para iniciantes)**

```bash
# 1. Baixar: https://www.anaconda.com/download
# 2. Instalar (seguir assistente)
# 3. Abrir "Anaconda Navigator"
# 4. Criar ambiente
```

**Opção 2: pip (linha de comando)**

```bash
# Instalar Python: https://www.python.org

# Instalar bibliotecas
pip install numpy pandas matplotlib scipy jupyter

# Ou tudo junto
pip install jupyter numpy pandas matplotlib scipy scikit-learn
```

**Opção 3: Google Colab (sem instalação!)**

```
1. Acesse: https://colab.research.google.com
2. "New notebook"
3. Upload do arquivo .ipynb
4. Execute as células
```

**Testar instalação:**

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy import integrate

print("✓ Todas as bibliotecas carregadas com sucesso!")
```

---

### Como usar Jupyter Notebooks?

**3 formas:**

| Método | Comando | Acesso |
|---|---|---|
| **Local** | `jupyter notebook` | `http://localhost:8888` |
| **Google Colab** | Navegador | https://colab.research.google.com |
| **VS Code** | Abrir `.ipynb` | Extensão Jupyter |

**Atalhos úteis:**

| Atalho | Função |
|---|---|
| `Shift+Enter` | Executar célula |
| `Ctrl+/` | Comentar código |
| `Esc` → `A` | Inserir célula acima |
| `Esc` → `B` | Inserir célula abaixo |
| `Esc` → `D, D` | Deletar célula |
| `Tab` | Auto-complete |

**Estrutura de um notebook (boas práticas):**

```
1. [Markdown] Título e objetivo
2. [Code] Importações
3. [Code] Definir funções/classes
4. [Code] Carregar dados
5. [Code] Análise principal
6. [Code] Visualizações
7. [Markdown] Conclusões
```

---

## Avaliação e Projetos

### Qual é a fórmula de cálculo da nota final?

**Nota Final = 0.12×P1 + 0.12×P2 + 0.12×P3 + 0.18×Proj1 + 0.26×Proj2 + 0.10×Listas + 0.10×Participação**

Onde:
- **P1, P2, P3** = Provas (Módulos 1, 2, 3)
- **Proj1** = Projeto 1 — Análise Experimental (Semana 12)
- **Proj2** = Projeto 2 — Simulação Capstone (Semana 15)
- **Listas** = Média das Listas 1-7
- **Participação** = Presença + contribuição em aulas

**Aprovação:** Nota final ≥ 6.0

**Exemplos:**

| Caso | P1 | P2 | P3 | Proj1 | Proj2 | Listas | Part. | **Final** | Aprovado? |
|---|---|---|---|---|---|---|---|---|---|
| Bom aluno | 8.0 | 8.5 | 8.0 | 9.0 | 8.5 | 8.0 | 9.0 | **8.31** | ✅ |
| Aluno médio | 7.0 | 7.0 | 7.0 | 7.0 | 7.0 | 7.0 | 7.0 | **7.00** | ✅ |
| Reprovação | 5.0 | 5.5 | 5.0 | 6.0 | 5.0 | 6.0 | 5.0 | **5.32** | ❌ |

---

### Como é estruturado o Projeto 1?

**Projeto 1: Análise de Dados Experimentais**

**Entrega:** Semana 12  
**Peso:** 18%

**Estrutura do notebook:**

1. **Introdução teórica** (0.5 pág)
   - Fenômeno físico
   - Equações governantes
   - Objetivos

2. **Metodologia** (0.5 pág)
   - Coleta de dados (real ou simulada)
   - Análise estatística (média, σ, outliers)
   - Método de regressão

3. **Implementação** (código comentado)
   - Leitura de dados
   - Cálculos estatísticos
   - Ajuste de curva

4. **Resultados** (1-2 págs)
   - Tabelas de valores
   - Gráficos profissionais
   - Comparação com teoria

5. **Discussão** (0.5 pág)
   - Análise crítica
   - Fontes de erro
   - Melhorias sugeridas

6. **Conclusão** (0.3 pág)

**Exemplo: Pêndulo Simples**

```python
import numpy as np
from scipy import stats
import matplotlib.pyplot as plt

# 1. DADOS EXPERIMENTAIS
L = np.array([0.25, 0.50, 0.75, 1.00, 1.25])  # m
T_medio = np.array([1.00, 1.41, 1.73, 2.01, 2.24])  # s
sigma_T = np.array([0.02, 0.03, 0.04, 0.05, 0.06])  # incerteza

# 2. ANÁLISE
T2 = T_medio**2
sigma_T2 = 2 * T_medio * sigma_T

# 3. REGRESSÃO
slope, intercept, r, p, se = stats.linregress(L, T2)

# 4. RESULTADO
g = 4 * np.pi**2 / slope
sigma_g = 4 * np.pi**2 * se / slope**2

print(f"g estimado: {g:.2f} ± {sigma_g:.2f} m/s²")
print(f"g teórico: 9.81 m/s²")
print(f"Acordo: {100*abs(g-9.81)/9.81:.1f}%")

# 5. GRÁFICO
plt.errorbar(L, T2, yerr=sigma_T2, fmt='ro', elinewidth=2, markersize=8, label='Dados')
plt.plot(L, slope*L + intercept, 'b-', linewidth=2, label='Ajuste')
plt.xlabel('Comprimento L (m)', fontsize=12)
plt.ylabel('T² (s²)', fontsize=12)
plt.legend(fontsize=11)
plt.grid(True, alpha=0.3)
plt.savefig('pendulo.png', dpi=300, bbox_inches='tight')
plt.show()
```

---

### Como é estruturado o Projeto 2 (Capstone)?

**Projeto 2: Simulação Física Integrada**

**Entrega:** Semana 15  
**Peso:** 26% (maior peso!)

**Você escolhe uma opção:**

| Opção | Descrição | Dificuldade |
|---|---|---|
| **A: Órbita Planetária** | Integrar Newton para órbita; validar contra Kepler | Intermediária |
| **B: Análise Experimental** | Experimento próprio com análise completa | Básica-Intermediária |
| **C: Dinâmica Molecular** | Simular N partículas com potencial LJ | Avançada |
| **D: Seu projeto** | Propor integração de conceitos do curso | Variável |

**Critérios de avaliação:**

| Critério | Peso |
|---|---|
| Corretude da implementação | 30% |
| Validação contra teoria | 25% |
| Visualizações | 20% |
| Documentação | 15% |
| Originalidade | 10% |

**Estrutura esperada:**

```
1. Introdução teórica (1 pág) — equações, contexto
2. Metodologia (1 pág) — algoritmos, parâmetros
3. Implementação (código) — funções principais
4. Resultados (2-3 págs) — gráficos, tabelas, análise
5. Discussão (1 pág) — erros, melhorias
6. Conclusão (0.5 pág) — validez do modelo
```

---

### Como fazer referência corretamente no projeto?

**Formatos aceitos:**

**Em-texto:**
```
...conforme demonstrado por Newton (1687)...
...segundo a segunda lei da termodinâmica...
```

**Referência bibliográfica (fim do notebook):**

```
[1] Isaac Newton. Principia Mathematica Philosophiae Naturalis. 
    Royal Society, 1687.

[2] NumPy Developers (2025). NumPy Documentation. 
    Available at: https://numpy.org/doc/ (accessed April 2026).

[3] Zimermann, H. R. (2026). Algoritmos e Programação para Licenciatura em Física. 
    UFSM, Semestre 2026/1. CC BY 4.0.
```

**Formato BibTeX (se usar Jupyter):**

```bibtex
@book{newton1687,
  author={Newton, Isaac},
  title={Principia Mathematica Philosophiae Naturalis},
  publisher={Royal Society},
  year={1687}
}

@online{numpy2025,
  title={NumPy Documentation},
  author={NumPy Developers},
  year={2025},
  url={https://numpy.org/doc/},
  accessed={2026-04-16}
}
```

---

## 📞 Contato e Suporte

**Professor:** Prof. Hans Rogério Zimermann  
**Email:** hans@ufsm.br  
**Horário de atendimento:** A combinar

**Recursos principais:**
- 📖 Apostila: `APOSTILA_ALGORITMOS_PROGRAMACAO.md`
- 📋 Plano de Ensino: `PLANO_DE_ENSINO_16_SEMANAS.md`
- 🔧 Guia de Debugging: `GUIA_DEBUGGING.md`
- 📝 Listas: `listas/L0X_*.md`
- 💻 Notebooks: `0X_*.ipynb`

**Para dúvidas sobre:**
- Conceitos → Consulte apostila + notebooks com exemplos
- Sintaxe VisualG → Revise exemplos nos notebooks
- Métodos numéricos → Notebook 03 com análise detalhada
- Ambiente/instalação → Seção "Ferramentas e Ambiente" deste FAQ

---

**Última atualização:** Abril de 2026  
**Versão:** 1.0  
**Licença:** CC BY 4.0 — Prof. Hans Rogério Zimermann, UFSM

