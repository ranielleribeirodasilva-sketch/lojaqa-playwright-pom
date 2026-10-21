import { test, expect } from '../fixtures/auth.fixture';

const cenariosDeLogin = [
  {
    descricao: 'Cliente válido',
    email: 'cliente@lojaqa.com',
    senha: 'Senha123!',
    deveLogar: true
  },
  {
    descricao: 'Admin válido',
    email: 'admin@lojaqa.com',
    senha: 'AdminPass123!',
    deveLogar: true
  },
  {
    descricao: 'Senha incorreta',
    email: 'cliente@lojaqa.com',
    senha: 'SenhaIncorreta',
    deveLogar: false
  }
];

test.describe('LojaQA — Testes Data-Driven de Login', () => {

  for (const cenario of cenariosDeLogin) {
    test(`Validar login: ${cenario.descricao}`, async ({ loginPage, page }) => {
      await loginPage.login(cenario.email, cenario.senha);

      if (cenario.deveLogar) {
        await expect(page).toHaveURL(/.*dashboard/);
      } else {
        await expect(loginPage.errorMessage).toBeVisible();
      }
    });
  }

});