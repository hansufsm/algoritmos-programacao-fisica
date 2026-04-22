# Algoritmos e Programação para Licenciatura em Física

**Disciplina:** FSC1189 - Algoritmo e Programação  
**Professor:** Prof. Hans Rogério Zimermann  
**Instituição:** Universidade Federal de Santa Maria (UFSM)  
**Centro:** Centro de Ciências Naturais e Exatas (CCNE)  
**Departamento:** Departamento de Física  
**Semestre:** 2026/1  
**Carga Horária:** 60 horas (16 semanas)  

---

## 📜 Licença e Atribuição

Este repositório utiliza **dupla licença**:

| Material | Licença | Observações |
|---|---|---|
| **Código-fonte** (notebooks `.ipynb`, scripts Python) | [MIT License](LICENSE) | Implementações, algoritmos, exercícios resolvidos |
| **Conteúdo Didático** (apostila, listas, guias) | [CC BY 4.0](LICENSE_CC.md) | Apostila, GUIA_DEBUGGING, Plano de Ensino, Listas |

**Atribuição:** Prof. Hans Rogério Zimermann, UFSM, 2026

Para mais detalhes, consulte [LICENSE](LICENSE) (MIT) e [LICENSE_CC.md](LICENSE_CC.md) (Creative Commons).

---

## 📚 Recursos Disponíveis

Este material completo fornece uma formação em Algoritmos e Programação orientada para licenciandos em Física, com ênfase em aplicações práticas e contextualizadas na disciplina.

### 1. **APOSTILA_ALGORITMOS_PROGRAMACAO.md**

**Formato:** Markdown (90 páginas)  
**Conteúdo:** 10 capítulos didáticos cobrindo:

- Capítulo 1: Introdução a Algoritmos
- Capítulo 2: Lógica de Programação
- Capítulo 3: Variáveis e Tipos de Dados
- Capítulo 4: Estruturas de Controle
- Capítulo 5: Estruturas de Repetição
- Capítulo 6: Vetores e Matrizes
- Capítulo 7: Funções e Procedimentos
- Capítulo 8: Métodos Numéricos em Física
- Capítulo 9: Tratamento de Dados e Visualização
- Capítulo 10: Projetos Integrados em Física

**Características:**
- ✅ Exemplos em **Português Estruturado (Portugol)** para VisualG
- ✅ Fórmulas em **MathJax** para melhor visualização matemática
- ✅ Contextualizações com fenômenos físicos reais
- ✅ Tom técnico e profissional
- ✅ Orientado para alunos com base em cálculo e física

**Como usar:**
1. Leia a apostila sequencialmente
2. Execute os exemplos em VisualG (disponível gratuitamente)
3. Compare com as implementações em Python nos notebooks

---

### 2. **01_Conceitos_Basicos.ipynb**

**Jupyter Notebook** com exercícios dos Capítulos 1-3

**Exercícios inclusos:**
- 1.1: Cálculo de Trajetória de Projétil
  - Resolução analítica
  - Código Python com NumPy
  - Visualização da trajetória

- 2.1: Análise de Movimento com Operadores Lógicos
  - Classificação automática de movimentos
  - Tabelas de teste

- 3.1: Validação de Dados Experimentais
  - Verificação de medidas dentro de tolerância
  - Gráficos de validação

- 3.2: Conversor de Temperatura
  - Funções reutilizáveis
  - Múltiplas conversões

**Exercícios Propostos:**
- Energia Potencial Gravitacional
- Lei de Coulomb

**Como usar:**
```bash
# Abrir em Jupyter Notebook
jupyter notebook notebooks/01_Conceitos_Basicos.ipynb

# Ou em Google Colab
# Faça upload do arquivo e execute
```

---

### 3. **02_Estruturas_Controle_Repeticao.ipynb**

**Jupyter Notebook** com exercícios dos Capítulos 4-6

**Exercícios inclusos:**
- 4.1: Classificação de Estados de Matéria
  - Estruturas condicionais
  - Funções com retorno

- 5.1: Tabela de Queda Livre
  - Loops com range
  - Uso de pandas
  - Gráficos com matplotlib

- 5.2: Série de Leibniz para π
  - While loops
  - Análise de convergência
  - Gráficos de convergência

- 6.1: Produto Escalar
  - Operações com vetores
  - Casos de teste

