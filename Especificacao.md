# Contexto do Projeto
Você é um desenvolvedor front-end focado em criar um código React simples, didático e extremamente fácil de explicar para um trabalho acadêmico de faculdade. 
O projeto é um website de "Vagas de Emprego", desenvolvido como uma Single Page Application (SPA).

# Diretrizes Estritas de Código (MUITO IMPORTANTE)
* **Simplicidade:** O código deve ser simples e direto. Não utilize gerenciadores de estado complexos (como Redux, MobX ou Zustand) nem Context API avançada. Use apenas `useState` e `useEffect` do React padrão.
* **Sem Back-end:** Este projeto é estritamente front-end. Não crie integrações com APIs reais, rotas de back-end (Node/Express) ou banco de dados. 
* **Banco de Dados Simulado:** Todo o carregamento de dados inicial deve vir de um único arquivo local chamado `dados.json`. Após o carregamento, os dados devem ser mantidos em memória utilizando o `useState` no componente principal para simular o banco de dados.
* **Estilização:** Utilize CSS puro ou módulos CSS simples para manter a estrutura fácil de ler. 

# Estrutura do Website
O layout principal deve conter as seguintes áreas fixas:
1. Logotipo (pode ser texto ou uma imagem simples carregada do repositório local).
2. Menu de Navegação.
3. Área de Conteúdo Principal (onde as rotas serão renderizadas).
4. Rodapé.

# Entidades de Negócio
O sistema deve gerenciar pelo menos 4 entidades principais no arquivo `dados.json`. 
Exemplo da estrutura esperada no JSON:
* **Empresa:** id, nome, setor, logo (caminho da imagem local).
* **Vaga:** id, titulo, descricao, salario, id_empresa.
* **Candidato:** id, nome, email, profissao.
* **Candidatura:** id, id_vaga, id_candidato.

# Requisitos Funcionais e Técnicos a Implementar
1. **Componentização & JSX:** Todo o projeto deve ser dividido em componentes funcionais menores e reutilizáveis (ex: `Header`, `Footer`, `TabelaVagas`, `FormularioVaga`).
2. **Navegação:** Utilize a biblioteca `react-router-dom` para transitar entre as páginas sem recarregar o navegador.
    * Rota `/`: Home page com dashboard simples ou lista de vagas.
    * Rota `/vagas`: Página para gerenciar Vagas.
    * Rota `/vagas/editar/:id`: Rota específica para edição de Vaga (didaticamente útil para demonstrar parâmetros de rota).
    * Rota `/empresas`: Página para gerenciar Empresas.
    * Rota `/candidatos`: Página para gerenciar Candidatos.
3. **Passagem de Dados (Props):** Demonstre claramente a passagem de dados de componentes pais para filhos usando `props`. O `App.jsx` será responsável por carregar o `dados.json` via `useState` e distribuir os arrays e funções de manipulação para as rotas filhas.
4. **Tabela CRUD:** Na página de gerenciamento de "Vagas" (ou em todas), implemente uma tabela html interativa que permita:
    * **Create:** Formulário simples para adicionar uma nova vaga ao estado (array).
    * **Read:** Listagem das vagas na tabela.
    * **Update:** Botão "Editar" na linha da tabela que preenche o formulário e atualiza o objeto no array (preferencialmente navegando para a rota de edição).
    * **Delete:** Botão "Excluir" na linha da tabela que remove o item do array.
5. **Sem Elementos Falsos:** Não adicione botões visuais ou links no menu que não possuam uma funcionalidade real associada a eles.
6. **Imagens e Offline:** O site deve ser projetado para rodar offline em um pendrive, então imagens de logotipos devem estar na pasta `public` do projeto e serem referenciadas via caminhos relativos (ex: `/imagens/logo.png`).
7. **Validação Simples:** Implemente apenas a validação de "campos obrigatórios" nos formulários para não sobrecarregar a didática.
8. **Feedback Visual:** Utilize mensagens simples (como `alert()` ou um elemento de texto) para avisar o usuário sobre o sucesso de um cadastro, edição ou exclusão.
9. **Geração de IDs:** Ao cadastrar novos registros (Empresas, Vagas, Candidatos, Candidaturas), gere o novo ID com base na lógica do maior ID existente no array + 1.
# Entregável Esperado
Gere a estrutura de pastas do projeto e o código completo dos arquivos principais (como `App.jsx`, `dados.json`, os componentes da interface e a configuração de rotas). Adicione comentários em português em partes cruciais do código explicando o que as funções fazem (ex: "Aqui atualizamos o state da lista de vagas").