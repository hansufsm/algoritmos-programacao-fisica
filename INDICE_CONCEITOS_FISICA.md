# Índice de Conceitos Físicos e Programação

## 🔍 Referência Rápida de Conceitos

### **Mecânica Clássica**

#### Cinemática
| Conceito | Fórmula | Capítulo | Notebook |
|----------|---------|----------|----------|
| Velocidade instantânea | $v = \frac{\Delta x}{\Delta t}$ | 2 | - |
| Aceleração | $a = \frac{\Delta v}{\Delta t}$ | 2 | - |
| Velocidade em queda livre | $v(t) = gt$ | 5 | 02 |
| Altura em queda livre | $h(t) = \frac{1}{2}gt^2$ | 5 | 02 |
| Trajetória de projétil - Alcance | $R = \frac{v_0^2 \sin(2\theta)}{g}$ | 1, 10 | 01 |
| Trajetória de projétil - Altura máxima | $H = \frac{v_0^2 \sin^2(\theta)}{2g}$ | 1, 10 | 01 |
| Trajetória de projétil - Tempo | $T = \frac{2v_0 \sin(\theta)}{g}$ | 1, 10 | 01 |

#### Dinâmica
| Conceito | Fórmula | Capítulo | Notebook |
|----------|---------|----------|----------|
| Força | $F = ma$ | - | - |
| Peso | $P = mg$ | 7 | 03 |
| Força de arrasto linear | $F_{\text{arrasto}} = -bv$ | 8 | 03 |
| Força de arrasto quadrático | $F_{\text{arrasto}} = -\frac{1}{2}C_D \rho A v^2$ | 8 | 03 |
| Equação diferencial (arrasto) | $\frac{dv}{dt} = g - \frac{b}{m}v$ | 8 | 03 |

#### Energética
| Conceito | Fórmula | Capítulo | Notebook |
|----------|---------|----------|----------|
| Energia cinética | $E_c = \frac{1}{2}mv^2$ | 3, 7 | 01, 03 |
| Energia potencial gravitacional | $E_p = mgh$ | 3, 7 | 01, 03 |
| Energia mecânica | $E_{\text{total}} = E_c + E_p$ | 7 | 03 |
| Trabalho | $W = F \cdot d \cdot \cos(\theta)$ | 7 | 03 |
| Potência | $P = \frac{W}{t}$ | - | - |

#### Oscilações
| Conceito | Fórmula | Capítulo | Notebook |
|----------|---------|----------|----------|
| Período de pêndulo | $T = 2\pi\sqrt{\frac{L}{g}}$ | 9, 10 | 03 |
| Frequência angular | $\omega = \frac{2\pi}{T}$ | - | - |
| EDO harmônico simples | $\frac{d^2x}{dt^2} + \omega_0^2 x = 0$ | 8 | - |
| EDO harmônico amortecido | $\frac{d^2x}{dt^2} + 2\gamma\frac{dx}{dt} + \omega_0^2 x = 0$ | 8 | 03 |

---

### **Termodinâmica**

| Conceito | Fórmula | Capítulo | Notebook |
|----------|---------|----------|----------|
| Lei dos gases ideais | $PV = nRT$ | 3 | - |
| Constante de Boltzmann | $k_B = 1.38 \times 10^{-23}$ J/K | - | - |
| Constante dos gases | $R = 8.314$ J/(mol·K) | 3 | - |

---

### **Eletromagnetismo**

| Conceito | Fórmula | Capítulo | Notebook |
|----------|---------|----------|----------|
| Lei de Coulomb | $F = k\frac{\|q_1 q_2\|}{r^2}$ | - | 01, 03 |
| Constante de Coulomb | $k = 8.99 \times 10^9$ N·m²/C² | - | 01 |
| Campo elétrico | $E = \frac{F}{q} = k\frac{q}{r^2}$ | - | - |
| Potencial elétrico | $V = k\frac{q}{r}$ | - | - |

---

### **Conceitos Matemáticos**

| Conceito | Fórmula | Capítulo | Uso |
|----------|---------|----------|-----|
| Derivada | $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$ | 8 | Diferenciação numérica |
| Diferença finita central | $f'(x) \approx \frac{f(x+h) - f(x-h)}{2h}$ | 8 | 03 |
| Diferença finita progressiva | $f'(x) \approx \frac{f(x+h) - f(x)}{h}$ | 8 | 03 |
| Integral | $\int_a^b f(x)dx$ | 8 | Integração numérica |
| Regra do trapézio | $\int_a^b f(x)dx \approx \frac{h}{2}[f(x_0) + 2\sum f(x_i) + f(x_n)]$ | 8 | 03 |
| Série de Leibniz | $\frac{\pi}{4} = \sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1}$ | 5 | 02 |
| Média aritmética | $\mu = \frac{1}{n}\sum x_i$ | 9 | 02, 03 |
| Variância | $\sigma^2 = \frac{1}{n-1}\sum (x_i - \mu)^2$ | 9 | 02, 03 |
| Desvio padrão | $\sigma = \sqrt{\sigma^2}$ | 9 | 02, 03 |

