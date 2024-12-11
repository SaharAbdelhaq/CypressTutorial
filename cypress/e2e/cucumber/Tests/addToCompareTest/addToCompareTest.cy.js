import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigates to Magento home page", () => {
  cy.visit("https://magento.softwaretestingboard.com/");
});

When("The user type Shirt in the search bar and press enter", () => {
  cy.get("#search").type("shirt" + "{enter}");
});

And("Choose the Circe Hooded Ice Fleece product", () => {
  cy.contains("a", "Circe Hooded Ice Fleece").click();
});

When("click on Add to Compare", () => {
  cy.wait(2000);
  cy.get(".product-addto-links").find("a").last().click();
});

Then(
  "The messsage You added product Circe Hooded Ice Fleece to the comparison list is appears",
  () => {
    cy.wait(2000);
    cy.get("[role=alert]")
      .should("be.visible")
      .and(
        "contain",
        "You added product Circe Hooded Ice Fleece to the comparison list."
      );
  }
);
