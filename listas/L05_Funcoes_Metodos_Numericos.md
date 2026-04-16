# Lista de Exercícios 5: Funções e Métodos Numéricos

**Disciplina:** FSC1189 — Algoritmo e Programação  
**Professor:** Prof. Hans Rogério Zimermann  
**Semestre:** 2026/1  
**Módulo:** 3 — Funções e Métodos Numéricos  
**Semanas:** 9-11  
**Data de Entrega:** Fim da Semana 11  
**Peso:** 10%

---

## Exercício 1: Módulo de Energias em VisualG (Básico)

**Contexto:** Biblioteca de funções para calcular energias em Mecânica.

**Tarefa:** Em VisualG, implemente funções:

1. `energia_cinetica(m, v)` → (1/2)mv²
2. `energia_potencial(m, g, h)` → mgh
3. `energia_mecanica(m, v, h, g)` → E_cin + E_pot
4. `trabalho(F, d, cos_theta)` → F·d·cos(θ)

Teste cada função com:
- m = 2 kg, v = 5 m/s → E_cin = 25 J
- h = 10 m, g = 9.81 → E_pot = 196.2 J

**Critério:** Funções implementadas corretamente, valores testados.

---

## Exercício 2: Método da Bisseção (Intermediário)

**Contexto:** Encontrar raiz de equação f(x) = x² − 4 no intervalo [1, 3].

**Tarefa:** Em Python, implemente função:

```python
def bisseção(f, a, b, tolerancia=1e-6, max_iteracoes=100):
    """Encontra raiz de f(x) = 0 no intervalo [a, b]."""
    # Retorna: (raiz, número de iterações, erro final)
    pass
```

Teste com f(x) = x² − 4 (resposta exata: x = 2)

**Saída esperada:**
```
Raiz encontrada: 2.000000
Iterações: 20
Erro: 9.5e-7
```

**Critério:** Algoritmo correto, convergência garantida, tolerância respeitada.

---

## Exercício 3: Diferenciação Numérica (Intermediário)

**Contexto:** Calcular derivada numericamente usando diferenças finitas.

**Tarefa:** Em Python, implemente:

1. `diferenca_progressiva(f, x, h=0.001)` → (f(x+h) − f(x))/h
2. `diferenca_regressiva(f, x, h=0.001)` → (f(x) − f(x-h))/h
3. `diferenca_central(f, x, h=0.001)` → (f(x+h) − f(x-h))/(2h)
4. Compare os 3 métodos com derivada analítica

Teste com f(x) = x³ em x = 2 (derivada analítica: f'(2) = 12)

**Saída esperada:**
```
Diferença Progressiva:  11.994 (erro: 0.006)
Diferença Regressiva:   12.006 (erro: 0.006)
Diferença Central:      12.000 (erro: 0.000)
Analítica:              12.000
```

**Critério:** Precisão dos métodos demonstrada, diferença central mais precisa.

---

## Exercício 4: Integração Numérica — Trapézio vs Simpson (Avançado)

**Contexto:** Calcular integral definida: ∫₀¹ x² dx (resultado exato: 1/3)

**Tarefa:** Em Python, implemente:

```python
def integracao_trapezio(f, a, b, n):
    """Integra f de a até b usando n trapézios."""
    pass

def integracao_simpson(f, a, b, n):
    """Integra f de a até b usando n parábolas (Simpson)."""
    pass
```

Compare:
- n = 10, 100, 1000
- Mostre erro em relação ao valor exato (1/3)
- Crie gráfico de convergência

**Saída esperada:**
```
n     | Trapézio    | Simpson     | Erro Trap | Erro Simp
------|-------------|-------------|-----------|----------
10    | 0.335833    | 0.333333    | 0.0025    | 0.0000
100   | 0.333358    | 0.333333    | 0.00002   | 0.0000
1000  | 0.333334    | 0.333333    | 0.000000  | 0.0000
```

**Critério:** Simpson mais preciso, gráfico de convergência clear.

---

## Exercício 5: Método de Euler para EDO (Avançado)

**Contexto:** Resolver EDO de circuito RC: dV_c/dt = (V₀ − V_c)/(RC)

**Tarefa:** Em Python:

1. Implemente função `euler(f, y0, t0, tf, dt)` que retorna arrays t, y
2. Aplique a EDO do circuito RC com:
   - V₀ = 10 V
   - RC = 0.001 s (constante de tempo)
   - Tempo final: 0.005 s
3. Compare com solução analítica: V_c(t) = V₀(1 − e^{−t/RC})
4. Crie gráfico comparando Euler vs Analítica

**Critério:** Integração correta, comparação com analítica mostrando erro.

---

## Exercício 6: Projeto Integrador — Pêndulo com Damping (Proposto)

**Contexto:** Simular pêndulo amortecido com diferentes constantes de amortecimento.

**Tarefa:** Em Python:

1. Implemente EDO do pêndulo amortecido:
   - θ'' + 2β·θ' + (g/L)sin(θ) = 0
   - Com β = coeficiente de amortecimento

2. Use Euler para integrar numericamente para 3 regimes:
   - Subamortecido (β < √(g/L))
   - Criticamente amortecido (β = √(g/L))
   - Superamortecido (β > √(g/L))

3. Crie gráfico com os 3 casos sobrepostos

4. Analise período, decaimento, tempo de acomodação

**Critério:** Integração correta, 3 regimes demonstrados, análise completa.

---

## Gabarito Parcial

### Exercício 2 — Bisseção

```python
def bisseccao(f, a, b, tol=1e-6, max_iter=100):
    for i in range(max_iter):
        c = (a + b) / 2
        if abs(f(c)) < tol or abs(b - a) < tol:
            return c, i+1, abs(f(c))
        if f(c) * f(a) < 0:
            b = c
        else:
            a = c
    return c, max_iter, abs(f(c))

# Teste
f = lambda x: x**2 - 4
raiz, iters, erro = bisseccao(f, 1, 3)
print(f"Raiz: {raiz:.6f}, Iterações: {iters}, Erro: {erro:.2e}")
```

### Exercício 3 — Diferenciação

```python
def dif_central(f, x, h=0.001):
    return (f(x + h) - f(x - h)) / (2 * h)

f = lambda x: x**3
x = 2
derivada = dif_central(f, x)
print(f"f'(2) numérica: {derivada:.6f}")
print(f"f'(2) analítica: 12.000000")
```

---

## Referências

- **Apostila:** Capítulos 7-8
- **Notebook:** `03_Metodos_Numericos_Projetos.ipynb` (Exercícios 7.1, 8.1–8.4, 10.1–10.2)

---

**Entrega até fim da Semana 11. 📧 hans@ufsm.br**