- 6.2: Matriz de Coordenadas
  - Matrizes NumPy
  - Visualização 3D

**Exercícios Propostos:**
- Validação Repetida de Entrada
- Soma de Vetores

**Notas Importantes:**
- Usa bibliotecas: NumPy, Pandas, Matplotlib
- Visualizações profissionais
- Análise de erros e convergência

---

### 4. **03_Metodos_Numericos_Projetos.ipynb**

**Jupyter Notebook** com exercícios dos Capítulos 7-10

**Exercícios inclusos:**
- 7.1: Módulo de Funções Físicas
  - Cálculo de energias (cinética, potencial, mecânica)
  - Cálculo de trabalho

- 8.1: Método da Bisseção
  - Encontrar raízes de equações
  - Análise de convergência

- 8.2: Diferenciação Numérica
  - Diferenças finitas
  - Comparação de métodos
  - Análise de precisão

- 8.3: Integração Numérica
  - Regra do Trapézio
  - Convergência do método

- 10.1: Projeto - Análise de Pêndulo Simples
  - Dados experimentais
  - Regressão linear
  - Estimação de g

- 10.2: Projeto - Queda com Arrasto
  - Equações diferenciais
  - Simulação numérica
  - Velocidade terminal

**Exercícios Propostos:**
- Lei de Coulomb Numérica
- Oscilador Harmônico Amortecido

**Bibliotecas usadas:**
- NumPy, Pandas, Matplotlib
- SciPy (odeint, fsolve)
- Visualização 3D

---

## 🎯 Cronograma 16 Semanas — Estrutura Pedagógica

### **Módulo 1: Fundamentos (Semanas 1-4)**
| Semana | Capítulos | Atividades | Avaliação |
|---|---|---|---|
| 1-2 | 1-3 | Lab em VisualG; trajetória de projétil | — |
| 3 | 3-4 | SE-SENÃO; validação de dados | — |
| 4 | 4 | Revisão; exercícios integrados | **P1** |

### **Módulo 2: Iteração e Dados (Semanas 5-8)**
| Semana | Capítulos | Atividades | Avaliação |
|---|---|---|---|
| 5 | 5 | Loops PARA; tabelas de queda livre | — |
| 6 | 5 | ENQUANTO; série de Leibniz; convergência | **Lista 3** |
| 7 | 6 | Vetores; produto escalar; visualização 3D | — |
| 8 | 5-6 | Revisão módulo 2 | **P2** |

### **Módulo 3: Métodos Numéricos (Semanas 9-12)**
| Semana | Capítulos | Atividades | Avaliação |
|---|---|---|---|
| 9 | 7 | Funções; escopo; módulos | — |
| 10 | 8 | Bisseção; diferenciação numérica | **Lista 5** |
| 11 | 8 | Euler; integração numérica; circuito RC | **P3** |
| 12 | 9 | Análise estatística; regressão linear | **Projeto 1** |

### **Módulo 4: Aplicações Avançadas (Semanas 13-16)**
| Semana | Capítulos | Atividades | Avaliação |
|---|---|---|---|
| 13 | 10 | Simulação dinâmica; pêndulo | — |
| 14 | 10 | Big-O empírico; oscilador amortecido | **Lista 7** |
| 15 | 10 | Projeto Capstone integrado | **Projeto 2** |
| 16 | 1-10 | Revisão geral | **Prova Final** |

**Consulte [PLANO_DE_ENSINO_16_SEMANAS.md](docs/PLANO_DE_ENSINO_16_SEMANAS.md) para cronograma detalhado.**

---

## 🛠️ Requisitos Técnicos

### **Para Português Estruturado:**
- **VisualG** (gratuito)
  - Download: https://www.visualg.com.br
  - Compatível com Windows, Linux, macOS

### **Para Python/Jupyter:**
```bash
# Instalar dependências
pip install numpy pandas matplotlib scipy jupyter

# Ou usar Anaconda (recomendado)
conda install numpy pandas matplotlib scipy jupyter

# Ou usar Google Colab (sem instalação)
# https://colab.research.google.com
```

---

## 📖 Como Usar os Notebooks

### **Opção 1: Localmente com Jupyter**
```bash
jupyter notebook notebooks/01_Conceitos_Basicos.ipynb
```

