const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.user = page.locator('//input[@name="username"]');
    this.pass = page.locator('//input[@name="password"]')
    this.loginButton = page.locator('//button[contains(string(),"Login")]')
  }

  async submitLoginForm(user, pass) {
  await this.user.fill(user);
  await this.pass.fill(pass);
  await this.loginButton.click();
  }

};