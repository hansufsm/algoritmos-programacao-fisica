# Guia de Debugging - FSC1189

**Algoritmos e Programação para Física**

Um guia prático para identificar e corrigir erros comuns em VisualG e Python.

---

## Parte 1: Erros Comuns em VisualG (Portugol)

### 1. Erro: "Identificador não declarado"

**Causa:** Variável usada sem ser declarada antes.

```portugol
// ❌ ERRADO
inicio
    x ← 10
    escreva(x)
fimalgoritmo

// ✓ CORRETO
algoritmo "teste"
var
    x: inteiro
inicio
    x ← 10
    escreva(x)
fimalgoritmo
```

**Como corrigir:**
- Sempre declare variáveis na seção `var` antes de `inicio`
- Use nomes descritivos em português: `temperatura`, `altura`, `velocidade`

---

### 2. Erro: "Operação inválida entre tipos"

**Causa:** Tentar fazer operação matemática entre tipos incompatíveis.

```portugol
// ❌ ERRADO
var
    texto: caractere
    numero: inteiro
inicio
    texto ← "10"
    numero ← texto + 5  // Erro! caractere + inteiro
fimalgoritmo

// ✓ CORRETO
var
    numero1, numero2, resultado: inteiro
inicio
    numero1 ← 10
    numero2 ← 5
    resultado ← numero1 + numero2  // Ambos são inteiros
fimalgoritmo
```

**Como corrigir:**
- Garanta que operandos tenham o mesmo tipo
- Use conversão se necessário: `inteiro(variável_texto)`
- Não misture texto com números em operações aritméticas

---

### 3. Erro: "Condição lógica incorreta"

**Causa:** Operadores lógicos usados erroneamente.

```portugol
// ❌ ERRADO - quero valores entre 0 e 100
se (x > 0) ou (x < 100) entao
    escreva("Dentro do intervalo")
fimse

// ✓ CORRETO - usar 'e' ao invés de 'ou'
se (x > 0) e (x < 100) entao
    escreva("Dentro do intervalo")
fimse
```

**Como corrigir:**
- Use `e` quando ambas condições devem ser verdadeiras
- Use `ou` quando ao menos uma deve ser verdadeira
- Use `nao` para negar uma condição
- Trace a lógica manualmente com valores de teste

---

### 4. Erro: "Loop infinito"

**Causa:** Condição de parada do loop nunca é atingida.

```portugol
// ❌ ERRADO - x nunca muda!
x ← 0
enquanto (x < 10) faca
    escreva(x)
fimenquanto

// ✓ CORRETO - incrementar x
x ← 0
enquanto (x < 10) faca
    escreva(x)
    x ← x + 1
fimenquanto
```

**Como corrigir:**
- Sempre modifique a variável de controle dentro do loop
- Use incremento (`x ← x + 1`) ou decremento (`x ← x - 1`)
- Verifique se a condição é eventualmente falsa
- Teste o loop com valores pequenos (ex: até 3 iterações)

---

### 5. Erro: "Índice de vetor fora do intervalo"

**Causa:** Acessar posição de vetor que não existe.

```portugol
// ❌ ERRADO - vetor tem 5 elementos (índices 1-5)
var
    dados: vetor[1..5] de inteiro
    i: inteiro
inicio
    para i de 1 ate 6 faca  // Tenta acessar posição 6!
        dados[i] ← i
    fimpara
fimalgoritmo

// ✓ CORRETO
var
    dados: vetor[1..5] de inteiro
    i: inteiro
inicio
    para i de 1 ate 5 faca  // De 1 até 5
        dados[i] ← i
    fimpara
fimalgoritmo
```

**Como corrigir:**
- Vetores em VisualG começam em 1 (não 0)
- Se declarar `vetor[1..10]`, use índices de 1 a 10
- Loops devem ser: `para i de 1 ate tamanho faca`

---

### 6. Erro: "Função retorna valor inesperado"

**Causa:** Função não retorna o valor esperado ou retorna antes de terminar.

