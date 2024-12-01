/// <reference types = "cypress" />

describe("Check Multiplication Functionality", () => {
  it("Validate that the Multiplication operates as expected", () => {
    cy.visit("https://testsheepnz.github.io/BasicCalculator.html");
    cy.get("#calcForm").should("be.visible");
    cy.get("#number1Field").type(3);
    cy.get("#number2Field").type(3);
    cy.get("#selectOperationDropdown").select("Multiply");
    cy.get("#calculateButton").click();
    cy.wait(5000);
    cy.get("#numberAnswerField").should("be.visible").and("have.value", "9");
  });
});
