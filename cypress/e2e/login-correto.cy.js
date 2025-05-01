describe('Página de login', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
    })
        it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
          cy.login('rafafa@gmail.com', '@Ratimbum1234')
        })
})
  
describe('Fluxo de Login', () => {
  beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })
 
  it('Verifica mensagem de texto', () =>{
      cy.get('.header__message').click();
      cy.login('rafafa@gmail.com','@Ratimbum1234');    
  })
});