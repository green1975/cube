describe("First test", () => {
    it("should visit login page", () => {
      cy.visit("/login");
      cy.get('[type="button"]').click();
      cy.url().should('include', '/register');
    });
  });