### **Opção 2: Google Colab**
1. Acesse https://colab.research.google.com
2. Clique em "Arquivo" → "Abrir notebook"
3. Selecione a guia "Upload"
4. Faça upload do arquivo .ipynb

### **Opção 3: VS Code com Jupyter Extension**
1. Instale a extensão Jupyter no VS Code
2. Abra o arquivo .ipynb
3. Execute as células

---

## 💡 Dicas de Estudo

### **Para Aprender Programação:**

1. **Estude o conceito primeiro**: Leia a apostila
2. **Veja exemplos**: Execute os códigos em VisualG
3. **Compare linguagens**: Veja a mesma solução em Python
4. **Experimente**: Modifique os códigos e observe o resultado
5. **Pratique**: Solva os exercícios propostos

### **Para Entender Métodos Numéricos:**

1. **Estude a matemática**: Entenda a fórmula e a derivação
2. **Implemente do zero**: Não apenas copie
3. **Teste convergência**: Varie parâmetros
4. **Visualize**: Use gráficos para entender o comportamento

### **Para Aplicações em Física:**

1. **Resgate conceitos físicos**: De cálculo e mecânica
2. **Valide resultados**: Compare com soluções analíticas
3. **Use dados reais**: Quando possível
4. **Analise erros**: Entenda fontes de erro

---

## 📊 Recursos Adicionais

### **Para Aprofundamento:**

- **PortalFísica**: https://www.portalfisica.com
  - Recursos didáticos em Física
  - Problemas e simulações
  
- **NumPy Documentation**: https://numpy.org/doc/
  - Referência completa
  - Tutoriais
  
- **SciPy Documentation**: https://docs.scipy.org/
  - Métodos numéricos avançados
  - Otimização e integração

### **Livros Recomendados:**

1. **"Numerical Methods for Physics and Engineering"** - Guazzelli & Luca
2. **"Python for Data Analysis"** - Wes McKinney
3. **"Introduction to Scientific Computing"** - Marcus Recktenwald

---

## 🚀 Próximos Passos

Após completar este material, você estará preparado para:

1. ✅ Implementar algoritmos em múltiplas linguagens
2. ✅ Resolver problemas físicos numericamente
3. ✅ Analisar e visualizar dados experimentais
4. ✅ Usar programação como ferramenta de pesquisa
5. ✅ Comunicar resultados com clareza

### **Sugestões de Projetos Independentes:**

1. **Simulação de Sistema Solar**
   - Integração numérica de órbitas
   - Visualização 3D
   - Conservação de energia

2. **Análise de Dados Experimentais**
   - Ajuste de curvas
   - Estimação de parâmetros
   - Análise de incertezas

3. **Simulação de Dinâmica Molecular**
   - Potencial de Lennard-Jones
   - Integração de trajetórias
   - Propriedades termodinâmicas

4. **Processamento de Imagens em Física**
   - Análise de microscopia
   - Detecção de características
   - Quantificação

---

## 📞 Suporte e Dúvidas

Para dúvidas sobre:

- **Conceitos de Programação**: Consulte os notebooks com exercícios resolvidos
- **Sintaxe Portugol/VisualG**: Revise os exemplos na apostila
- **Métodos Numéricos**: Estude os notebooks 03 com análise detalhada
- **Aplicações Físicas**: Relacione com conceitos de cálculo e mecânica

---

## 📝 Licença e Atribuição

Este material foi desenvolvido para fins educacionais na Universidade Federal de Santa Maria.

**Recomendações:**
- Use e compartilhe livremente
- Cite a fonte apropriadamente
- Contribua com melhorias e correções

---

## ✅ Checklist de Aprendizado

Ao completar este material, você deve ser capaz de:

- [ ] Entender o conceito de algoritmo e sua importância
- [ ] Escrever e compreender pseudocódigo
- [ ] Implementar código em Português Estruturado
- [ ] Usar estruturas de controle efetivamente
- [ ] Trabalhar com vetores e matrizes
- [ ] Criar e usar funções reutilizáveis
- [ ] Implementar métodos numéricos básicos
- [ ] Resolver equações numericamente
- [ ] Integrar e diferenciar numericamente
- [ ] Analisar dados experimentais
- [ ] Visualizar dados com gráficos
- [ ] Simular sistemas físicos
- [ ] Validar e comparar resultados

---

**Última atualização:** Abril de 2026  
**Versão:** 1.0
