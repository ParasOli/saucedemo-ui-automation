import LoginPage from '../../pages/login.js';


describe("SauceDemo Login Tests", () => {

  beforeEach(() => {
    LoginPage.visit('/');
  });

  it("Login with valid credentials", () => {
    LoginPage.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
  });

  it("Login with invalid username", () => {
    LoginPage.login("wrong_user", "secret_sauce");
    LoginPage.checkErrorMessage(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Login with invalid password", () => {
    LoginPage.login("standard_user", "wrong_password");
    LoginPage.checkErrorMessage(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Login with locked out user", () => {
    LoginPage.login("locked_out_user", "secret_sauce");
    LoginPage.checkErrorMessage(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

  it("Login with empty username and password", () => {
    cy.get('#login-button').click()
    LoginPage.checkErrorMessage(
      "Epic sadface: Username is required"
    );
  });

});
