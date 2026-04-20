// Suwapich
import { test, expect } from '@playwright/test';

test('TC-90: ตรวจสอบการบันทึก log ของระบบโดยใช้ filter Fail', async ({ page }) => {
  await page.goto('https://project-superend-cen8.vercel.app/', );
  const USERNAME = 'Admin1';
  const PASSWORD = 'examroom@1234';

  await page.getByRole('textbox', { name: 'ใส่ชื่อบัญชีผู้ใช้' }).fill(USERNAME);
  await page.getByRole('textbox', { name: 'ใส่รหัสผ่านของคุณ' }).fill(PASSWORD);
  await page.getByRole('button', { name: 'ล็อกอิน' }).click();
  await page.waitForNavigation();

  await expect(page).toHaveURL(/.*Home/);

  await page.getByRole('button', { name: 'เปิดเมนู' }).click();
  await page.getByRole('link', { name: 'รายงานการใช้งานระบบ' }).click();
  await page.getByRole('combobox').selectOption('FAIL');
  await page.getByRole('button', { name: 'ค้นหา' }).click();
  await expect(page.getByText('FAIL').nth(1)).toBeVisible();
});