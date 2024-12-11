/// <reference types = "cypress" />

describe("Signup Functionality", () => {
  it.only("Validate that the user can create an account successfully", () => {
    cy.visit("/customer/account/create/");
    cy.get("#firstname").type("Sahar");
    cy.get("#lastname").type("AbdHaq");
    cy.get("#email_address").type("Sahar125773@gmail.com");
    cy.get("#password").type("Sahar44++");
    cy.get("#password-confirmation").type("Sahar44++");
    cy.get('[title="Create an Account"]').click();
    cy.get(".messages").should(
      "contain",
      "Thank you for registering with Main Website Store."
    );
  });
});
