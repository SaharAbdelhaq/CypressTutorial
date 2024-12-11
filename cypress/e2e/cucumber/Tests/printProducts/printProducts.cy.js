import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigates to Magento website", () => {
  cy.visit("https://magento.softwaretestingboard.com/");
});

Then("The names of products in the Hot seller section will be printed", () => {
  cy.get(".product-items.widget-product-grid li").then((products) => {
    for (let i = 0; i < products.length; i++) {
      cy.wrap(products[i])
        .invoke("text")
        .then((productName) => {
          cy.log(productName);
        });
    }
  });
});