```portugol
// ❌ ERRADO
funcao quadrado(x: inteiro): inteiro
var
    resultado: inteiro
inicio
    resultado ← x * x
    // Faltou retornar!
fimfuncao

// ✓ CORRETO
funcao quadrado(x: inteiro): inteiro
var
    resultado: inteiro
inicio
    resultado ← x * x
    retorne resultado
fimfuncao
```

**Como corrigir:**
- Sempre termine funções com `retorne valor`
- Verifique que o tipo de retorno corresponde
- Inicialize variáveis antes de usar

---

## Parte 2: Erros Comuns em Python/Colab

### 1. Erro: `NameError: name 'x' is not defined`

**Causa:** Variável usada sem ser definida.

```python
# ❌ ERRADO
print(x)  # NameError: x não foi definido

# ✓ CORRETO
x = 10
print(x)  # Saída: 10
```

**Como corrigir:**
- Defina a variável antes de usar
- Execute células do notebook na ordem correta
- Use Cell → Run All ou pressione Ctrl+Shift+Enter

---

### 2. Erro: `TypeError: unsupported operand type(s)`

**Causa:** Operação entre tipos incompatíveis.

```python
# ❌ ERRADO
resultado = "10" + 5  # TypeError: não pode somar string e int

# ✓ CORRETO
resultado = int("10") + 5  # Saída: 15
# ou
resultado = "10" + str(5)  # Saída: "105" (concatenação)
```

**Como corrigir:**
- Converta tipos: `int()`, `float()`, `str()`
- Verifique o tipo com `type(variável)`
- Para arrays NumPy: `arr.astype(float)`

---

### 3. Erro: `IndexError: list index out of range`

**Causa:** Acessar índice que não existe em lista/array.

```python
# ❌ ERRADO
dados = [1, 2, 3]  # Índices: 0, 1, 2
print(dados[5])  # IndexError: índice 5 não existe

# ✓ CORRETO
print(dados[2])  # Saída: 3 (último elemento)
print(dados[-1])  # Saída: 3 (último elemento, índice negativo)
print(len(dados))  # Saída: 3 (tamanho da lista)
```

**Como corrigir:**
- Arrays Python começam em índice 0
- Use `len(lista) - 1` para o último elemento
- Ou use índice negativo: `-1` para último, `-2` para penúltimo
- Loops devem ser: `for i in range(len(lista))`

---

### 4. Erro: `ValueError: could not convert string to float`

**Causa:** Tentar converter string inválida para número.

```python
# ❌ ERRADO
valor = float("10.5x")  # ValueError: "10.5x" não é número válido

# ✓ CORRETO
valor = float("10.5")  # Saída: 10.5
valor = float("10")    # Saída: 10.0
```

**Como corrigir:**
- Valide strings antes de converter
- Trate exceções com `try/except`:

```python
try:
    valor = float(input_string)
except ValueError:
    print("Valor inválido! Digite um número.")
    valor = 0
```

---

### 5. Erro: `ModuleNotFoundError: No module named 'xxx'`

**Causa:** Tentar importar biblioteca não instalada.

```python
# ❌ ERRADO (no Colab sem comando install)
import scipy  # ModuleNotFoundError se não estiver instalado

# ✓ CORRETO
# Instalar primeiro no Colab
!pip install scipy
import scipy
```

**Como corrigir:**
- No Colab: `!pip install nome_do_pacote`
- No terminal: `pip install nome_do_pacote`
- Use bibliotecas padrão: `numpy`, `pandas`, `matplotlib` geralmente já estão
- Não use `!pip install` para bibliotecas já disponíveis

---

### 6. Erro: `KeyError: 'coluna_inexistente'`

**Causa:** Acessar coluna que não existe em DataFrame.

```python
import pandas as pd

# ❌ ERRADO
df = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
print(df['C'])  # KeyError: 'C' não existe

# ✓ CORRETO
print(df['A'])  # Saída: coluna A
print(df.columns)  # Ver nomes das colunas
```

