describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();

    })



    it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

        cy.get('[data-test="input-loginEmail"]').type('rafafa@gmail.com');
        cy.get('[data-test="input-loginPassword"]').type('@Ratimbum1234');
        cy.get('[data-test="submit-button"]').click();
    

    })
})