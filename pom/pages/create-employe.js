const { expect } = require('@playwright/test');

exports.CreateEmploye = class CreateEmploye {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.moduleEmp = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]');
    this.newEmpButton = page.locator('//button[contains(string(),"Add")]');
    this.photoEmp = page.locator('input[type="file"]');
    this.firstNameEmp = page.locator('//input[@name="firstName"]');
    this.middleNameEmp = page.locator('//input[@name="middleName"]');
    this.lastNameEmp = page.locator('//input[@name="lastName"]');
    this.idEmp = page.locator('//label[contains(text(),"Employee Id")]/../../..//input');
    this.createLoginEmp = page.locator('//p[contains(string(),"Create Login Details")]/../div/label');
    this.userEmp = page.locator('//label[contains(text(),"Username")]/../..//div/input');
    this.statusEmp = page.locator('//label[contains(string(),"Disabled")]');
    this.passEmp = page.locator('//p[contains(string(),"For a")]/../div/div/input');
    this.confirmedPassEmp = page.locator('//label[contains(text(),"Confirm Password")]/../../..//input');
    this.createEmp = page.locator('//button[contains(string(),"Save")]');
  }

  async createEmpForm(photoEmp, firstNameEmp, middleNameEmp, lastNameEmp, idEmp, userEmp, passEmp, confirmedPassEmp) {
  await this.moduleEmp.click();
  await this.newEmpButton.click();
  await this.photoEmp.setInputFiles(photoEmp);
  await this.firstNameEmp.fill(firstNameEmp);
  await this.middleNameEmp.fill(middleNameEmp);
  await this.lastNameEmp.fill(lastNameEmp);
  await this.idEmp.fill(idEmp);
  await this.createLoginEmp.click();
  await this.userEmp.fill(userEmp);
  await this.statusEmp.click();
  await this.passEmp.fill(passEmp);
  await this.confirmedPassEmp.fill(confirmedPassEmp);
  await this.createEmp.click();
  }
};
