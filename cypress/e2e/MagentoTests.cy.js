/// <reference types = "cypress" />

describe("Lesson1", () => {
  it("Open login page", () => {
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login");
    cy.get("#email").type("saharabdelhaq02@gmail.com");
    cy.get("#pass").type("ghgh123456789++");
    cy.get("#send2").click();
    cy.get(".page-title-wrapper").should("contain", "My Account");
  });
});