**Como corrigir:**
- Verifique nomes de colunas com `df.columns`
- Use `df.head()` para ver estrutura
- Colunas são case-sensitive (maiúsculas/minúsculas importam)

---

### 7. Erro: `RuntimeWarning: invalid value encountered`

**Causa:** Operação que produz resultado indefinido (ex: raiz de negativo).

```python
import numpy as np

# ⚠ AVISO
resultado = np.sqrt(-1)  # RuntimeWarning + resultado: nan

# ✓ CORRETO - validar antes
x = -1
if x >= 0:
    resultado = np.sqrt(x)
else:
    print("Não posso calcular raiz de número negativo!")
```

**Como corrigir:**
- Valide inputs antes de operações
- Use `np.clip()` para limitar valores
- Trate valores especiais: `nan`, `inf`

```python
# Exemplo: evitar divisão por zero
if divisor != 0:
    resultado = numerador / divisor
```

---

### 8. Erro: `IndentationError: unexpected indent`

**Causa:** Indentação incorreta no código.

```python
# ❌ ERRADO - indentação inconsistente
def funcao():
print("Olá")  # Falta indentação!

# ✓ CORRETO - 4 espaços de indentação
def funcao():
    print("Olá")
```

**Como corrigir:**
- Use 4 espaços (não tabs) para indentar
- Mantenha consistência em todo o arquivo
- Linhas no mesmo bloco devem ter mesma indentação
- Configure editor para tabs → espaços

---

## Parte 3: Técnicas Gerais de Debug

### 3.1 Estratégia: Print Estratégico

```python
# Adicionar prints para rastrear fluxo
x = 10
print(f"[DEBUG] x = {x}")  # Mostrar valor de variável
y = x * 2
print(f"[DEBUG] y = {y}")

# Usar print com identificador
for i in range(3):
    resultado = i**2
    print(f"[DEBUG] Iteração {i}: resultado = {resultado}")
```

### 3.2 Estratégia: Assertions

```python
# Afirmações para detectar estado inválido
def calcular_media(notas):
    assert len(notas) > 0, "Lista de notas não pode ser vazia"
    assert all(0 <= n <= 10 for n in notas), "Notas devem estar entre 0 e 10"
    return sum(notas) / len(notas)
```

### 3.3 Estratégia: Isolamento de Função

```python
# Testar função isoladamente
def quadrado(x):
    return x * x

# Testes simples
assert quadrado(0) == 0
assert quadrado(3) == 9
assert quadrado(-2) == 4
print("Todos os testes passaram!")
```

### 3.4 Estratégia: Tipo Checking

```python
# Verificar tipos de variáveis
x = "10"
print(type(x))  # <class 'str'>

# Validar tipo esperado
def somar(a, b):
    assert isinstance(a, (int, float)), "a deve ser número"
    assert isinstance(b, (int, float)), "b deve ser número"
    return a + b
```

---

## Checklist de Debug

- [ ] **Ler a mensagem de erro** - geralmente indica o problema
- [ ] **Verificar sintaxe** - chaves, parênteses, indentação
- [ ] **Validar tipos** - variáveis têm tipo esperado?
- [ ] **Testar valores** - dados estão corretos?
- [ ] **Trace manual** - execute o código passo a passo com valores pequenos
- [ ] **Isolar o problema** - qual linha exata causa o erro?
- [ ] **Procurar padrões** - erro acontece com certos dados?
- [ ] **Pedir ajuda** - mostre o código, a mensagem de erro e o que esperava

---

## Recursos Úteis

- **VisualG:** Documentação integrada (F1) e exemplos no Help
- **Python:** `help(funcão)` ou `funcão?` no Colab
- **Debugging Python:** Use debugger integrado ou `pdb`:

```python
import pdb

def funcao_problema():
    x = 10
    pdb.set_trace()  # Para aqui e permite inspeção
    y = x / 0  # Erro aqui

# No Colab: execute e use 'p' para print, 'c' para continuar
```

---

**Lembre-se:** Erros são parte normal da programação. Cada erro é uma oportunidade de aprender!
