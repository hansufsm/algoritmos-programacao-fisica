# Lista de Exercícios 4: Vetores e Matrizes

**Disciplina:** FSC1189 — Algoritmo e Programação  
**Professor:** Prof. Hans Rogério Zimermann  
**Semestre:** 2026/1  
**Módulo:** 2 — Estruturas de Iteração e Dados  
**Semanas:** 7-8  
**Data de Entrega:** Fim da Semana 8  
**Peso:** 10%

---

## Exercício 1: Operações com Vetores em VisualG (Básico)

**Contexto:** Dados de deslocamento de 5 experimentos.

**Tarefa:** Em VisualG:
1. Declare vetor de 5 elementos (reais)
2. Leia os 5 deslocamentos (metros)
3. Calcule:
   - Deslocamento total (soma)
   - Deslocamento médio
   - Deslocamento máximo e mínimo
4. Exiba resultados

**Exemplo:**
```
Deslocamentos (m): 10.5, 12.3, 9.8, 11.2, 13.1
Soma: 56.9 m
Média: 11.38 m
Máximo: 13.1 m
Mínimo: 9.8 m
```

**Críté rio:** Vetores corretos, loops funcionando, cálculos precisos.

---

## Exercício 2: Magnitude de Vetor 3D (Intermediário)

**Contexto:** Posição de partícula no espaço 3D.

**Tarefa:** Em VisualG ou Python:
1. Leia coordenadas x, y, z de uma partícula
2. Calcule magnitude: |**r**| = √(x² + y² + z²)
3. Calcule ângulos com eixos:
   - α = arccos(x/|**r**|)
   - β = arccos(y/|**r**|)
   - γ = arccos(z/|**r**|)
4. Exiba: coordenadas, magnitude, ângulos (em graus)

**Exemplo:**
```
Coordenadas: (3, 4, 12)
Magnitude: 13.0 m
Ângulo com X: 76.74°
Ângulo com Y: 72.08°
Ângulo com Z: 22.62°
```

**Critério:** Cálculos corretos, ângulos em graus.

---

## Exercício 3: Matriz de Dados Experimentais (Intermediário)

**Contexto:** Matriz 3×4 com dados de 3 experimentos, 4 medições cada.

**Tarefa:** Em Python, crie programa que:

1. Defina matriz de dados (ou leia do usuário)
2. Para cada linha (experimento):
   - Calcule média das 4 medições
   - Calcule desvio padrão
   - Encontre valor máximo e mínimo
3. Exiba tabela resumida

**Exemplo:**
```
Experimento 1: [10.5, 10.7, 10.6, 10.8]
  Média: 10.65, σ: 0.11, Min: 10.5, Max: 10.8

Experimento 2: [20.1, 20.3, 19.9, 20.2]
  Média: 20.13, σ: 0.16, Min: 19.9, Max: 20.3
```

**Critério:** Análise estatística correta, tabela clara.

---

## Exercício 4: Regra do Paralelogramo — Soma de Vetores (Avançado)

**Contexto:** Dois vetores força atuam em ângulo. Determinar força resultante.

**Tarefa:** Em Python:

1. Defina função `somar_vetores_polar(r1, theta1, r2, theta2)` que:
   - Recebe magnitude e ângulo de dois vetores
   - Converte para cartesiano
   - Soma vetorialmente
   - Retorna magnitude e ângulo do resultado

2. Teste com:
   - **F₁** = 10 N, θ₁ = 30°
   - **F₂** = 15 N, θ₂ = 60°

3. Visualize em gráfico com os 3 vetores

**Fórmulas:**
- Cartesiano: x = r cos(θ), y = r sin(θ)
- Polar: r = √(x² + y²), θ = arctan(y/x)

**Critério:** Conversões corretas, visualização vetorial com cores diferentes.

---

## Exercício 5: Matriz de Transição de Estado (Avançado)

**Contexto:** Simulação de partículas em 3D. Matriz descreve posições de 5 partículas.

**Tarefa:** Em Python (NumPy):

