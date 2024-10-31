const { expect } = require('@playwright/test');

export class LoginAdminPage {
  constructor(page) {
    this.page = page;
    this.email = process.env.ADMIN_LOGIN_MAIL;
    this.password = process.env.ADMIN_LOGIN_PASS;
  }

  async open() {
    await this.page.goto('http://localhost:3000/admin/login');
    const loginForm = await this.page.locator('.login-form');
    await expect(loginForm).toBeVisible();
  }

  async submitLoginForm(
    email = this.email,
    password = this.password
  ) {
    await this.page.getByPlaceholder('E-mail').fill(email);
    await this.page.getByPlaceholder('Senha').fill(password);
    await this.page.getByText('Entrar').click();
  }

  async checkAlertHasText(text) {
    const alert = this.page.locator("span[class$='alert']");
    await expect(alert).toHaveText(text);
  }
}
