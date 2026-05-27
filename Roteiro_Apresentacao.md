# Roteiro de Apresentação Acadêmica - Staggi 🚀

Este roteiro foi elaborado para guiar uma apresentação de **15 minutos** conduzida por **3 alunos**, divididos igualmente em blocos de **5 minutos**. O objetivo é demonstrar com fluidez a usabilidade das telas e a qualidade técnica do código fonte, atendendo a todos os requisitos pedagógicos do edital.

---

## 👥 Resumo de Divisão do Tempo e Papéis

| Aluno | Tempo | Foco de Interface (UI) | Foco de Código |
| :--- | :--- | :--- | :--- |
| **Aluno 1** | **00:00 - 05:00** | Domínio do Negócio, Home 🏠 e Estágios 🎓 | `App.jsx` (Rotas, State Global, `dados.json`) |
| **Aluno 2** | **05:00 - 10:00** | Catálogo Split-Screen de Empresas 🏢 | `Empresas.jsx` (Layout, Object-Fit, Imagens) |
| **Aluno 3** | **10:00 - 15:00** | Minha Área ⭐ e Tabela CRUD de Alunos 👥 | `MinhaArea.jsx` e `Candidatos.jsx` (Tabela & CRUD) |

---

## 🎤 Aluno 1: Introdução, Arquitetura e Vagas (00:00 - 05:00)

### 1. Discurso de Abertura (1 minuto)
* **O que falar:** 
  > *"Boa noite a todos e ao professor. Nosso grupo desenvolveu o **Staggi**, uma plataforma de conexão de estágios para estudantes. O domínio do projeto engloba quatro entidades fundamentais de negócio: Vagas de Estágio, Empresas Parceiras, Candidatos (estudantes) e Candidaturas. Desenvolvemos o projeto como uma Single Page Application em React, focando em uma experiência de usuário rica, design moderno com HSL customizado e alta reatividade."*
* **Ação na Tela:** Projetar a tela inicial (**Home 🏠**) do site Staggi e navegar suavemente pelo cabeçalho.

### 2. Demonstração de Funcionalidades (2 minutos)
* **O que falar:** 
  > *"Aqui na Home, temos indicadores reativos das nossas entidades e um filtro dinâmico de vagas por áreas (como Tecnologia ou Design). Ao clicar em uma vaga, o aluno pode favoritá-la no ícone do coração ou se inscrever em tempo real através do botão 'Candidatar-se'. Essa interatividade se estende para a página 'Estágios 🎓', onde listamos todas as vagas e temos as opções de favoritar, se candidatar, excluir ou editar vagas."*
* **Ação na Tela:**
  1. Clicar nas categorias na Home (ex: Tecnologia) para ver o filtro de vagas em ação.
  2. Favoritar uma vaga (coração muda de 🤍 para ❤️) e clicar em "Candidatar-se" (muda para "✓ Candidatado").
  3. Navegar para a página **Estágios 🎓** para mostrar as mesmas reatividades aplicadas.

### 3. Exposição de Código (2 minutos)
* **O que mostrar:** Arquivo `src/App.jsx`
* **Funções/Linhas em Destaque:** 
  * Importação dos dados iniciais do JSON (`import dadosIniciais from './dados.json'`).
  * Estados centrais da aplicação: `const [vagas, setVagas] = useState(...)` e `const [favoritos, setFavoritos] = useState([1])`.
  * Roteamento com `<Router>`, `<Routes>` e `<Route>` passando states e callbacks por *props*.
* **Explicação Didática:**
  > *"O coração do Staggi reside no `App.jsx`. Para atender ao requisito de SPA e carregamento dinâmico de dados, nós carregamos a base inicial de dados diretamente de um arquivo JSON (`dados.json`) para dentro de estados (states) do React via `useState`. Dessa forma, qualquer alteração que fizermos, como adicionar uma vaga ou alterar um cadastro de aluno, persiste em memória enquanto o usuário navega. Além disso, as ações de favoritar e candidatar-se são controladas por funções reativas globais aqui no App e repassadas para as páginas através de 'props', sincronizando o estado de forma integrada em toda a plataforma."*

---

## 🎤 Aluno 2: Empresas e Carregamento Dinâmico de Imagens (05:00 - 10:00)

### 1. Demonstração de Funcionalidades (2.5 minutos)
* **O que falar:** 
  > *"Agora navegaremos para o menu 'Empresas 🏢'. Para esta tela, criamos um layout split-screen de duas colunas, inspirado nas melhores plataformas corporativas atuais. Na coluna esquerda, listamos todas as organizações parceiras com um selo do setor e o número exato de vagas ativas que elas possuem em tempo real. Ao clicar em uma empresa, o painel direito é atualizado instantaneamente exibindo dados estruturados de Localização, Tamanho da Organização e a fachada real de seu prédio comercial."*
* **Ação na Tela:**
  1. Clicar no menu **Empresas 🏢**.
  2. Alternar entre as empresas na esquerda (Tech Corp, Saúde Plus, etc.) observando os dados mudando instantaneamente na direita.
  3. Apontar para a fachada do prédio que muda de acordo com a seleção e para la listagem inferior de vagas publicadas exclusivas daquela empresa.

