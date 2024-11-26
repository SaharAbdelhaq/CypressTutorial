/// <reference types = "cypress" />

describe("Check Add to cart Functionality", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get("#search").type("shirt" + "{enter}");
    cy.contains("a", "Circe Hooded Ice Fleece").click();
    cy.wait(1000);
    cy.get(".swatch-option.text").contains("M").click();
    cy.get("[aria-label=Purple]").click();
    cy.get("#product-addtocart-button").click();
    cy.wait(3000);
  });

  it("Validate that the user can add products to the shopping cart", () => {
    cy.get(".counter-label").should("be.visible").and("contain", "1");
  });

  it("Validate that the user can delete a product from his cart Successfully", () => {
    cy.get(".minicart-wrapper").click();
    cy.get(".minicart-items-wrapper")
      .should("be.visible")
      .and("contain", "Circe Hooded Ice Fleece");
    cy.get(".action.delete").click();
    cy.get(".action-primary.action-accept").click();
    cy.get(".subtitle.empty").should(
      "contain",
      "You have no items in your shopping cart."
    );
    cy.get(".counter-number").should("be.hidden");
  });
});