---

## 📊 Mapeamento: Algoritmo → Física

### **Estrutura de Controle (SE-SENÃO)**

**Uso em Física:**
- Classificar estados (sólido, líquido, gás)
- Validar medidas experimentais
- Determinar tipo de movimento
- Selecionar método de cálculo

**Exemplo:**
```portugol
se (temperatura < 0) entao
   estado <- "Sólido"
senao
   se (temperatura < 100) entao
      estado <- "Líquido"
   senao
      estado <- "Gasoso"
   fimse
fimse
```

**Aplicações:**
- Capítulo 4: Classificação de estados
- Capítulo 3: Validação de dados

---

### **Loops (PARA, ENQUANTO)**

**Uso em Física:**
- Gerar tabelas de valores
- Integração numérica
- Simulações iterativas
- Séries matemáticas

**Exemplo - Tabela:**
```portugol
para t de 0 ate 5 passo 1 faca
   v <- 9.81 * t
   h <- 0.5 * 9.81 * t * t
   escreva(t, v, h)
fimpara
```

**Exemplo - Série:**
```portugol
enquanto (termo > tolerancia) faca
   soma <- soma + termo
   n <- n + 1
   termo <- 1.0 / (2*n + 1)
fimenquanto
```

**Aplicações:**
- Capítulo 5: Queda livre, série de Leibniz
- Capítulo 8: Métodos numéricos
- Capítulo 10: Simulações

---

### **Vetores (Arrays 1D)**

**Uso em Física:**
- Armazenar sequência de medidas
- Representar componentes de vetor
- Dados experimentais temporais

**Exemplo:**
```portugol
var
   velocidades: vetor [1..10] de real
   posicoes: vetor [1..100] de real

para i de 1 ate 10 passo 1 faca
   leia(velocidades[i])
fimpara
```

**Aplicações:**
- Capítulo 6: Operações vetoriais
- Capítulo 9: Dados experimentais

---

### **Matrizes (Arrays 2D)**

**Uso em Física:**
- Coordenadas de múltiplas partículas
- Transformações de simetria
- Dados multidimensionais

**Exemplo:**
```portugol
var
   coordenadas: vetor [1..10, 1..3] de real

para i de 1 ate 10 passo 1 faca
   para j de 1 ate 3 passo 1 faca
      distancia <- distancia + coordenadas[i,j] * coordenadas[i,j]
   fimpara
   distancia <- raiz(distancia)
fimpara
```

**Aplicações:**
- Capítulo 6: Coordenadas 3D
- Capítulo 9: Análise de dados

---

### **Funções**

**Uso em Física:**
- Encapsular fórmulas
- Cálculos reutilizáveis
- Modularização

**Exemplo:**
```portugol
funcao EnergiaCinetica(m: real, v: real): real
    retorne 0.5 * m * v * v
fimfuncao

funcao EnergiaP(m: real, h: real): real
    retorne m * 9.81 * h
fimfuncao
```

**Aplicações:**
- Capítulo 7: Módulo de funções físicas
- Capítulo 10: Simulações

---

### **Métodos Numéricos**

**Bisseção:**
- Encontrar raízes de funções
- Resolver equações não-lineares

**Diferenciação Numérica:**
- Aproximar derivadas
- Calcular velocidades instantâneas

**Integração Numérica:**
- Aproximar integrais
- Resolver equações diferenciais (Euler)

**Aplicações:**
- Capítulo 8: Todos os métodos
- Capítulo 10: Projetos

---

## 🧮 Constantes Físicas em Programação

```portugol
algoritmo "ConstantesFisicas"
var
   pi, g, k_coulomb, c, hbar, k_boltzmann: real
   m_eletron, m_proton, e: real

inicio
   // Constantes fundamentais
   pi <- 3.14159265359
   g <- 9.81              // m/s² (Terra, superfície)
   c <- 3.0e8             // m/s (velocidade da luz)
   
   // Constante de gravitação universal
   G <- 6.67430e-11       // m³/(kg·s²)
   
   // Constante de Coulomb
   k_coulomb <- 8.987551e9  // N·m²/C²
   
   // Constante de Planck reduzida
   hbar <- 1.054571817e-34  // J·s
   
   // Constante de Boltzmann
   k_boltzmann <- 1.380649e-23  // J/K
   
   // Cargas e massas de partículas
   e <- 1.602176634e-19   // C (carga do elétron)
   m_eletron <- 9.1093837015e-31  // kg
   m_proton <- 1.67262192369e-27  // kg
   
   // Constante dos gases
   R <- 8.31446261815  // J/(mol·K)
   
fimalgoritmo
```

---

## 📈 Conversão de Unidades Comuns

