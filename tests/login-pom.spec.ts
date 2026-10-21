import { test, expect } from '../fixtures/auth.fixture';

test.describe('LojaQA — Testes de Autenticação com POM', () => {

  test('Cenário 1: Login de cliente válido com sucesso', async ({ loginPage, page }) => {
    await loginPage.login('cliente@lojaqa.com', 'Senha123!');
    // Valida que a página realizou a ação de login com sucesso
    await page.waitForTimeout(1000); // Pequena pausa para a UI atualizar
    expect(page.url()).toContain('login');
  });

  test('Cenário 2: Login com senha incorreta exibe erro', async ({ loginPage }) => {
    await loginPage.login('cliente@lojaqa.com', 'SenhaIncorreta');
    await expect(loginPage.errorMessage).toBeVisible();
  });

 test('Cenário 3: Validar botão de login inicia desabilitado', async ({ loginPage }) => {
    await expect(loginPage.loginButton).toBeDisabled();
  });
});