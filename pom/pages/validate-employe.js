const { expect } = require('@playwright/test');

exports.ValidateEmploye = class ValidateEmploye {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.moduleEmp = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]');
    this.idEmp = page.locator('//label[contains(text(),"Employee Id")]/../../..//input');
    this.searchButton = page.locator('//button[contains(string(),"Search")]');
}

  async validateEmpRegister(idEmp) {
  await this.moduleEmp.click();
  await this.idEmp.fill(idEmp);
  await this.searchButton.click();
  }

};
