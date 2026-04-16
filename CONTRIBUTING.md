# Contribuindo para Algoritmos e Programação para Física

Agradecemos interesse em contribuir! Este projeto é voltado para educação e toda contribuição é bem-vinda.

## 📋 Diretrizes de Contribuição

### Tipos de Contribuição

- **Correções de erros:** Typos, erros matemáticos, bugs no código
- **Melhorias:** Explicações mais claras, novos exemplos, visualizações
- **Novas funcionalidades:** Novos capítulos, exercícios, notebooks
- **Documentação:** Melhorias na clareza e cobertura
- **Tradução:** Adaptar para outras línguas

### Como Contribuir

1. **Fork** o repositório
2. **Clone** seu fork: `git clone https://github.com/seu-usuario/algoritmos-programacao-fisica.git`
3. **Crie uma branch**: `git checkout -b feature/sua-contribuicao`
4. **Faça suas mudanças** (veja detalhes abaixo)
5. **Commit**: `git commit -m "Descrição clara da mudança"`
6. **Push**: `git push origin feature/sua-contribuicao`
7. **Abra um Pull Request** com descrição detalhada

### Diretrizes de Código

#### Para Português Estruturado (VisualG)

```portugol
// ✓ BOM: Código claro e bem comentado
funcao CalcularEnergia(massa: real, velocidade: real): real
var
   energia: real
inicio
   // Energia cinética = (1/2) * m * v²
   energia <- 0.5 * massa * velocidade * velocidade
   retorne energia
fimfuncao

// ✗ RUIM: Falta clareza
f <- 0.5 * m * v * v
```

#### Para Python

```python
# ✓ BOM: Segue PEP 8, bem documentado
def calcular_energia_cinetica(massa: float, velocidade: float) -> float:
    """
    Calcula a energia cinética de um objeto.
    
    Args:
        massa: massa em kg
        velocidade: velocidade em m/s
    
    Returns:
        float: energia cinética em joules
    
    Examples:
        >>> calcular_energia_cinetica(5.0, 10.0)
        250.0
    """
    return 0.5 * massa * velocidade ** 2

# ✗ RUIM: Falta documentação
def ec(m, v):
    return 0.5 * m * v ** 2
```

### Diretrizes para Markdown

- Use `#` para títulos (máximo 3 níveis na apostila)
- Indente código com 4 espaços ou ` ``` `
- Use **negrito** para conceitos importantes
- Use `$...$` para fórmulas inline e `$$...$$` para display em MathJax
- Mantenha linhas com menos de 100 caracteres

**Exemplo:**

```markdown
### Conceito Importante

Use a fórmula $E = mc^2$ para calcular energia. Para cálculos mais complexos:

$$\int_0^{2\pi} \sin(x) dx = 2$$

**Nota importante:** Sempre valide seus cálculos!
```

### Diretrizes para Jupyter Notebooks

1. **Estrutura:**
   - Título e descrição no início
   - Imports no topo
   - Markdown explicativo antes do código
   - Uma ideia por célula

2. **Comentários:**
   - Código bem comentado
   - Explicações em Markdown
   - Resultados interpretados

3. **Execução:**
   - Teste o notebook antes de submeter
   - Todos os outputs devem estar presentes
   - Limpe `Out[*]` numbers se editado manualmente

### Diretrizes para Fórmulas Matemáticas

```markdown
✓ BOM:
Energia cinética: $E_c = \frac{1}{2}mv^2$

Altura máxima:
$$H = \frac{v_0^2 \sin^2(\theta)}{2g}$$

✗ RUIM:
Ec = (1/2) * m * v^2
H = (v0^2 * sin²(θ)) / (2*g)
```

## 📝 Padrão de Commit

```
tipo(escopo): descrição breve

Descrição detalhada se necessário (máx 72 caracteres por linha)

Fixes #123 (se aplicável)
```

### Tipos de Commit

- `docs`: Documentação
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `refactor`: Refatoração de código
- `style`: Formatação
- `test`: Testes
- `chore`: Tarefas administrativas

### Exemplos

```
feat(cap-8): adicionar método de Newton-Raphson

docs(readme): esclarecer instalação de dependências

fix(notebook-02): corrigir erro na fórmula de produto escalar

refactor(apostila): melhorar estrutura do capítulo 5
```

## 🔍 Revisão de Pull Request

### O que analisamos

- ✅ Clareza e correção do conteúdo
- ✅ Conformidade com diretrizes
- ✅ Fórmulas matemáticas corretas
- ✅ Código executável e testado
- ✅ Documentação apropriada
- ✅ Sem mudanças desnecessárias

### Feedback

- Seremos construtivos e educados
- Explicitaremos o raciocínio
- Sugeriremos melhorias quando necessário
- Respeitaremos seu tempo

## ❓ Perguntas Frequentes

**P: Posso traduzir para outro idioma?**
R: Sim! Crie um diretório separado (ex: `/en/`, `/es/`)

**P: Posso adicionar um novo capítulo?**
R: Sim, mas coordene conosco primeiro via issue

**P: E se descobrir um erro?**
R: Abra uma issue descrevendo claramente o erro com exemplos

**P: Quanto tempo leva para review?**
R: Tentamos responder em até 1 semana

## 📞 Dúvidas?

- **Issues**: Para bugs, erros ou perguntas
- **Discussions**: Para ideias e discussões
- **Email**: Acesse os detalhes do projeto

## 🙏 Agradecimentos

Toda contribuição é valiosa e apreciada! Você será creditado apropriadamente.

---

**Obrigado por melhorar este projeto! 🌟**

*Lembre-se: Este é um projeto educacional. Priorize clareza e qualidade pedagógica.*
