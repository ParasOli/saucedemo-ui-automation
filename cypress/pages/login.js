class LoginPage {
    elements = {
      usernameInput: "#user-name",
      passwordInput: "#password",
      loginButton: "#login-button",
      errorMessage: "[data-test='error']"
    };
  
    visit() {
      cy.visit("/");
    }
  
    login(username, password) {
      cy.get(this.elements.usernameInput).clear().type(username);
      cy.get(this.elements.passwordInput).clear().type(password);
      cy.get(this.elements.loginButton).click();
    }
  
    checkErrorMessage(text) {
      cy.get(this.elements.errorMessage).should("contain", text);
    }
  }
  
  export default new LoginPage();
  