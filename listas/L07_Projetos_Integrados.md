# Lista de Exercícios 7: Projetos Integrados em Física

**Disciplina:** FSC1189 — Algoritmo e Programação  
**Professor:** Prof. Hans Rogério Zimermann  
**Semestre:** 2026/1  
**Módulo:** 4 — Aplicações Avançadas e Projeto Final  
**Semanas:** 13-14  
**Data de Entrega:** Fim da Semana 14  
**Peso:** 10%

---

## Visão Geral

Esta lista contém 6 exercícios que integram **todos os conceitos** dos módulos anteriores. Escolha **pelo menos 2 exercícios** para completar e **1 exercício proposto** (projeto final).

---

## Exercício 1: Simulação de Projétil com Arrasto (Intermediário)

**Contexto:** Bala de canhão no ar sofre resistência do ar: F_arrasto = −β·v²

**Tarefa:** Em Python:

1. Implemente EDO de movimento com arrasto:
   - m·a_x = −β·v_x·|v|
   - m·a_y = −m·g − β·v_y·|v|

2. Use Euler ou odeint para integrar até bala cair

3. Teste com/sem arrasto (β = 0 e β = 0.04)

4. Crie gráfico comparativo: trajetória com e sem arrasto

5. Encontre: alcance máximo, tempo de voo, altura máxima

**Parâmetros:**
- m = 0.05 kg, v₀ = 100 m/s, θ = 45°
- g = 9.81 m/s²

**Saída esperada:**
```
Sem arrasto:    Alcance = 1020 m, Altura = 510 m
Com arrasto:    Alcance = 630 m, Altura = 280 m
```

**Critério:** Integração numérica correta, comparação clara, gráficos profissionais.

**Referência:** Notebook `03_Metodos_Numericos_Projetos.ipynb` — Exercício 10.2

---

## Exercício 2: Pêndulo Simples — Período vs Comprimento (Intermediário)

**Contexto:** Validar fórmula teórica do pêndulo: T = 2π√(L/g)

**Tarefa:** Em Python:

1. Simule pêndulo simples para L = 0.25, 0.50, 0.75, 1.00, 1.25 m
2. Para cada L, use Euler para integrar θ'' + (g/L)sin(θ) = 0
3. Meça período numericamente (tempo para 2 oscilações)
4. Compare com período teórico
5. Crie gráfico T²(L) com reta de ajuste
6. Estime g a partir do ajuste

**Critério:** Múltiplas simulações, comparação teoria vs experimento, regressão linear.

**Referência:** Notebook `03_Metodos_Numericos_Projetos.ipynb` — Exercício 10.1

---

## Exercício 3: Circuito RC — Carga e Descarga (Intermediário)

**Contexto:** Capacitor carregando/descarregando através de resistor: V_C(t) = V₀(1 − e^{−t/RC})

**Tarefa:** Em Python:

1. Implemente solução analítica e numérica (Euler)
2. Compare V_C(t), I(t), E(t) para:
   - R = 1000 Ω, C = 1 μF, V₀ = 10 V
   - τ = RC = 0.001 s
3. Crie 4 gráficos: V_C, I, E, Erro (Euler vs Analítica)
4. Varie dt para mostrar dependência de erro

**Critério:** Comparação correta, análise de erro, visualizações múltiplas.

**Referência:** Notebook `04_Circuito_RC.ipynb`

---

## Exercício 4: Oscilador Harmônico Amortecido — 3 Regimes (Avançado)

**Contexto:** Massa em mola com damping: y'' + 2β·y' + ω₀²·y = 0

**Tarefa:** Em Python:

1. Implemente integração numérica para 3 regimes:
   - **Subamortecido:** β < ω₀ (oscila e decai)
   - **Criticamente amortecido:** β = ω₀ (retorna sem oscilar)
   - **Superamortecido:** β > ω₀ (retorna lentamente)

2. Para cada caso, simule com y(0) = 1, y'(0) = 0

3. Sobreponha 3 gráficos em um painel

4. Analise:
   - Frequência de oscilação (subamortecido)
   - Tempo de acomodação (5% do pico final)
   - Taxa de decaimento exponencial

**Parâmetros:**
- ω₀ = 1 rad/s
- β = 0.5 (sub), 1.0 (crítico), 1.5 (super)

**Critério:** Três regimes simulados corretamente, análise completa.

**Referência:** Notebook `03_Metodos_Numericos_Projetos.ipynb` — Exercício Proposto 6

---

## Exercício 5: Big-O Empírico — Busca Linear vs Binária (Avançado)

**Contexto:** Medir tempo de execução de dois algoritmos para arrays grandes.

**Tarefa:** Em Python:

1. Implemente:
   - Busca linear: O(n)
   - Busca binária: O(log n)

2. Teste com tamanhos: n = 100, 1000, 10000, 100000, 1000000

