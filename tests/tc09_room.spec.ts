// Tanakorn
import { test, expect } from '@playwright/test';

test('TC-09: จัดห้องสอบแบบกึ่งอัตโนมัติ', async ({ page }) => {
  await page.goto('https://project-superend-cen8.vercel.app/', );
  const USERNAME = 'Admin1';
  const PASSWORD = 'examroom@1234';

  await page.getByRole('textbox', { name: 'ใส่ชื่อบัญชีผู้ใช้' }).fill(USERNAME);
  await page.getByRole('textbox', { name: 'ใส่รหัสผ่านของคุณ' }).fill(PASSWORD);
  await page.getByRole('button', { name: 'ล็อกอิน' }).click();
  await page.waitForNavigation();

  await expect(page).toHaveURL(/.*Home/);

  await page.getByRole('button', { name: 'เปิดเมนู' }).click();
  await page.getByRole('link', { name: 'จัดห้องสอบ' }).click();
  await page.waitForLoadState();
  await page.getByRole('button', { name: 'จัดห้องสอบกึ่งอัตโนมัติ' }).click();
  await page.getByRole('checkbox', { name: 'ไววิทย์พุทธารี 266 คน' }).check();
  await page.getByRole('button', { name: 'จัดห้องสอบ' }).click();

  await expect(page.getByRole('heading', { name: 'สำเร็จ' })).toBeVisible();
});