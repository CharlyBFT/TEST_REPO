import { test, expect } from "@playwright/test";
const { LoginPage } = require("../pages/login-page");
const { CreateEmploye } = require("../pages/create-employe");
const { ValidateEmploye } = require("../pages/validate-employe");
import { URLS, USER, EMPLOYE } from "../data/Constantes";

test("Caso 1: Automatice el proceso de inicio de sesión en la plataforma", async ({
  page,
}) => {  
  const loginPage = new LoginPage(page);
  await page.goto(URLS.URLLOGIN);
  await loginPage.submitLoginForm(USER.USERLOGIN, USER.USERPASS);
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
});

//-------------------------------------------------------------------------------------------------------------------------------

test("Caso 2: Cree un nuevo empleado con detalles completos", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const createEmploye = new CreateEmploye(page);
  await page.goto(URLS.URLLOGIN);
  await loginPage.submitLoginForm(USER.USERLOGIN, USER.USERPASS);
  await createEmploye.createEmpForm(
    EMPLOYE.PHOTOEMP,
    EMPLOYE.FIRSTNAMEEMP,
    EMPLOYE.MIDDLENAMEEMP,
    EMPLOYE.LASTNAMEEMP,
    EMPLOYE.IDEMP,
    EMPLOYE.USEREMP,
    EMPLOYE.PASSEMP,
    EMPLOYE.CONFIRMEDPASSEMP
  );
  const alerta = await page.locator(
    '//p[contains(string(),"Successfully Saved")]'
  );
  await expect(alerta).toBeVisible();
});

//-------------------------------------------------------------------------------------------------------------------------------

test("Caso 3: Validar el correcto registro del empleado en la grillado de datos", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const validateEmp = new ValidateEmploye(page);
  await page.goto(URLS.URLLOGIN);  
  await loginPage.submitLoginForm(USER.USERLOGIN, USER.USERPASS);  
  await validateEmp.validateEmpRegister(EMPLOYE.IDEMP);
  const alerta = await page.locator(
    '//span[contains(string(),"(1) Record Found")]'
  );
  await expect(alerta).toBeVisible();
});
