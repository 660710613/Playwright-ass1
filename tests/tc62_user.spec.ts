// Suwapich
import { test, expect } from '@playwright/test';

test('TC-62: สร้างผู้ใช้ใหม่', async ({ page }) => {
  await page.goto('https://project-superend-cen8.vercel.app/',);
  const USERNAME = 'Admin1';
  const PASSWORD = 'examroom@1234';

  await page.getByRole('textbox', { name: 'ใส่ชื่อบัญชีผู้ใช้' }).fill(USERNAME);
  await page.getByRole('textbox', { name: 'ใส่รหัสผ่านของคุณ' }).fill(PASSWORD);
  await page.getByRole('button', { name: 'ล็อกอิน' }).click();
  await page.waitForNavigation();

  await expect(page).toHaveURL(/.*Home/);

  await page.getByRole('button', { name: 'เปิดเมนู' }).click();
  await page.getByRole('link', { name: 'การจัดการผู้ใช้' }).click();
  await page.getByRole('button', { name: 'เพิ่มผู้ใช้ใหม่' }).click();
  await page.locator('input[name="username"]').fill('somchai');
  await page.locator('input[name="full_name"]').fill('สมชาย ใจดี');
  await page.getByRole('combobox').selectOption('9');
  await page.getByRole('button', { name: 'เพิ่มผู้ใช้', exact: true }).click();
  await expect(page.getByRole('cell', { name: 'somchai' })).toBeVisible();
});