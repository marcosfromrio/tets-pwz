const { expect } = require('@playwright/test');

export class LoginAdminPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('http://localhost:3000/admin/login');
    const loginForm = await this.page.locator('.login-form');
    await expect(loginForm).toBeVisible();
  }

  async submitLoginForm(email, password) {
    await this.page.getByPlaceholder('E-mail').fill(email);
    await this.page.getByPlaceholder('Senha').fill(password);
    await this.page.getByText('Entrar').click();
  }

  async checkAlertHasText(text) {
    const alert = this.page.locator("span[class$='alert']");
    await expect(alert).toHaveText(text);
  }
}