### 2. Exposição de Código (2.5 minutos)
* **O que mostrar:** Arquivo `src/pages/Empresas.jsx`
* **Funções/Linhas em Destaque:**
  * Função helper de carregamento de imagens `getEmpresaImagem(id)`.
  * Filtro de vagas associadas à empresa selecionada: `vagas.filter(v => v.id_empresa === empresaSelecionada.id)`.
  * Tag `<img>` da fachada e seu objeto de estilos inline contendo a propriedade `objectFit: 'cover'`.
* **Explicação Didática:**
  > *"No arquivo `Empresas.jsx`, implementamos duas técnicas cruciais para a qualidade visual e conformidade do edital. Primeiro, a função `getEmpresaImagem` lê de forma dinâmica os arquivos do nosso repositório de imagens físico na pasta `/imagens`. Para que fotos de dimensões e orientações completamente diferentes não quebrassem a estrutura do nosso layout premium, utilizamos a propriedade CSS `objectFit: 'cover'` na nossa tag `<img>`. Isso instrui o navegador a redimensionar a imagem de modo a preencher uniformemente o espaço reservado de 240px de altura, recortando o excesso de forma responsiva e suave, sem distorcer o aspecto do prédio. Além disso, filtramos de forma puramente declarativa as vagas que pertencem àquela empresa ativa usando a correspondência do ID."*

---

## 🎤 Aluno 3: Perfil Pessoal (Minha Área) e CRUD de Alunos (10:00 - 15:00)

### 1. Demonstração de Funcionalidades (2.5 minutos)
* **O que falar:** 
  > *"Por fim, exploramos a área do candidato e a tabela administrativa. No menu 'Minha Área ⭐', o estudante ativo (João Silva) gerencia seu perfil pessoal. Podemos editar suas competências, e-mail e bio com formulário reativo. Há também dois indicadores de estatísticas em tempo real integrados com as abas de 'Favoritos' (que exibe os estágios que o Aluno 1 favoritou anteriormente) e 'Minhas Candidaturas' (onde é possível cancelar a inscrição a qualquer momento). 
  > Já no menu 'Alunos 👥', temos a tabela administrativa padrão exigida no projeto. Ela exibe todos os registros de estudantes cadastrados em formato tabular clássico, permitindo cadastrar novos alunos, excluir e realizar a alteração de qualquer campo diretamente na linha."*
* **Ação na Tela:**
  1. Ir para **Minha Área ⭐**, clicar em *"✏️ Editar Perfil"*, mudar as competências ou a Bio e clicar em *"Salvar"*.
  2. Alternar entre as abas e remover uma vaga dos favoritos (clicando na lixeira) e cancelar uma candidatura (clicando em "Cancelar").
  3. Navegar para **Alunos 👥**. Adicionar um novo aluno no formulário. 
  4. Clicar em *"✏️ Editar"* em um aluno na tabela, mudar o seu e-mail no formulário superior que se ativa, clicar em *"Salvar Alterações"* e ver a linha da tabela ser atualizada. Clicar no botão da lixeira para excluir um registro.

### 2. Exposição de Código (2.5 minutos)
* **O que mostrar:** Arquivo `src/pages/Candidatos.jsx`
* **Funções/Linhas em Destaque:**
  * Estado de controle de edição `const [editingId, setEditingId] = useState(null)`.
  * Função unificada de submissão do formulário `handleSubmit` (gerenciando adição vs. edição).
  * Estrutura HTML da tabela clássica `<table>` com o mapeamento dinâmico de `candidatos.map()`.
* **Explicação Didática:**
  > *"No arquivo `Candidatos.jsx`, implementamos o ciclo completo de CRUD em uma tabela HTML convencional. Para que a alteração (Update) funcionasse de forma harmônica na mesma tela, criamos o estado `editingId`. Quando o usuário clica no botão 'Editar' em uma linha da tabela, a função `handleEditar` define esse ID e preenche as inputs do formulário com os dados atuais. Ao submeter, a função `handleSubmit` verifica se há um `editingId` ativo: se houver, ela mapeia o vetor de candidatos e altera os dados do ID correspondente através da reatividade do `setCandidatos`; caso contrário, calcula o maior ID sequencial e realiza o cadastro de um novo aluno. Toda a renderização da tabela é atualizada de forma instantânea pelo React de forma limpa e otimizada."*

### 3. Discurso de Encerramento (30 segundos)
* **O que falar:** 
  > *"Com isso, cobrimos todos os requisitos teóricos e práticos de desenvolvimento front-end com React, demonstrando componentização, fluxo reativo de dados por estados e props, carregamento dinâmico de arquivos JSON, imagens responsivas e tabelas administrativas funcionais. Agradecemos a atenção de todos e estamos abertos a perguntas!"*

---

## 💡 Dicas de Sucesso para a Apresentação
1. **Ambiente Local Estável:** Garanta que a aplicação esteja rodando localmente no navegador em [http://localhost:3000](http://localhost:3000) de antemão. Não dependa da internet da faculdade durante os slides.
2. **Abas do Editor Prontas:** Deixe os três arquivos de código (`src/App.jsx`, `src/pages/Empresas.jsx` e `src/pages/Candidatos.jsx`) abertos no VS Code em abas vizinhas para agilizar a transição e evitar cliques desnecessários.
3. **Mantenha a Calma e a Postura:** Ensaiem a passagem de fala um para o outro ("Passo agora a palavra para o meu colega Aluno 2...") para dar ritmo profissional à apresentação.
