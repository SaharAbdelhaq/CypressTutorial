/// <reference types = "cypress" />
describe("Check Add to withlist functionality", () => {
  before(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get(".panel.wrapper").contains("Sign In").click();
    cy.get("#email").type("s222as@gmail.com");
    cy.get("#pass").type("ghgh12345++");
    cy.get("#send2").click();
  });

  it("Validate that the user can add a product to his wishlist successfully", () => {
    cy.get(".product-item-info").first().click();
    cy.get(".action.towishlist").contains("Add to Wish List").click();
    cy.screenshot({ capture: "fullPage" });
    cy.get(".page.messages").and(
      "contain",
      "Radiant Tee has been added to your Wish List. Click here to continue shopping."
    );
  });
});
