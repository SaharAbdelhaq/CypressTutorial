import { Given, When, And } from "cypress-cucumber-preprocessor/steps";

// i will apply the Page Object Model to my Login tests.
import loginAcctions from "../../../../support/PageObjets/Login/actions.cy";
import sharedAssertions from "../../../../support/PageObjets/shared/sharedAssertions.cy";
const loginAcction = new loginAcctions();
const sharedAssertion = new sharedAssertions();

const Email = "saharabdelhaq02@gmail.com";
const Password = "ghgh123456789++";
const tilteVlue = "My Account";
Given("The user navigates to sign in page in Magento Webite", () => {
  loginAcction.openLoginPage();
});

When("The user types email in the email input field", () => {
  loginAcction.typeEmailInEmailInputField(Email);
});

And("The user types password in the password input field", () => {
  loginAcction.typePasswordInPasswordInputField(Password);
});

And("The user clicks the SignIn button", () => {
  loginAcction.clickOnSignInButton();
});

Then("The user will directed to My Account Page", () => {
  sharedAssertion.checkPageTitleIsContain(tilteVlue);
});
