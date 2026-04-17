# Portal FSC1189 - Algoritmos & Programação

**Disciplina:** FSC1189 — Algoritmo e Programação  
**Professor:** Prof. Hans Rogério Zimermann  
**Instituição:** UFSM - Centro de Ciências Naturais e Exatas  
**Semestre:** 2026/1

---

## 🌐 Sobre o Portal

Este é o portal web oficial da disciplina FSC1189, servindo como ponto de entrada centralizado para alunos acessarem todos os recursos educacionais: apostila, notebooks, listas de exercícios, FAQ e o quiz interativo **QuizAlgo**.

O design segue fielmente o sistema de design em `design_system/`, utilizando:
- **Tailwind CSS** (runtime via CDN)
- Paleta de cores: teal + cyan + slate
- Fonts: Plus Jakarta Sans (headings) + Inter/Geist (body)
- Componentes: botões pill, cards rounded-2xl, nav flutuante
- Ícones: Lucide via CDN

---

## 📁 Estrutura

```
site/
├── index.html            # Portal homepage — entrada principal
├── quiz.html             # QuizAlgo — SPA com quiz interativo
├── faq.html              # FAQ interativo com accordion
├── data/
│   └── questions.js      # Banco de 60+ questões por dificuldade
└── README.md             # Este arquivo
```

---

## 🚀 Uso

### Abrir localmente

1. Navegue até a pasta `site/`:
   ```bash
   cd site/
   ```

2. Abra em browser via `file://`:
   - **Chrome/Firefox:** Abra `index.html`
   - **Ou use Python:** `python -m http.server 8000` e acesse `http://localhost:8000`

### Deploy online

O portal é **estático** (HTML + CSS + JS) e pode ser hospedado em:
- GitHub Pages
- Netlify
- Vercel
- Qualquer servidor web

Não requer backend ou banco de dados.

---

## 📄 Páginas

### 1. **index.html** — Portal Homepage

**Conteúdo:**
- Nav flutuante com links para Quiz, FAQ, Recursos
- Hero section com título, descrição e stats (10 capítulos, 6 notebooks, 7 listas)
- Grid de 4 cards: Apostila, Notebooks, Listas, QuizAlgo
- FAQ Preview com 3 perguntas destacadas
- CTA Banner para acessar Quiz
- Footer com info do professor e licença

**Responsive:** Layout adapta de 1 coluna (mobile) para 2 colunas (tablet) para multi-coluna (desktop)

---

### 2. **quiz.html** — QuizAlgo SPA

**Fluxo de 3 telas:**

#### Tela 1: Seleção de Nível
- SVG inline com diagrama de fluxograma (INÍCIO → leia → decisão → FIM)
- 4 botões de dificuldade com cores próprias:
  - 🟢 **Básico** (`bg-green-500`) — 15 questões
  - 🔵 **Intermediário** (`bg-blue-500`) — 15 questões
  - 🟠 **Avançado** (`bg-orange-500`) — 15 questões
  - ⚫ **Ninja** (`bg-slate-900` com borda cyan) — 15 questões

#### Tela 2: Quiz Ativo
- Barra de progresso (questão X de 10)
- Card com pergunta em fonte grande
- 4 botões de opções (A, B, C, D) com hover effect
- Feedback imediato após resposta:
  - Cor verde + explicação se correto
  - Cor vermelha + correta destacada se incorreto
- Botão "Próxima" após resposta
- Bloqueio de opções após seleção

#### Tela 3: Resultado
- Score em círculo animado (gradiente de cores por performance)
- Classificação:
  - ≥ 90% → 🎉 Excelente
  - ≥ 70% → 👏 Bom
  - ≥ 50% → 📚 Regular
  - < 50% → 💪 Continue Tentando
- Estatísticas: questões corretas / total
- Botões: "Tentar Novamente", "Mudar Dificuldade", "Ver FAQ"

**Funcionalidades JavaScript:**
- Embaralhamento de questões a cada tentativa
- Embaralhamento de opções
- Cálculo automático de percentual
- Validação de resposta com explicação

---

### 3. **faq.html** — FAQ Interativo

**Seções (com `<details>/<summary>` native):**

1. **Conceitos Gerais**
   - O que é um algoritmo?
   - Diferença entre algoritmo, pseudocódigo, código
   - Complexidade Big-O

2. **Módulo 1: Fundamentos**
   - Fluxogramas
   - Validação de dados
   - Tipos de dados em VisualG

3. **Módulo 2: Iteração**
   - PARA vs ENQUANTO
   - Convergência de série
   - Operações com vetores

4. **Módulo 3: Métodos Numéricos**
   - Funções vs procedimentos
   - Método da bisseção
   - Integração numérica

5. **Módulo 4: Aplicações Avançadas**
   - Pêndulo simples
   - Regressão linear
   - Oscilador amortecido

6. **Ferramentas e Ambiente**
   - Instalação de Python e bibliotecas
   - Como usar Jupyter Notebooks
   - Atalhos úteis

7. **Avaliação e Projetos**
   - Fórmula de cálculo de nota
   - Estrutura do Projeto 1
   - Opções de Projeto Capstone

**Features:**
- Accordion nativo HTML (sem JS necessário)
- Ícone chevron que rotaciona ao abrir
- Estilos com Tailwind
- Links internos para navegação
- Blocos `<pre><code>` para exemplos de código

