describe("Integration tests", function () {
  it("Open cypress.io page", function () {
    const cypressPage = "https://www.cypress.io/";
    cy.visit(cypressPage);
    cy.url().should("include", cypressPage);
  });
});
