describe('The todo list page', function() {
    it('displays add task form', function() {
        cy.visit('/');

        cy.get(".task-description").type('My first task');
        cy.get(".due-date").type('May 1, 2019');

        cy.get("button").click();
    })
});