3. Meça tempo de cada busca (usar `time.perf_counter()`)

4. Crie gráfico log-log mostrando:
   - Dados empíricos (pontos)
   - Retas de ajuste: y = k·n (linear) e y = k·log(n) (binária)

5. Confirme que linear é O(n) e binária é O(log n)

**Saída esperada:**
```
n       | Linear (μs) | Binária (μs) | Ratio
--------|-------------|--------------|-------
1000    | 50          | 2            | 25x
10000   | 500         | 3            | 167x
100000  | 5000        | 4            | 1250x
```

**Critério:** Medições consistentes, gráfico log-log claro, conclusões sobre complexidade.

---

## Exercício 6 (ESCOLHA UMA): Projeto Capstone Integrador (Proposto)

**Escolha uma opção abaixo para seu projeto final:**

### **Opção A: Simulação de Órbita Planetária**

Simule órbita de planeta usando integração numérica (Euler ou RK4):
- Força: F = −GMm/r² (direção radial)
- Integre: r''(t) = −GM/r²
- Plote trajetória, compare com órbita teórica (Kepler)
- Valide: conservação de energia e momentum angular

**Dados:** Considere Mercúrio (M = M☉, a = 0.387 AU)

---

### **Opção B: Análise Completa de Experimento (Você escolhe!)**

Implemente análise estatística e numérica de experimento real ou simulado:
1. Coleta de dados (20-50 medições)
2. Análise: média, σ, outliers (3σ/IQR)
3. Regressão linear ou não-linear
4. Estimação de parâmetro físico (ex: g, k_mola, viscosidade)
5. Propagação de incerteza
6. Validação contra valor teórico

**Exemplos:** pêndulo simples, mola, pendulum, queda livre, etc.

---

### **Opção C: Simulação de Dinâmica Molecular (Avançado)**

Simule N partículas interagindo via potencial de Lennard-Jones:
- V(r) = 4ε[(σ/r)¹² − (σ/r)⁶]
- Use Euler para integrar trajetórias
- Calcule: temperatura, pressão, energia total
- Crie animação (ou sequência de frames) das posições

**Critério:** Implementação correta, visualização clara, análise termodinâmica.

---

### **Opção D: Seu próprio projeto**

Proponha um projeto integrado que combine:
- Integração numérica ou resolução de equação
- Análise estatística de dados
- Visualizações profissionais
- Contexto em Física

Conserte com o professor antecipadamente!

---

## Especificação do Projeto Capstone

Independente da opção, seu projeto deve incluir:

### **Estrutura do Notebook:**

1. **Introdução teórica** (0.5-1 página)
   - Equações governantes
   - Contexto físico
   - Objetivos

2. **Metodologia** (0.5-1 página)
   - Algoritmos utilizados
   - Parâmetros/dados
   - Critérios de validação

3. **Implementação** (código comentado)
   - Funções principais
   - Testes unitários
   - Validações

4. **Resultados** (1-2 páginas)
   - Gráficos profissionais (colorido, legenda, eixos com unidades)
   - Tabelas de valores importantes
   - Comparação com teoria/esperado

5. **Discussão** (0.5-1 página)
   - Análise crítica dos resultados
   - Fontes de erro
   - Melhorias sugeridas

6. **Conclusão** (0.3-0.5 página)
   - Resumo dos achados
   - Validade do modelo

### **Critérios de Avaliação:**

| Critério | Peso |
|---|---|
| Corretude da implementação | 30% |
| Validação contra teoria/esperado | 25% |
| Visualizações e apresentação | 20% |
| Documentação e clareza | 15% |
| Originalidade/criatividade | 10% |

---

## Entrega

- **Formato:** Notebook Jupyter (.ipynb) + PDF do relatório (se separado)
- **Nomeação:** `L07_Ex2_SeuNome.ipynb` ou `Projeto_Capstone_SeuNome.ipynb`
- **Submissão:** Via Moodle até **fim da Semana 14**

---

## Referências

- **Apostila:** Capítulos 8-10
- **Notebooks:**
  - `03_Metodos_Numericos_Projetos.ipynb`
  - `04_Circuito_RC.ipynb`
  - `05_Tratamento_Dados_Visualizacao.ipynb`
  - `06_Projeto_Capstone_Fisica.ipynb`

---

## Dicas de Sucesso

1. **Comece cedo:** Projetos numéricos podem ter bugs sutis
2. **Teste frequentemente:** Valide com casos simples primeiro
3. **Visualize resultados:** Gráficos revelam problemas rapidamente
4. **Compare com teoria:** Sempre verifique resultado com esperado
5. **Documente bem:** Código comentado facilita depuração

---

**Bom trabalho em seu projeto! 📧 hans@ufsm.br**

**Deadline final: Fim da Semana 14**
