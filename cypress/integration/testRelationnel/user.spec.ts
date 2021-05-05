describe("User", () => {
    it("should register user", () => {
      cy.visit("/register");
      cy.get('#defaultContactFormName').type('Michael');
      cy.get('#defaultContactFormEmail').type('miachael@test.com');
      cy.get('#defaultContactFormVille').type('Lyon');
      cy.get('#defaultContactFormCodePostal').type('69000');
      cy.get('#defaultContactFormCodePassword').type('test');
      cy.get('#defaultContactFormRepassword').type('test');
      cy.get('.ButtonStyle').click();
      cy.url().should('include', '/');

    });
  });
