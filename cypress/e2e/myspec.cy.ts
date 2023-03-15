describe('App.js', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it ("succeed e2e testing", () => {
      cy.get("[data-testid='succeed-table']").should('exist')
  })
})