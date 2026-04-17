# 🚀 QuickStart — Portal FSC1189

## Como Acessar o Portal

### Opção 1: No seu computador (local)

```bash
# Navegue até a pasta do portal
cd site/

# Abra um dos arquivos em seu navegador:
# - Windows: Duplo clique em index.html
# - Mac: Abra com Finder e drag-drop em um navegador
# - Linux: firefox index.html (ou chrome index.html)
```

**Ou use um servidor local:**

```bash
# Se tem Python instalado:
python -m http.server 8000

# Depois abra: http://localhost:8000
```

### Opção 2: Caminhos Diretos

| Página | URL Local |
|---|---|
| **Portal** | `file:///home/hans/pCloudDrive/Public Folder/obsidian/atividades-academicas/aulas/fsc1189/colab_notebooks/site/index.html` |
| **Quiz** | `file:///home/hans/pCloudDrive/Public Folder/obsidian/atividades-academicas/aulas/fsc1189/colab_notebooks/site/quiz.html` |
| **FAQ** | `file:///home/hans/pCloudDrive/Public Folder/obsidian/atividades-academicas/aulas/fsc1189/colab_notebooks/site/faq.html` |

---

## 📍 O que você vai ver

### 1. **index.html** — Página Principal
```
┌─────────────────────────────────────────────┐
│  Navegação flutuante (Quiz | FAQ | Voltar)  │
├─────────────────────────────────────────────┤
│                                             │
│  🎓 FSC1189: Algoritmos & Programação      │
│     10 Capítulos | 6 Notebooks | 7 Listas   │
│                                             │
│  [Acessar QuizAlgo] [Ver FAQ]               │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  Recursos:                                  │
│  📖 Apostila  💻 Notebooks  📝 Listas 🧠 Quiz│
│                                             │
│  Perguntas Frequentes (Preview)             │
│                                             │
│  [Teste seus Conhecimentos Agora!]          │
└─────────────────────────────────────────────┘
```

### 2. **quiz.html** — QuizAlgo SPA

**Tela 1 — Escolher Dificuldade:**
```
┌─────────────────────────────────────┐
│  QuizAlgo                           │
│  Teste seus conhecimentos!          │
│                                     │
│  🟢 Básico        🔵 Intermediário   │
│  🟠 Avançado      ⚫ Ninja           │
└─────────────────────────────────────┘
```

**Tela 2 — Responder Perguntas:**
```
┌─────────────────────────────────────┐
│  Questão 1 de 10  🟢 Básico         │
│  ▓▓▓░░░░░░░░░░░░░░ 10%             │
├─────────────────────────────────────┤
│                                     │
│  O que é um algoritmo?              │
│                                     │
│  ☐ Uma linguagem de programação     │
│  ☐ Uma sequência de instruções ✓   │
│  ☐ Um tipo de variável              │
│  ☐ Um método numérico               │
│                                     │
│  ✓ Correto!                         │
│  Explicação: ...                    │
│                                     │
│  [Próxima Questão]                  │
└─────────────────────────────────────┘
```

**Tela 3 — Resultado:**
```
┌─────────────────────────────────────┐
│           ⭕                         │
│          90%                         │
│                                     │
│  🎉 Excelente!                      │
│  Você domina muito bem este assunto!│
│                                     │
│  9/10 corretas                      │
│                                     │
│  [Tentar Novamente] [Mudar Nível]  │
│  [Ver FAQ]                          │
└─────────────────────────────────────┘
```

### 3. **faq.html** — Perguntas Frequentes

```
┌─────────────────────────────────────┐
│  Perguntas Frequentes                │
│                                      │
│  ▼ Conceitos Gerais                  │
│    ▶ O que é um algoritmo?           │
│    ▶ Diferença entre... código?      │
│                                      │
│  ▼ Módulo 1: Fundamentos             │
│    ▼ O que é um fluxograma?          │
│      [Resposta aberta]               │
│    ▶ Como fazer validação?           │
│                                      │
│  ... [mais seções]                   │
└─────────────────────────────────────┘
```

---

## 🎮 Navegação Rápida

### No Portal (index.html)
- Click **"Acessar QuizAlgo"** → vai para quiz.html
- Click **"Ver FAQ"** → vai para faq.html
- Click **cards de recursos** → abre apostila, notebooks, etc. (em nova aba)