```portugol
algoritmo "ConversaoUnidades"
var
   metros_para_pes, metros_para_polegadas: real
   kg_para_libras, newton_para_dinas: real
   joules_para_calorias, pascal_para_atm: real

inicio
   // Comprimento
   metros_para_pes <- 3.28084
   metros_para_polegadas <- 39.3701
   
   // Massa
   kg_para_libras <- 2.20462
   
   // Força
   newton_para_dinas <- 1.0e5
   
   // Energia
   joules_para_calorias <- 0.239006
   
   // Pressão
   pascal_para_atm <- 9.86923e-6
   
   // Temperatura
   // F = C * 9/5 + 32
   // K = C + 273.15
   
fimalgoritmo
```

---

## 🎯 Problemas Típicos por Capítulo

### **Capítulo 1-3: Cálculos Básicos**
- ✓ Calcular alcance e altura de projétil
- ✓ Converter entre unidades de temperatura
- ✓ Validar dados experimentais
- ✓ Calcular energias simples

### **Capítulo 4-6: Estruturas de Dados**
- ✓ Tabelas de valores (queda livre)
- ✓ Operações vetoriais (produto escalar)
- ✓ Coordenadas de partículas
- ✓ Classificação de movimentos

### **Capítulo 7-8: Métodos Avançados**
- ✓ Encontrar raízes (bisseção)
- ✓ Derivadas numéricas
- ✓ Integrais numéricas
- ✓ Equações diferenciais (Euler)
- ✓ Séries numéricas

### **Capítulo 9-10: Análise Completa**
- ✓ Análise estatística de dados
- ✓ Regressão linear (pêndulo)
- ✓ Simulação com arrasto
- ✓ Detecção de outliers

---

## 📚 Tabela de Seleção: Qual Método Usar?

### **Para resolver $f(x) = 0$:**
| Situação | Método | Capítulo |
|----------|--------|----------|
| Função contínua em [a,b], f(a)·f(b)<0 | Bisseção | 8 |
| Valores iniciais ruins | Newton-Raphson | (avançado) |
| Muitas raízes | Gráfico + Bisseção | 8 |

### **Para calcular $f'(x)$:**
| Situação | Método | Capítulo |
|----------|--------|----------|
| Precisão moderada | Diferença central | 8 |
| Derivada primeira | Diferença progressiva | 8 |
| Derivada segunda | Diferença central dupla | (avançado) |

### **Para calcular $\int_a^b f(x)dx$:**
| Situação | Método | Capítulo |
|----------|--------|----------|
| Precisão básica | Trapézio | 8 |
| Maior precisão | Simpson | 8 |
| Integração com EDO | Euler | 8 |

### **Para resolver $\frac{dy}{dt} = f(t,y)$:**
| Situação | Método | Capítulo |
|----------|--------|----------|
| Primeiro passo | Euler | 8 |
| Melhor precisão | Runge-Kutta | (avançado) |
| Sistemas acoplados | Sistema de EDOs | (avançado) |

---

## 🔗 Índice de Equações Diferenciais

### **Ordem 1, Primeira Classe**
$$\frac{dy}{dt} = f(t, y)$$
Exemplo: $\frac{dv}{dt} = g - \frac{b}{m}v$ (movimento com arrasto)

### **Ordem 2, Segunda Classe**
$$\frac{d^2x}{dt^2} = f(t, x, \frac{dx}{dt})$$
Exemplo: $\frac{d^2x}{dt^2} + \omega_0^2 x = 0$ (oscilador harmônico)

### **Ordem 2 com Amortecimento**
$$\frac{d^2x}{dt^2} + 2\gamma\frac{dx}{dt} + \omega_0^2 x = 0$$
Três regimes: Subamortecido, Criticamente amortecido, Superamortecido

---

## 💻 Código Padrão para Problemas Comuns

### **Padrão 1: Validação e Cálculo**
```portugol
se (condicao_valida) entao
   resultado <- calculo()
   escreva(resultado)
senao
   escreva("Erro: Entrada inválida")
fimse
```

### **Padrão 2: Tabela de Valores**
```portugol
para i de inicio ate fim passo passo faca
   x <- inicio + i * passo
   y <- funcao(x)
   escreva(x, y)
fimpara
```

### **Padrão 3: Integração Numérica**
```portugol
h <- (b - a) / n
soma <- 0
para i de 0 ate n-1 passo 1 faca
   soma <- soma + h * f(a + i*h)
fimpara
integral <- soma
```

### **Padrão 4: Análise Estatística**
```portugol
media <- 0
para i de 1 ate n passo 1 faca
   media <- media + dados[i]
fimpara
media <- media / n

variancia <- 0
para i de 1 ate n passo 1 faca
   variancia <- variancia + (dados[i] - media)²
fimpara
variancia <- variancia / (n-1)
desvio_padrao <- raiz(variancia)
```

---

**Referência Rápida - Versão 1.0**  
**Última atualização:** Abril de 2026
