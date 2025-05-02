describe('Funcionalidade de deletar tarefas', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/todo'); // Use um app real
    });
  
    it('deve adicionar e deletar uma tarefa da lista', () => {
      // Adiciona uma nova tarefa
      cy.get('.new-todo').type('Tarefa para deletar{enter}');
      
      // Verifica se a tarefa apareceu
      cy.contains('li', 'Tarefa para deletar').should('exist');
  
      // Clica no botão de deletar
      cy.contains('li', 'Tarefa para deletar')
        .find('button.destroy') // usa a classe correta
        .invoke('show')         // exibe o botão, se necessário
        .click();
  
      // Verifica se a tarefa foi removida
      cy.contains('li', 'Tarefa para deletar').should('not.exist');
    });
  });
  