### No Quiz (quiz.html)
- Escolha dificuldade → começa quiz com 10 questões aleatórias
- Clique em uma opção → feedback imediato (verde/vermelho)
- **"Próxima Questão"** → avança
- Ao final → vê score e pode tentar novamente ou mudar nível

### Na FAQ (faq.html)
- Click em qualquer **"▼"** para expandir/retrair seção
- Scroll para ver mais perguntas
- Links internos para Quiz e Portal
- Acordeom nativo (sem necessidade de JS)

---

## ❓ Dúvidas Comuns

### P: As perguntas do quiz aparecem em ordem aleatória?
**R:** Sim! A cada tentativa, as questões são embaralhadas (Fisher-Yates). Também as opções são reordenadas para evitar memorização de posições.

### P: O quiz funciona sem internet?
**R:** Totalmente! O portal é 100% estático. Funciona offline em `file://` ou com qualquer servidor local.

### P: Posso adicionar mais perguntas?
**R:** Sim! Edite `site/data/questions.js` e adicione novas questões no formato padrão. Não precisa recompilação — mudanças são imediatas.

### P: Como funciona a barra de progresso?
**R:** A barra preenche proporcionalmente: `(pergunta_atual / total) * 100%`. Usa gradiente de cores: verde (básico) → azul (intermediário) → laranja (avançado) → preto (ninja).

### P: O score é sempre baseado em 10 questões?
**R:** Sim, cada tentativa tem 10 questões aleatórias do nível escolhido. Score = (corretas / 10) * 100.

### P: Posso mudar de nível sem terminar o quiz?
**R:** Não diretamente. Mas na tela de resultado você tem o botão **"Mudar Dificuldade"** que volta à seleção de níveis.

---

## 🎨 Personalização

### Mudar cores

Edite `quiz.html` ou `index.html`. Procure por classes Tailwind como:
```html
<!-- Exemplo: mudar cor do botão Básico -->
<button ... class="bg-green-500 ...">  <!-- Mude para bg-blue-400, etc -->
```

Cores disponíveis no Tailwind:
- `bg-green-500`, `bg-blue-500`, `bg-orange-500`, `bg-cyan-500`, `bg-slate-900`, etc.

### Adicionar mais níveis

1. Edite `site/data/questions.js`:
   ```javascript
   const QUESTIONS = {
     basico: [...],
     intermediario: [...],
     avancado: [...],
     ninja: [...],
     megaavancado: [/* novas questões */]  // ← Adicione aqui
   };
   ```

2. Edite `quiz.html`, procure por `levelConfig`:
   ```javascript
   const levelConfig = {
     basico: { ... },
     megaavancado: { color: 'bg-purple-500', badge: '💜 Mega Avançado', count: 10 }
   };
   ```

3. Adicione novo botão no HTML:
   ```html
   <button onclick="startQuiz('megaavancado')" class="...">
     💜 Mega Avançado
   </button>
   ```

---

## 📊 Estatísticas

| Métrica | Valor |
|---|---|
| Total de questões | 60 |
| Questões por nível | 15 cada |
| Questões por tentativa | 10 (aleatória) |
| Tamanho do index.html | ~16 KB |
| Tamanho do quiz.html | ~20 KB |
| Tamanho do faq.html | ~20 KB |
| Tamanho de questions.js | ~30 KB |
| **Total** | ~86 KB (comprimido) |

---

## 🔗 Links Importantes

- **Apostila completa:** `../APOSTILA_ALGORITMOS_PROGRAMACAO.md`
- **Notebooks:** `../01_Conceitos_Basicos.ipynb`, etc.
- **Listas:** `../listas/L01_Algoritmos_Logica.md`, etc.
- **Plano de Ensino:** `../PLANO_DE_ENSINO_16_SEMANAS.md`
- **FAQ completo:** `faq.html`
- **Documentação técnica:** `README.md`

---

## 💡 Dicas

1. **Use modo escuro do navegador** — as cores ficam melhor
2. **Teste em mobile** — a responsividade funciona bem em telefones
3. **Navegue com teclado** — Tab e Enter funcionam em botões
4. **Abra links em nova aba** — Ctrl+Click em recursos externos

---

## 🆘 Suporte

Encontrou um bug? Tem sugestão?

📧 **Contato:** hans@ufsm.br

---

**Versão:** 1.0 — Abril 2026  
**Última atualização:** 2026-04-16
