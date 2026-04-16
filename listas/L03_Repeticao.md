# Lista de Exercícios 3: Estruturas de Repetição (Loops)

**Disciplina:** FSC1189 — Algoritmo e Programação  
**Professor:** Prof. Hans Rogério Zimermann  
**Semestre:** 2026/1  
**Módulo:** 2 — Estruturas de Iteração e Dados  
**Semanas:** 5-6  
**Data de Entrega:** Fim da Semana 6  
**Peso:** 10%

---

## Exercício 1: Tabela de Queda Livre em VisualG (Básico)

**Contexto:** Gerar tabela de altura e velocidade para objeto em queda.

**Tarefa:** Em VisualG, crie um programa que:
- Leia altura inicial h₀ (metros)
- Para cada 0.1 segundo, de t = 0 até objeto atingir solo:
  - Calcule h(t) = h₀ − (g·t²)/2
  - Calcule v(t) = g·t
  - Exiba em formato tabular

Use g = 9.81 m/s². Parar quando h(t) < 0.

**Exemplo de saída:**
```
t(s)    h(m)    v(m/s)
0.0     100.0   0.0
0.1     99.95   0.98
0.2     99.8    1.96
...
```

**Critério:** Loop correto, cálculos precisos, parada apropriada.

---

## Exercício 2: Série de Leibniz para π (Intermediário)

**Contexto:** Aproximar π usando série infinita:
$$\frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + ...$$

**Tarefa:** Em VisualG ou Python:
1. Implemente loop que soma os primeiros N termos (ex: N = 10000)
2. Multiplique resultado por 4 para obter π
3. Compare com valor real de π ≈ 3.14159...
4. Exiba convergência a cada 1000 termos

**Exemplo:**
```
Após 1000 termos:    π ≈ 3.1406
Após 5000 termos:    π ≈ 3.1418
Após 10000 termos:   π ≈ 3.1416
Valor real:          π = 3.1416
```

**Critério:** Série implementada corretamente, análise de convergência clara.

---

## Exercício 3: Análise de Convergência com Tolerância (Intermediário)

**Contexto:** Validar quando uma série converge para um valor específico.

**Tarefa:** Em Python, implemente função:

```python
def calcular_leibniz_ate_convergencia(tolerancia=0.001):
    """Calcula série até converger com tolerância."""
    pi_aproximado = 0
    n = 0
    while True:
        termo = (-1)**n / (2*n + 1)
        pi_aproximado += termo
        n += 1
        erro = abs(pi_aproximado*4 - 3.14159265)
        if erro < tolerancia:
            return pi_aproximado*4, n, erro
```

Teste com tolerâncias: 0.1, 0.01, 0.001, 0.0001

**Saída esperada:**
```
Tolerância | π aproximado | Nº termos | Erro final
0.1        | 3.0418       | 49        | 0.0998
0.01       | 3.1615       | 499       | 0.0199
0.001      | 3.1416       | 4999      | 0.0002
```

**Critério:** Loop ENQUANTO correto, análise de convergência completa.

---

## Exercício 4: Produto Escalar de Vetores (Intermediário)

**Contexto:** Dois sensores medem componentes de vetores força em 3D.

**Tarefa:** Em Python, implemente:

```python
def produto_escalar(v1, v2):
    """Calcula produto escalar de dois vetores."""
    # v1 e v2 são listas [x, y, z]
    pass

def magnitude(v):
    """Calcula magnitude de vetor."""
    pass

def angulo_entre_vetores(v1, v2):
    """Calcula ângulo entre dois vetores (em graus)."""
    pass
```

**Teste com:**
- v1 = [3, 4, 0] e v2 = [0, 0, 5]
- Resultado esperado: produto escalar = 0 (perpendiculares), ângulo = 90°

**Critério:** Funções corretas, casos de teste incluídos, interpretação física.

---

## Exercício 5: Soma de Vetores com Visualização (Avançado)

**Contexto:** Dois vetores força atuam sobre objeto. Calcular força resultante.

**Tarefa:** Em Python (com matplotlib):

1. Defina dois vetores: **F₁** = [5, 3] N e **F₂** = [2, 4] N
2. Calcule vetor resultante: **F** = **F₁** + **F₂**
3. Calcule magnitudes: |**F₁**|, |**F₂**|, |**F**|
4. **Visualize** em gráfico:
   - Desenhe os 3 vetores como setas a partir da origem
   - Use cores diferentes
   - Adicione legenda e eixos com rótulos

**Critério:** Cálculos corretos, gráfico profissional com setas vetoriais.

**Dica:** Use `plt.arrow()` ou `plt.quiver()`.

---

## Exercício 6: Projeto Integrador — Pêndulo Simples Numérico (Proposto)

**Contexto:** Simular movimento de pêndulo simples.

**Tarefa:** Em Python:

1. Leia comprimento L (metros) e amplitude inicial θ₀ (graus)
2. Calcule período teórico: T = 2π√(L/g)
3. Use loop para integrar numericamente (Euler simples):
   - θ(t + dt) = θ(t) + ω(t)·dt
   - ω(t + dt) = ω(t) − (g/L)sin(θ)·dt
4. Simule 3 períodos
5. Crie gráfico de θ(t) e compare com período teórico

**Critério:** Integração numérica correta, validação com período teórico.

---

## Gabarito Parcial

### Exercício 2 — Série de Leibniz (Python)

```python
def calcular_pi_leibniz(n_termos):
    pi_approx = 0
    for n in range(n_termos):
        termo = (-1)**n / (2*n + 1)
        pi_approx += termo
    return pi_approx * 4

for n in [1000, 5000, 10000]:
    pi_calc = calcular_pi_leibniz(n)
    print(f"{n} termos: π ≈ {pi_calc:.6f}")
```

### Exercício 4 — Produto Escalar

```python
def produto_escalar(v1, v2):
    return sum(x*y for x, y in zip(v1, v2))

def magnitude(v):
    return sum(x**2 for x in v)**0.5

v1 = [3, 4, 0]
v2 = [0, 0, 5]
print(f"Produto: {produto_escalar(v1, v2)}")  # 0
print(f"|v1| = {magnitude(v1)}, |v2| = {magnitude(v2)}")
```

---

## Referências

- **Apostila:** Capítulos 5-6
- **Notebook:** `02_Estruturas_Controle_Repeticao.ipynb` (Exercícios 5.1, 5.2, 6.1, 6.2)

---

**Entrega até fim da Semana 6. Bom trabalho! 📧 hans@ufsm.br**