```python
import numpy as np

# Matriz 5x3: cada linha é posição de uma partícula
posicoes = np.array([
    [1.0, 2.0, 3.0],
    [2.5, 1.5, 4.0],
    [3.0, 3.0, 2.0],
    [0.5, 2.5, 5.0],
    [4.0, 1.0, 1.5]
])

# Tarefa:
# 1. Calcule distância de cada partícula até origem
# 2. Encontre partícula mais distante
# 3. Calcule centro de massa (média de cada coluna)
# 4. Calcule matriz de distâncias pairwise (entre cada par de partículas)
```

**Saída esperada:**
```
Distância até origem: [3.74, 5.03, 4.12, 5.56, 4.42]
Partícula mais distante: #3 (d = 5.56 m)
Centro de massa: [2.2, 2.2, 3.1]
```

**Critério:** NumPy utilizado corretamente, álgebra linear apropriada.

---

## Exercício 6: Projeto Integrador — Análise Completa de Vetores (Proposto)

**Contexto:** Campo de vetores velocidade em 5 pontos do espaço.

**Tarefa:** Em Python:

1. Defina 5 vetores velocidade (3D): **v₁**, **v₂**, ..., **v₅**
2. Calcule:
   - Magnitude de cada um
   - Velocidade média
   - Velocidade máxima
   - Produto escalar entre pares consecutivos
   - Ângulo entre **v₁** e **v₂**
3. Visualize em gráfico 3D (setas vetoriais)

**Critério:** Cálculos completos, gráfico 3D profissional com matplotlib.

---

## Gabarito Parcial

### Exercício 1 — Operações Vetores (VisualG)

```portugol
ALGORITMO "Operacoes_Vetores"
VAR
  dados: vetor[1..5] de real
  i, imax, imin: inteiro
  soma, media, maximo, minimo: real

INICIO
  // Leitura
  PARA i DE 1 ATE 5 FACA
    ESCREVA "Deslocamento ", i, " (m): "
    LEIA dados[i]
  FIMPARA
  
  // Cálculos
  soma ← 0
  maximo ← dados[1]
  minimo ← dados[1]
  
  PARA i DE 1 ATE 5 FACA
    soma ← soma + dados[i]
    SE dados[i] > maximo ENTAO
      maximo ← dados[i]
    FIMSE
    SE dados[i] < minimo ENTAO
      minimo ← dados[i]
    FIMSE
  FIMPARA
  
  media ← soma / 5
  
  ESCREVAL "Soma: ", soma, " m"
  ESCREVAL "Média: ", media, " m"
  ESCREVAL "Máximo: ", maximo, " m"
  ESCREVAL "Mínimo: ", minimo, " m"
FIMALGORITMO
```

### Exercício 4 — Soma Vetorial Polar

```python
import numpy as np
import matplotlib.pyplot as plt

def somar_vetores_polar(r1, theta1, r2, theta2):
    theta1_rad = np.radians(theta1)
    theta2_rad = np.radians(theta2)
    
    # Converso para cartesiano
    x1, y1 = r1 * np.cos(theta1_rad), r1 * np.sin(theta1_rad)
    x2, y2 = r2 * np.cos(theta2_rad), r2 * np.sin(theta2_rad)
    
    # Soma
    x_res, y_res = x1 + x2, y1 + y2
    
    # Volta para polar
    r_res = np.sqrt(x_res**2 + y_res**2)
    theta_res = np.degrees(np.arctan2(y_res, x_res))
    
    return r_res, theta_res

# Teste
r1, theta1 = 10, 30
r2, theta2 = 15, 60
r_res, theta_res = somar_vetores_polar(r1, theta1, r2, theta2)

print(f"Resultante: {r_res:.2f} N a {theta_res:.2f}°")
```

---

## Referências

- **Apostila:** Capítulo 6
- **Notebook:** `02_Estruturas_Controle_Repeticao.ipynb` (Exercícios 6.1, 6.2)

---

**Entrega até fim da Semana 8. 📧 hans@ufsm.br**
