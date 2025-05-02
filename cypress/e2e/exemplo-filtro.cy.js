describe('Funcionalidade de filtrar tarefas', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/todo'); // App funcional
    });
  
    it('deve filtrar tarefas ativas e completas', () => {
      cy.get('.new-todo').type('Tarefa ativa{enter}');
      cy.get('.new-todo').type('Tarefa completa{enter}');
  
      cy.contains('li', 'Tarefa completa')
        .find('.toggle')
        .check();
  
      cy.contains('a', 'Active').click();
      cy.contains('li', 'Tarefa ativa').should('be.visible');
      cy.contains('li', 'Tarefa completa').should('not.exist');
  
      cy.contains('a', 'Completed').click();
      cy.contains('li', 'Tarefa completa').should('be.visible');
      cy.contains('li', 'Tarefa ativa').should('not.exist');
    });
  });
  