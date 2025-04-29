describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button').click();
    cy.get('[data-test="input-name"]').type('Rafael');
    cy.get('[data-test="input-email"]').type('rafafa@gmail.com');
    cy.get('[data-test="input-password"]').type('@Ratimbum1234');
    cy.get('[data-test="input-confirm-password"]').type('@Ratimbum1234');
    cy.get('[data-test="submit-button"]').click();


    
    // //Visitar a página principal e clicando no botão 'Ver pets siponíveis para adoção'
    // cy.visit('https://adopet-frontend-cypress.vercel.app/');
    // cy.get('.button').click() 

    // //Testando os botões do header    
    // cy.get('.header__home').click()  
    // cy.get('.header__message').click()  
    
    // // Visita a página de /login
    //   cy.visit('https://adopet-frontend-cypress.vercel.app/login'); 

    // //Visite a página de /home do Adopet.
    //   cy.visit('https://adopet-frontend-cypress.vercel.app/');

    // //Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.
    //   cy.visit('https://adopet-frontend-cypress.vercel.app/');
    //   cy.get('.header__message').click()

  })
})
