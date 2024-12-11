import { Given, When, And } from "cypress-cucumber-preprocessor/steps";

Given("The user navigates to sign in page in Magento Webite", () => {
  cy.visit("https://magento.softwaretestingboard.com/customer/account/login");
});

When("The user types email in the email input field", () => {
  cy.get("#email").type("saharabdelhaq02@gmail.com");
});

And("The user types password in the password input field", () => {
  cy.get("#pass").type("ghgh123456789++");
});

And("The user clicks the SignIn button", () => {
  cy.get("#send2").click();
});

Then("The user will directed to My Account Page", () => {
  cy.get(".page-title-wrapper").should("contain", "My Account");
});
