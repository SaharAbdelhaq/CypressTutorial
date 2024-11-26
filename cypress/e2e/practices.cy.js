/// <reference types = "cypress" />

describe("Check Magento Login Page Functionality", () => {
  it("Verify that All Fields are visable", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get(".page-header").contains("Create an Account").click();
    cy.get(".page-title-wrapper").should(
      "contain",
      "Create New Customer Account"
    );
    cy.get(".legend").first().should("be.visible");
    cy.get(".legend").last().should("be.visible");

    cy.get(".label").eq(1).should("be.visible");
    cy.get("#firstname").should("be.visible");

    cy.get(".label").eq(2).should("be.visible");
    cy.get("#lastname").should("be.visible");

    cy.get(".label").eq(3).should("be.visible");
    cy.get("#email_address").should("be.visible");

    cy.get(".label").eq(4).should("be.visible");
    cy.get("#password").should("be.visible");
    cy.get("#password-strength-meter")
      .should("be.visible")
      .and("contain", "Password Strength");

    cy.get(".label").eq(5).should("be.visible");
    cy.get("#password-confirmation").should("be.visible");

    cy.get(".actions-toolbar").should("contain", "Create an Account");
    cy.get(".fieldset.create.account").should(
      "have.attr",
      "data-hasrequired",
      "* Required Fields"
    );
  });
  it.only("Validate the user can create an Account Successfully", () => {
    cy.visit("/customer/account/create/");
    cy.get("#firstname").type("Sahar");
    cy.get("#lastname").type("AbdHaq");
    const emailNum = Math.floor(Math.random() * 1000);
    cy.get("#email_address").type("Sahar" + emailNum + "@gmail.com");
    cy.get("#password").type("Sahar44++");
    cy.get("#password-confirmation").type("Sahar44++");
    cy.get('[title="Create an Account"]').click();
    cy.get(".messages").should(
      "contain",
      "Thank you for registering with Main Website Store."
    );
  });
});
