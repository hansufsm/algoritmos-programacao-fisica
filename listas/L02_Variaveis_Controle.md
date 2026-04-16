# Lista de Exercícios 2: Variáveis, Tipos de Dados e Estruturas de Controle

**Disciplina:** FSC1189 — Algoritmo e Programação  
**Professor:** Prof. Hans Rogério Zimermann  
**Semestre:** 2026/1  
**Módulo:** 1 — Fundamentos da Programação  
**Semanas:** 3-4  
**Data de Entrega:** Fim da Semana 4 (via Moodle)  
**Peso:** 10% (distribuído entre todas as listas)

---

## Instruções Gerais

- **Exercícios 1-3:** Solução em **Portugol (VisualG)**
- **Exercícios 4-5:** Solução em **Python** (Jupyter/Colab)
- **Exercício 6:** Proposta de projeto integrador
- Teste seus programas com valores extremos
- Comente cada seção do código

---

## Exercício 1: Conversor de Unidades de Energia (Básico)

**Contexto Físico:** Em um laborátorio, medimos energia em diferentes unidades: joules (J), calorias (cal) e eletron-volts (eV).

**Tarefa:** Em VisualG, implemente um programa que:

1. Leia uma quantidade de energia em joules
2. Converta para calorias: 1 J = 0.239 cal
3. Converta para eV: 1 J = 6.242 × 10¹⁸ eV
4. Exiba as três medidas com precisão apropriada

**Exemplo:**
```
Energia em Joules: 100
Resultado:
  100 J
  23.9 cal
  6.242e+20 eV
```

**Critério:** Conversões corretas, variáveis bem nomeadas, saída formatada.

---

## Exercício 2: Classificação de Força em Mecânica (Intermediário)

**Contexto Físico:** Uma força F é aplicada a um objeto de massa m. Queremos classificar o regime de movimento.

**Tarefa:** Em VisualG, implemente um programa que:

1. Leia massa (kg), força (N) e coeficiente de atrito μ (adimensional)
2. Calcule: Aceleração resultante a = (F − μmg) / m
3. Classifique:
   - Se a < 0: "Objeto não se move (atrito estático)"
   - Se 0 ≤ a < 1: "Movimento muito lento"
   - Se 1 ≤ a < 5: "Movimento normal"
   - Se a ≥ 5: "Movimento acelerado"
4. Exiba a aceleração e a classificação

**Constante:** g = 9.81 m/s²

**Exemplo:**
```
Massa (kg): 2
Força (N): 30
Coeficiente de atrito: 0.1
Aceleração: 14.23 m/s²
Classificação: Movimento acelerado
```

**Critério:** Lógica correta, cálculos precisos, tratamento de atrito incluído.

---

## Exercício 3: Análise de Movimento com Múltiplas Condições (Intermediário)

**Contexto Físico:** Um sensor mede velocidade e aceleração de uma partícula. Queremos diagnosticar o tipo de movimento.

**Tarefa:** Em VisualG, crie um programa que:

1. Leia velocidade (m/s) e aceleração (m/s²)
2. Determine o tipo de movimento:
   - Estático: v = 0 E a = 0
   - Movimento Uniforme: v ≠ 0 E a = 0
   - Movimento Uniformemente Variado: a ≠ 0 E v·a > 0 (acelerando)
   - Movimento Desacelerado: a ≠ 0 E v·a < 0 (freando)
3. Exiba análise completa

**Desafio extra:** Se a ≠ 0, calcule o tempo para parar (t = −v/a) e a distância até parar (d = −v²/(2a))

**Critério:** Lógica condicional correta, cálculos adicionais opcionais.

---

## Exercício 4: Conversor de Temperatura Reutilizável (Intermediário)

**Contexto Físico:** Experimentos em laboratório usam diferentes escalas de temperatura: Celsius, Fahrenheit, Kelvin.

**Tarefa:** Em Python (Jupyter/Colab), implemente funções:

1. `celsius_para_fahrenheit(c)`
2. `celsius_para_kelvin(c)`
3. `fahrenheit_para_celsius(f)`
4. `kelvin_para_celsius(k)`
5. Função `converter_temperatura(valor, escala_origem, escala_destino)` que chama as anteriores

**Exemplos:**
```python
>>> celsius_para_fahrenheit(0)
32.0

>>> celsius_para_kelvin(25)
298.15

>>> converter_temperatura(100, 'C', 'K')
373.15
```

**Teste:** Crie uma tabela com conversões para T = -10, 0, 20, 37, 100 °C para as 3 escalas.

