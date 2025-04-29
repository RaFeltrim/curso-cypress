describe('Página de cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
       cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
        cy.get('[data-test="input-name"]').type('Marjorie Estiano');
        cy.get('[data-test="input-email"]').type('marjorie2@email.com');
       cy.get('[data-test="input-password"]').type('Senha123');
        cy.get('[data-test="input-confirm-password"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
  })
})

describe('Página de cadastro', () => {
  it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
     cy.visit('https://adopet-frontend-cypress.vercel.app/');
     cy.get('[data-test="register-button"]').click();
      cy.get('[data-test="submit-button"]').click();
   cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Crie uma senha').should('be.visible');
      cy.contains('Repita a senha criada acima').should('be.visible');
  })
})

describe('Página de login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })
      it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
      })
})