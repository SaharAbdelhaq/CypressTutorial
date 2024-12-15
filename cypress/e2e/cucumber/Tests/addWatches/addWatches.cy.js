import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import addWatchesAssertions from "../../../../support/PageObjets/addWatches/assertions.cy";

const addWatchesAssertion = new addWatchesAssertions();

let cartCounter = 0;

Given("The user navigates to Magento home page", () => {
  cy.visit("https://magento.softwaretestingboard.com/");
});

When("The user click on Gear", () => {
  cy.get("#ui-id-6").trigger("mouseover");
});
And("Select the Watches option form the dropDown List", () => {
  cy.get("#ui-id-27").click();
});

And("Click on List View", () => {
  cy.get(":nth-child(3) > .modes > #mode-list").click();
});

And("Add the Watch that its price is more than 55 to the Cart", () => {
  cy.get(".product.details.product-item-details").then((products) => {
    for (let i = 0; i < products.length; i++) {
      cy.wrap(products[i])
        .invoke("text")
        .then((productPrice) => {
          let price = productPrice.replace("$", " ");
          let finalPrice = parseInt(price);
          if (finalPrice > 55) {
            cy.wrap(products[i]).contains("Add To Cart").click({ force: true });
            cy.wait(2000);
            cartCounter++;
          }
        });
    }
  });
});

Then("The Selected Watches will be added to the cart", () => {
  addWatchesAssertion.checkCartIsContain(cartCounter);
});
