import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigates to create a new account page and the user", () => {
  cy.visit("/customer/account/create/");
});

When(
  "The user types first name in the First Name field of the Personal Information",
  () => {
    cy.get("#firstname").type("Sahar");
  }
);

And(
  "The user types last name in the Last Name field of the Personal Information",
  () => {
    cy.get("#lastname").type("AbdHaq");
  }
);

And(
  "The user types email in the Email field of the Sign in Information",
  () => {
    cy.get("#email_address").type("Sahar10973@gmail.com");
  }
);

And(
  "The user types password in the Password field of the Sign in Information",
  () => {
    cy.get("#password").type("Sahar44++");
  }
);
And(
  "The user types confirm password in the Confirm field of the Sign in Information",
  () => {
    cy.get("#password-confirmation").type("Sahar44++");
  }
);

And("The user Clicks on the Create an Account button", () => {
  cy.get('[title="Create an Account"]').click();
});

Then("a thank you message for registering will appears", () => {
  cy.get(".messages").should(
    "contain",
    "Thank you for registering with Main Website Store."
  );
});
