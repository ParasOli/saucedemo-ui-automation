import LoginPage from '../../pages/login.js';


describe("SauceDemo Login Tests", () => {

  beforeEach(() => {
    LoginPage.visit('/');
  });

  it("1️⃣ Login with valid credentials", () => {
    LoginPage.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
  });

  it("2️⃣ Login with invalid username", () => {
    LoginPage.login("wrong_user", "secret_sauce");
    LoginPage.checkErrorMessage(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("3️⃣ Login with invalid password", () => {
    LoginPage.login("standard_user", "wrong_password");
    LoginPage.checkErrorMessage(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("4️⃣ Login with locked out user", () => {
    LoginPage.login("locked_out_user", "secret_sauce");
    LoginPage.checkErrorMessage(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

  it("5️⃣ Login with empty username and password", () => {
    LoginPage.login("", "");
    LoginPage.checkErrorMessage(
      "Epic sadface: Username is required"
    );
  });

});
