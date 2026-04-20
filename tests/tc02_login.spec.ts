// Tanakorn
import { test, expect } from '@playwright/test';

test('TC-02: Login Failed Admin', async ({ page }) => {
  await page.goto('https://project-superend-cen8.vercel.app/', );
  const USERNAME = 'Admin1';
  const PASSWORD = 'worngpassword';

  await page.getByRole('textbox', { name: 'ใส่ชื่อบัญชีผู้ใช้' }).fill(USERNAME);
  await page.getByRole('textbox', { name: 'ใส่รหัสผ่านของคุณ' }).fill(PASSWORD);
  await page.getByRole('button', { name: 'ล็อกอิน' }).click();
  await page.waitForEvent('response');

  await expect(page.getByText('Invalid username or password')).toBeVisible();
});
