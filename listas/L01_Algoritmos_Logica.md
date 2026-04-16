# Lista de Exercícios 1: Algoritmos e Lógica de Programação

**Disciplina:** FSC1189 — Algoritmo e Programação  
**Professor:** Prof. Hans Rogério Zimermann  
**Semestre:** 2026/1  
**Módulo:** 1 — Fundamentos da Programação  
**Semanas:** 1-2  
**Data de Entrega:** Fim da Semana 2 (via Moodle)  
**Peso:** 10% (distribuído entre todas as listas)

---

## Instruções Gerais

- **Exercícios 1-3:** Solução em **Portugol (VisualG)**
- **Exercícios 4-5:** Solução em **Python** (Jupyter ou Colab)
- **Exercício 6:** Teórico (documento ou discussão)
- Comente seu código claramente
- Teste seus algoritmos antes de entregar
- Nomeie seus arquivos: `L01_Ex1_SeuNome.txt` (VisualG) ou `L01_Ex4_SeuNome.ipynb` (Python)

---

## Exercício 1: Fluxograma → Pseudocódigo → VisualG (Básico)

**Contexto Físico:** Um estudante mede a altura de queda de um objeto e precisa verificar se a medida é válida (entre 0 e 100 metros, conforme esperado para um experimento de laboratório).

**Tarefa:**

1. Desenhe um fluxograma que:
   - Leia uma altura (em metros)
   - Verifique se está no intervalo [0, 100]
   - Exiba "Medida válida" ou "Fora do intervalo"

2. Escreva o pseudocódigo correspondente

3. Implemente em VisualG

**Solução esperada:** Arquivo `.txt` com os 3 passos (fluxograma em diagrama ASCII, pseudocódigo, código VisualG)

**Dica:** Use estrutura SE-SENÃO com condições compostas.

---

## Exercício 2: Operadores Lógicos em Contexto Físico (Básico)

**Contexto Físico:** Classificar o estado da água (sólido, líquido, gás) baseado na temperatura.

**Tarefa:** Implemente em VisualG um algoritmo que:

- Leia a temperatura em °C
- Classifique como:
  - "Sólido" se T < 0
  - "Líquido" se 0 ≤ T < 100
  - "Gás" se T ≥ 100
- Exiba a classificação

**Exemplo de entrada/saída:**
```
Temperatura: -5
Classificação: Sólido

Temperatura: 50
Classificação: Líquido

Temperatura: 150
Classificação: Gás
```

**Critério:** Código correto, bem comentado, testado com pelo menos 3 valores (um em cada intervalo).

---

## Exercício 3: Validação com Múltiplas Condições (Intermediário)

**Contexto Físico:** Validar medições de uma bola de borracha após queda. A bola deve satisfazer:
- Velocidade no impacto: entre 1 e 50 m/s (fisicamente realista)
- Altura de queda: entre 0.1 e 100 metros
- Massa: entre 0.05 e 1 kg (para bola de borracha)

**Tarefa:** Implemente em VisualG um programa que:

- Leia velocidade, altura e massa
- Verifique se **TODAS** as três medições estão nos intervalos válidos
- Se sim: exiba "Experimento válido"
- Se não: exiba qual(is) medição(ões) está(ão) fora do intervalo

**Exemplo:**
```
Velocidade: 10 m/s ✓
Altura: 5 m ✓
Massa: 0.2 kg ✓
→ Experimento válido

Velocidade: 60 m/s ✗
Altura: 10 m ✓
Massa: 2 kg ✗
→ ERRO: Velocidade fora [1, 50]. ERRO: Massa fora [0.05, 1].
```

**Critério:** Use operadores lógicos E/OU apropriadamente. Teste com pelo menos 2 casos (um válido, um inválido).

---

## Exercício 4: Trajetória de Projétil em Python (Intermediário)

**Contexto Físico:** Um canhão dispara uma bala em ângulo θ = 45° com velocidade inicial v₀ = 20 m/s. Calcule e visualize a trajetória.

**Tarefa:** Em um Notebook Python (ou Colab), implemente:

1. Função `calcular_trajetoria(v0, theta, g=9.81)` que retorna:
   - Tempo de voo (até bala retornar ao solo)
   - Alcance horizontal máximo
   - Altura máxima
   - Arrays de tempos, x e y

2. Execute a função com v₀ = 20 m/s, θ = 45°

3. Crie um gráfico mostrando y(x) — a trajetória da bala

4. Validação: A altura máxima deve estar próxima a (v₀ sin θ)² / (2g) ≈ 10.2 m

**Fórmulas:**
- x(t) = v₀ cos(θ) × t
- y(t) = v₀ sin(θ) × t − (g t²)/2
- Tempo de voo: t_f = 2 v₀ sin(θ) / g

**Critério:** Código funcional, gráfico profissional com rótulos e legenda, validação correta.

**Referência:** Notebook `01_Conceitos_Basicos.ipynb` — Exercício 1.1

---

## Exercício 5: Lógica Booleana em Velocidades (Intermediário)

