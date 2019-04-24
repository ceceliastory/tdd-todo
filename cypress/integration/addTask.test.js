describe('The todo list page', function() {
    it('displays task on screen after it is added', function() {
        cy.visit('/');

        cy.get(".task-description").type('My first task');
        cy.get(".due-date").type('May 1, 2019');

        cy.get("button").click();

        cy.get('.task')
            .should('have.length', 1)
            .and(task => {
                expect(task).to.contain("My first task")
                expect(task).to.contain("May 1, 2019")
            })
    })
});
