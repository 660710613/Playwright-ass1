// Tanakorn
import { test, expect } from '@playwright/test';

test('TC-27: สร้างภาควิชาใหม่แต่ชื่อซ้ำ', async ({ page }) => {
  await page.goto('https://project-superend-cen8.vercel.app/', );
  const USERNAME = 'Admin1';
  const PASSWORD = 'examroom@1234';

  await page.getByRole('textbox', { name: 'ใส่ชื่อบัญชีผู้ใช้' }).fill(USERNAME);
  await page.getByRole('textbox', { name: 'ใส่รหัสผ่านของคุณ' }).fill(PASSWORD);
  await page.getByRole('button', { name: 'ล็อกอิน' }).click();
  await page.waitForNavigation();

  await expect(page).toHaveURL(/.*Home/);

  await page.getByRole('button', { name: 'เปิดเมนู' }).click();
  await page.getByRole('link', { name: 'การจัดการภาควิชา' }).click();
  await page.getByRole('button', { name: 'เพิ่มภาควิชา' }).click();
  await page.getByRole('textbox', { name: 'ชื่อภาควิชา' }).click();
  await page.getByRole('textbox', { name: 'ชื่อภาควิชา' }).fill('ภาควิชาคอมพิวเตอร์');
  await page.getByRole('button', { name: 'บันทึก' }).click();
  await page.waitForEvent('response');
  await page.getByText('มีภาควิชาชื่อ "ภาควิชาคอมพิวเตอร์" อยู่แล้ว').click();
});