**Contexto Físico:** Um detector de movimento classifica velocidades em categorias:
- Estático: v < 0.1 m/s
- Lento: 0.1 ≤ v < 1 m/s
- Normal: 1 ≤ v < 10 m/s
- Rápido: v ≥ 10 m/s

**Tarefa:** Em Python, implemente:

1. Função `classificar_velocidade(v)` que retorna uma string com a categoria

2. Teste com valores: 0.05, 0.5, 5, 15 m/s

3. Crie uma tabela com:
   - Velocidade (m/s)
   - Classificação
   - Descrição (ex: "Pessoa andando lentamente")

Exemplo de tabela esperada:
```
| Velocidade (m/s) | Classificação | Exemplo físico |
|---|---|---|
| 0.05 | Estático | Objeto em repouso |
| 0.5 | Lento | Caracol |
| 5 | Normal | Pessoa correndo |
| 15 | Rápido | Carro em rua |
```

**Critério:** Função correta, tabela completa, descrições realistas.

---

## Exercício 6: Análise Teórica — Complexidade de Algoritmos (Teórico)

**Tarefa:** Responda as seguintes perguntas em 1-2 parágrafos cada:

### 6.1 O que é Big-O?

Explique o conceito de notação Big-O e forneça 3 exemplos com complexidades diferentes (O(1), O(n), O(n²)).

### 6.2 Fluxograma vs Código

Compare (em termos de clareza e utilidade):
- Descrever um algoritmo em fluxograma
- Descrever o mesmo algoritmo em pseudocódigo
- Implementar em VisualG

Qual formato você prefere para aprender? Por quê?

### 6.3 Validação de Dados

Por que é importante validar dados de entrada em programas científicos? Dê 2 exemplos de erros que poderiam ocorrer se dados não fossem validados.

**Critério:** Respostas claras, exemplos concretos, até 1 página total.

---

## Gabarito Parcial

### Exercício 1 — Fluxograma da Altura

```
┌─────────────┐
│   INÍCIO    │
└──────┬──────┘
       │
       ├─→ Ler: altura
       │
       ├─→ Se (altura ≥ 0 E altura ≤ 100) então
       │     Escrever: "Medida válida"
       │   Senão
       │     Escrever: "Fora do intervalo"
       │
       └─→ FIM
```

### Exercício 2 — Pseudocódigo Estados da Água

```
ALGORITMO "Estados_da_Agua"
VAR
  temperatura: real
  estado: caractere

INÍCIO
  ESCREVA "Digite a temperatura (°C): "
  LEIA temperatura
  
  SE temperatura < 0 ENTAO
    estado ← "Sólido"
  SENAO
    SE temperatura < 100 ENTAO
      estado ← "Líquido"
    SENAO
      estado ← "Gás"
    FIMSE
  FIMSE
  
  ESCREVA "Classificação: ", estado
FIMALGORITMO
```

### Exercício 4 — Trajetória em Python (Resumo)

```python
import numpy as np
import matplotlib.pyplot as plt

def calcular_trajetoria(v0, theta, g=9.81):
    theta_rad = np.radians(theta)
    t_max = 2 * v0 * np.sin(theta_rad) / g
    t = np.linspace(0, t_max, 100)
    x = v0 * np.cos(theta_rad) * t
    y = v0 * np.sin(theta_rad) * t - 0.5 * g * t**2
    return t, x, y

t, x, y = calcular_trajetoria(20, 45)
plt.plot(x, y, 'b-', linewidth=2)
plt.xlabel('Distância (m)')
plt.ylabel('Altura (m)')
plt.title('Trajetória de Projétil (v₀=20 m/s, θ=45°)')
plt.grid(True)
plt.show()
```

---

## Orientações para Entrega

1. **Arquivos VisualG** (Ex 1-3): Copie o código para um arquivo `.txt` com comentários
2. **Arquivos Python** (Ex 4-5): Notebook `.ipynb` ou arquivo `.py` bem comentado
3. **Exercício 6**: Documento de texto (`.md`, `.pdf` ou `.docx`)
4. **Nomeação**: `L01_Ex1_SeuNome.txt`, `L01_Ex4_SeuNome.ipynb`, etc.
5. **Submissão**: Via Moodle ou link de compartilhamento (conforme orientado)

---

## Critérios de Avaliação

| Critério | Peso | Descrição |
|---|---|---|
| Corretude do algoritmo | 50% | Código executa sem erros, produz saída correta |
| Comentários e clareza | 20% | Código comentado, nomes descritivos |
| Testes realizados | 15% | Evidência de testes com múltiplos valores |
| Contextualização em Física | 15% | Aplicação realista, validação física |

---

## Referências

- **Apostila:** Capítulos 1-2 (Introdução a Algoritmos, Lógica de Programação)
- **Notebook:** `01_Conceitos_Basicos.ipynb` (Exercícios 1.1, 2.1, 3.1)
- **GUIA_DEBUGGING:** Seções 1-2 (Erros comuns em VisualG e Python)

---

**Boa sorte! Qualquer dúvida, contacte o professor.** 📧 hans@ufsm.br
