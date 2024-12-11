/// <reference types = "cypress"/>

describe("Check Add to Comparision Functonality", () => {
  it("validate that the user can add a prodct to compare", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get("#search").type("shirt" + "{enter}");
    cy.contains("a", "Circe Hooded Ice Fleece").click();
    cy.wait(1000);
    cy.get(".product-addto-links").contains("Add to Compare").click();
    cy.get(".page.messages").contains(
      "You added product Circe Hooded Ice Fleece to the comparison list."
    );
  });
});
