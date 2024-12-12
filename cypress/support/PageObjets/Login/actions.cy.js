class loginAcctions {
  openLoginPage() {
    cy.visit("/customer/account/login/");
    return this;
  }
  typeEmailInEmailInputField(email) {
    cy.get("#email").type(email);
    return this;
  }
  typePasswordInPasswordInputField(password) {
    cy.get("#pass").type(password);
    return this;
  }
  clickOnSignInButton() {
    cy.get("#send2").click();
    return this;
  }
}

export default loginAcctions;