---

### 4. **data/questions.js** — Banco de Questões

**Estrutura:**

```javascript
const QUESTIONS = {
  basico: [/* 15 questões */],
  intermediario: [/* 15 questões */],
  avancado: [/* 15 questões */],
  ninja: [/* 15 questões */]
};
```

**Formato de cada questão:**

```javascript
{
  id: 1,
  question: "Pergunta em português",
  options: ["Opção A", "Opção B", "Opção C", "Opção D"],
  correct: 1,  // índice 0-based da resposta correta
  explanation: "Explicação da resposta correta",
  topic: "Conceitos Básicos"
}
```

**Conteúdo por nível:**

| Nível | Tópicos | Exemplos |
|---|---|---|
| **Básico** | Definição de algoritmo, fluxogramas, tipos de dados, variáveis, operadores, SE-SENÃO, VisualG | 15 questões sobre conceitos fundamentais |
| **Intermediário** | Loops PARA/ENQUANTO, vetores, funções, série convergente, depuração | 15 questões sobre estruturas e lógica |
| **Avançado** | Bisseção, diferenciação, integração, método de Euler, regressão, EDOs | 15 questões sobre métodos numéricos |
| **Ninja** | Big-O, complexidade, oscilador amortecido, dinâmica molecular, otimização | 15 questões de desafio máximo |

**Funcionalidades JS:**
- `getRandomQuestions(level, count)` — retorna X questões aleatórias de um nível
- `getAllQuestions(level)` — retorna todas as questões de um nível
- `shuffleArray(array)` — embaralha (Fisher-Yates)

---

## 🎨 Design System

### Cores

| Token | Tailwind | Uso |
|---|---|---|
| Background | `bg-teal-700` | Fundo da página |
| Wrapper | `bg-green-50 rounded-3xl` | Cards principais |
| Primary CTA | `bg-cyan-500 hover:bg-cyan-600` | Botões de ação |
| Secondary | `border-slate-300 text-slate-900` | Botões outline |
| Text heading | `text-slate-900` | Títulos |
| Text body | `text-slate-600` | Corpo do texto |
| Accent | `text-cyan-500` | Destaque |
| Difficulty Básico | `bg-green-500` | Quiz |
| Difficulty Intermediário | `bg-blue-500` | Quiz |
| Difficulty Avançado | `bg-orange-500` | Quiz |
| Difficulty Ninja | `bg-slate-900 border-cyan-500` | Quiz |

### Tipografia

| Uso | Font | Size | Weight |
|---|---|---|---|
| Headings | Plus Jakarta Sans | 1.5rem–3.5rem | semibold (600) |
| Body | Inter / Geist | 1rem | normal (400) |
| Small text | Inter / Geist | 0.875rem | normal |
| Buttons | Inter / Geist | 0.875rem | semibold (600) |

### Componentes

- **Botões:** `rounded-full px-6 py-3 font-semibold transition`
- **Cards:** `bg-white rounded-2xl p-8 shadow-sm hover:shadow-md`
- **Nav:** `bg-white rounded-full shadow-lg` (floating pill)
- **Inputs (quiz):** `border-2 rounded-xl p-4 hover:border-cyan-500`

---

## 🔗 Links Internos

Todos os links apontam para recursos no diretório `colab_notebooks/`:

| Recurso | Link |
|---|---|
| Apostila | `../APOSTILA_ALGORITMOS_PROGRAMACAO.md` |
| Notebooks | `../` (lista de .ipynb) |
| Listas | `../listas/` |
| FAQ completo | `faq.html` |
| Quiz | `quiz.html` |
| Plano de Ensino | `../PLANO_DE_ENSINO_16_SEMANAS.md` |

Caminhos relativos garantem que o portal funciona offline em `file://`.

---

## 📱 Responsividade

Layout adaptativo em 3 breakpoints:

| Device | Width | Layout |
|---|---|---|
| Mobile | < 640px | 1 coluna, nav compacta, grid 1x4 |
| Tablet | 640px–1024px | 2 colunas, nav expandida, grid 2x2 |
| Desktop | > 1024px | Multi-coluna, nav completo, grid flexível |

Testado em Chrome, Firefox, Safari (mobile + desktop).

---

## 🔄 Atualizar Questões

Para adicionar ou modificar questões do quiz:

1. Abra `site/data/questions.js`
2. Localize o array `QUESTIONS.{nivel}`
3. Adicione nova questão com formato padrão:
   ```javascript
   {
     id: 61,
     question: "Nova pergunta?",
     options: ["A", "B", "C", "D"],
     correct: 0,
     explanation: "Por quê?",
     topic: "Tópico"
   }
   ```
4. Salve e recarregue `quiz.html` no browser

Não é necessário fazer build ou deploy — mudanças são imediatas.

---

## 📋 Licença

- **Código:** MIT License
- **Conteúdo Didático:** CC BY 4.0

Veja `LICENSE` e `LICENSE_CC.md` no diretório raiz.

---

## 👨‍🏫 Contato

**Prof. Hans Rogério Zimermann**  
Email: hans@ufsm.br  
UFSM — Departamento de Física  
Centro de Ciências Naturais e Exatas

---

**Última atualização:** Abril de 2026  
**Versão:** 1.0
