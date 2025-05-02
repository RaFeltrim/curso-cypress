describe('Verifica nome do usuário no perfil via API', () => {
    it('deve obter perfil do usuário autenticado', () => {
      cy.request('POST', 'https://adopet-api-i8qu.onrender.com/login', {
        email: Cypress.env('email'),
        password: Cypress.env('password')
      }).then((res) => {
        const token = res.body.token;
  
        cy.request({
          method: 'GET',
          url: 'https://adopet-api-i8qu.onrender.com/perfil',
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((perfil) => {
          expect(perfil.status).to.eq(200);
          expect(perfil.body).to.have.property('nome');
          expect(perfil.body.nome).to.eq('Ana de Jesus'); // ajuste conforme o usuário
        });
      });
    });
  });
  