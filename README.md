# Cypress: Automatizando Testes E2E

## Sobre o Curso
Este projeto é baseado no curso **"Cypress: Automatizando Testes E2E"**, que ensina a criar testes de ponta a ponta (E2E) para aplicações web modernas usando o **Cypress**, uma das ferramentas de automação de testes mais populares do mercado.

Durante o curso, foram abordados conceitos fundamentais de automação de testes, além de boas práticas para estruturar projetos de testes de forma escalável e eficiente.

---

## 📋 Conteúdos e Habilidades Desenvolvidas
- **Instalação e configuração do Cypress**
- **Criação de testes E2E** (End-to-End) simulando o fluxo real do usuário
- **Uso de comandos do Cypress** (`visit`, `get`, `contains`, `type`, `click`, `should`)
- Aplicação de `beforeEach` para otimizar os testes
- Validação de URLs, títulos e elementos do DOM
- Testes de rotas e navegação entre páginas
- Fluxos de login automatizados
- Uso de seletores customizados (`data-test`, `data-cy`)
- Organização de testes usando `describe`, `it`
- Estruturação de arquivos `.cy.js` separados para diferentes funcionalidades
- Melhores práticas para escrita de testes robustos e confiáveis

---

## 🛠️ Tecnologias Utilizadas
- **Cypress.io** - Framework principal de testes E2E
- **JavaScript (ES6+)**
- **Node.js**
- **HTML/CSS básico** para análise de páginas
- **Vite/Vercel** para hospedagem da aplicação exemplo

---

## 🧪 Exemplos de Testes Criados
- Teste de cadastro de novos usuários
- Teste de login e autenticação
- Verificação de mensagens e textos importantes da página
- Teste de interação com o cabeçalho e botões de navegação
- Adoção de pets no sistema (fluxo real do usuário)

---

## 📂 Estrutura de Pastas
```bash
cypress/
  e2e/
    cadastro.cy.js
    login.cy.js
    home.cy.js
    mensagens.cy.js
  support/
    commands.js
    e2e.js
cypress.config.js
README.md
```

---

## 🚀 Como Rodar os Testes Localmente
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o Cypress:
   ```bash
   npx cypress open
   ```

4. Execute os testes pelo Test Runner.

---

## 🔥 O que Aprendi?
- Como simular o comportamento real do usuário em aplicações web.
- A importância de escrever testes claros, organizados e independentes.
- Como usar o Cypress para garantir a qualidade e a estabilidade de um projeto front-end.
- Boas práticas de automação para projetos de qualquer tamanho.

---

## 📢 Observações
- O projeto foi baseado na aplicação de demonstração **Adopet**.
- Testes focados no fluxo principal do usuário e validação de funcionalidades essenciais.
- Para melhorar ainda mais o projeto:
  - Integrar os testes a pipelines **CI/CD**.
  - Utilizar `intercept` para validar respostas de API.

---

## 👩‍💻 Autor(a)
Rafael Feltrim  


---

## 📄 Licença
Este projeto está licenciado sob a licença **MIT**.
