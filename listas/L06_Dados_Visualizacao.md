# Lista de Exercícios 6: Tratamento de Dados e Visualização

**Disciplina:** FSC1189 — Algoritmo e Programação  
**Professor:** Prof. Hans Rogério Zimermann  
**Semestre:** 2026/1  
**Módulo:** 3 — Funções e Métodos Numéricos  
**Semana:** 12  
**Data de Entrega:** Fim da Semana 12  
**Peso:** 10%

---

## Exercício 1: Estatística Descritiva Básica (Básico)

**Contexto:** 10 medições de temperatura de um sensor.

**Tarefa:** Em Python, implemente funções:

1. `media(dados)` → média aritmética
2. `mediana(dados)` → valor central
3. `variancia(dados)` → σ²
4. `desvio_padrao(dados)` → σ
5. `coeficiente_variacao(dados)` → (σ/média) × 100%

**Dados exemplo:**
```
T (°C): [20.1, 20.3, 20.2, 20.5, 20.0, 20.4, 20.1, 20.3, 20.2, 20.4]
```

**Saída esperada:**
```
Média: 20.25 °C
Mediana: 20.25 °C
Variância: 0.0317 °C²
Desvio Padrão: 0.178 °C
Coef. Variação: 0.879%
```

**Critério:** Cálculos corretos, fórmulas bem implementadas.

---

## Exercício 2: Detecção de Outliers (Intermediário)

**Contexto:** 20 medições de comprimento com possíveis erros.

**Tarefa:** Em Python, deteccte outliers usando 3 métodos:

1. **Regra 3σ:** |x − μ| > 3σ
2. **IQR:** Q1 − 1.5×IQR ou Q3 + 1.5×IQR
3. **Z-score:** |z| > 3, onde z = (x − μ)/σ

**Dados exemplo:**
```
L (cm): [10.2, 10.1, 10.3, 9.9, 10.2, 10.4, 10.1, 10.0, 10.3, 10.2,
         10.1, 10.2, 15.0, 10.3, 10.1, 10.2, 10.4, 10.1, 10.3, 10.2]
```

Valor 15.0 cm é suspeito (erro de leitura?)

**Saída esperada:**
```
Método 3σ:    Outliers: [15.0]
Método IQR:   Outliers: [15.0]
Método Z:     Outliers: [15.0]

Dados limpos (sem outliers): 19 valores
```

**Critério:** Detecção correta, comparação entre métodos.

---

## Exercício 3: Interpolação Linear (Intermediário)

**Contexto:** Dados de velocidade × tempo, mas faltam alguns pontos.

**Tarefa:** Em Python, implemente interpolação linear:

```python
def interpolacao_linear(t_dados, v_dados, t_novo):
    """Interpola valor de v em t_novo usando dois pontos vizinhos."""
    pass
```

**Dados originais:**
```
t (s): [0.0, 0.5, 1.0, 1.5, 2.0]
v (m/s): [0.0, 2.5, 5.0, 7.5, 10.0]
```

Interpolar em: t = 0.3, 0.7, 1.2, 1.8 s

**Saída esperada:**
```
t = 0.3s → v = 1.5 m/s
t = 0.7s → v = 3.5 m/s
t = 1.2s → v = 6.0 m/s
t = 1.8s → v = 9.0 m/s
```

**Critério:** Interpolação correta, suave entre pontos.

---

## Exercício 4: Regressão Linear — Estimação de g (Avançado)

**Contexto:** Pêndulo simples. Medições de T² vs L.

**Tarefa:** Em Python (com numpy ou scipy):

1. Implemente ajuste linear: T² = (4π²/g) × L
2. Encontre coeficiente angular a
3. Calcule g = 4π²/a
4. Calcule incerteza em g (propagação de erro)

**Dados exemplo (pêndulo):**
```
L (m):  [0.25, 0.50, 0.75, 1.00, 1.25]
T (s):  [1.00, 1.41, 1.73, 2.01, 2.24]
T² (s²):[1.00, 2.00, 2.99, 4.05, 5.02]
```

**Saída esperada:**
```
Coeficiente angular: a = 4.02 s²/m
g estimado: 9.83 m/s²
g teórico: 9.81 m/s²
Erro: 0.20%
Incerteza em g: ±0.1 m/s²
```

**Critério:** Ajuste correto, propagação de erro incluída, gráfico com reta de ajuste.

---

## Exercício 5: Análise de Série Temporal (Avançado)

**Contexto:** Temperatura de um sistema ao longo do tempo durante aquecimento.

**Tarefa:** Em Python:

1. Crie série temporal: T(t) = T∞ − (T∞ − T₀)e^{−t/τ}
2. Adicione ruído gaussiano
3. Calcule:
   - Média móvel (janela n = 3, 5, 10)
   - Taxa de mudança: dT/dt
   - Tempo para atingir 90% de T∞

4. Crie gráfico com:
   - Série original (ruidosa)
   - Médias móveis (suavizadas)
   - Taxa de mudança

**Critério:** Série gerada corretamente, suavização apropriada, gráficos profissionais.

---

## Exercício 6: Projeto Integrador — Análise Experimental Completa (Proposto)

**Contexto:** Experimento de pêndulo simples com dados reais ou sintéticos.

**Tarefa:** Em Python (Notebook):

1. **Coleta:** 20 medições de período T para L = 1.0 m
2. **Análise estatística:**
   - Média, desvio padrão, outliers
   - Incerteza: σ/√n
3. **Regressão:** Ajustar modelo teórico
4. **Validação:** Comparar g estimado com valor teórico
5. **Visualização:**
   - Histograma das medições
   - Gráfico de dispersão com reta de ajuste
   - Tabela de resultados

**Critério:** Análise completa e rigorosa, figuras de publicação, relatório com conclusões.

**Referência:** Notebook `05_Tratamento_Dados_Visualizacao.ipynb`

---

## Gabarito Parcial

### Exercício 1 — Estatística

```python
import numpy as np

dados = [20.1, 20.3, 20.2, 20.5, 20.0, 20.4, 20.1, 20.3, 20.2, 20.4]

media = np.mean(dados)
std = np.std(dados, ddof=1)  # ddof=1 para amostra
cv = (std / media) * 100

print(f"Média: {media:.2f}")
print(f"Desvio Padrão: {std:.4f}")
print(f"Coef. Variação: {cv:.2f}%")
```

### Exercício 4 — Regressão Linear

```python
import numpy as np
from scipy import stats

L = np.array([0.25, 0.50, 0.75, 1.00, 1.25])
T2 = np.array([1.00, 2.00, 2.99, 4.05, 5.02])

slope, intercept, r_value, p_value, std_err = stats.linregress(L, T2)

g = 4 * np.pi**2 / slope
print(f"g estimado: {g:.2f} m/s²")
print(f"g teórico: 9.81 m/s²")
print(f"R²: {r_value**2:.4f}")
```

---

## Referências

- **Apostila:** Capítulo 9
- **Notebook:** `05_Tratamento_Dados_Visualizacao.ipynb`
- **Referência:** NumPy e SciPy documentação

---

**Entrega até fim da Semana 12. 📧 hans@ufsm.br**