**Critério:** Todas as funções implementadas, testadas e documentadas.

---

## Exercício 5: Validação de Dados Experimentais (Avançado)

**Contexto Físico:** Dados de um experimento de pêndulo incluem: comprimento L (cm), período T (s), amplitude θ (graus).

**Tarefa:** Em Python, valide os seguintes critérios:

1. **Comprimento:** 10 ≤ L ≤ 200 cm
2. **Período:** T deve estar próximo a T ≈ 2π√(L/g) ± 20% (tolerância experimental)
3. **Amplitude:** θ ≤ 15° (aproximação de pequenos ângulos)
4. Retorne um dicionário: `{"valido": bool, "erros": [lista de mensagens]}`

**Exemplo:**
```python
resultado = validar_pendulo(L=100, T=2.0, theta=12)
# → {"valido": True, "erros": []}

resultado = validar_pendulo(L=5, T=1.0, theta=20)
# → {"valido": False, 
#    "erros": ["L fora de [10, 200]", "θ > 15°"]}
```

**Critério:** Validação completa, mensagens de erro claras, teste com 3+ casos.

---

## Exercício 6: Projeto Integrador — Análise de Queda Livre (Proposto)

**Contexto Físico:** Um objeto cai de uma altura h₀. Queremos analisar seu movimento.

**Tarefa (opcional, vale pontuação extra):** Implemente em Python um programa que:

1. Leia altura inicial (m), tempo decorrido (s) [ou altura final (m)]
2. Calcule:
   - Altura em função do tempo: h(t) = h₀ − (g t²)/2
   - Velocidade em função do tempo: v(t) = −g t
   - Tempo de queda total (até h = 0)
3. Valide que h(t) ≥ 0 (objeto não penetra o solo)
4. Exiba tabela com h, v em função de t (a cada 0.1s)
5. Crie gráfico de h(t) e v(t)

**Critério:** Funcionalidade completa, validação incluída, gráficos profissionais.

**Referência:** Notebook `02_Estruturas_Controle_Repeticao.ipynb` — Exercício 5.1

---

## Gabarito Parcial

### Exercício 1 — Conversor de Energia (Código VisualG)

```portugol
ALGORITMO "Conversor_Energia"
CONST
  J_PER_CAL = 0.239
  J_PER_EV = 6.242e18

VAR
  energia_j: real
  energia_cal, energia_ev: real

INICIO
  ESCREVA "Energia em Joules: "
  LEIA energia_j
  
  energia_cal ← energia_j * J_PER_CAL
  energia_ev ← energia_j * J_PER_EV
  
  ESCREVAL energia_j, " J"
  ESCREVAL energia_cal, " cal"
  ESCREVAL energia_ev, " eV"
FIMALGORITMO
```

### Exercício 4 — Funções de Conversão (Python)

```python
def celsius_para_fahrenheit(c):
    """Converte Celsius para Fahrenheit."""
    return (c * 9/5) + 32

def celsius_para_kelvin(c):
    """Converte Celsius para Kelvin."""
    return c + 273.15

def converter_temperatura(valor, origem, destino):
    """Converte entre escalas: C, F, K."""
    # Converter tudo para Celsius primeiro
    if origem == 'C':
        c = valor
    elif origem == 'F':
        c = (valor - 32) * 5/9
    elif origem == 'K':
        c = valor - 273.15
    
    # Depois converter para destino
    if destino == 'C':
        return c
    elif destino == 'F':
        return celsius_para_fahrenheit(c)
    elif destino == 'K':
        return celsius_para_kelvin(c)
```

---

## Orientações para Entrega

1. **VisualG:** Copie código para arquivo `.txt` comentado
2. **Python:** Notebook `.ipynb` com execução e resultados visíveis
3. **Tabelas/Gráficos:** Inclua no notebook ou como imagens
4. **Nomeação:** `L02_Ex1_SeuNome.txt`, `L02_Ex4_SeuNome.ipynb`

---

## Critérios de Avaliação

| Critério | Peso |
|---|---|
| Corretude dos cálculos | 40% |
| Validação e tratamento de erros | 25% |
| Documentação e clareza | 20% |
| Contextualização em Física | 15% |

---

## Referências

- **Apostila:** Capítulos 3-4
- **Notebook:** `01_Conceitos_Basicos.ipynb` (Exercícios 3.1, 3.2)
- **GUIA_DEBUGGING:** Seções sobre tipos de dados e estruturas

---

**Boa sorte! 📧 hans@ufsm.br**
