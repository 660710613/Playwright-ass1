// Chatmongkon
import { test, expect } from '@playwright/test';

test('TC-33: นำเข้าไฟล์ผิดประเภท', async ({ page }) => {
  await page.goto('https://project-superend-cen8.vercel.app/',);
  const USERNAME = 'Admin1';
  const PASSWORD = 'examroom@1234';

  await page.getByRole('textbox', { name: 'ใส่ชื่อบัญชีผู้ใช้' }).fill(USERNAME);
  await page.getByRole('textbox', { name: 'ใส่รหัสผ่านของคุณ' }).fill(PASSWORD);
  await page.getByRole('button', { name: 'ล็อกอิน' }).click();
  await page.waitForNavigation();

  await expect(page).toHaveURL(/.*Home/);
  await page.getByRole('button', { name: 'เปิดเมนู' }).click();
  await page.getByRole('link', { name: 'นำเข้าไฟล์' }).click();
  await page.getByRole('button', { name: 'นำเข้าข้อมูลไฟล์ xlsx' }).click();
  await page.locator('input[type="file"]').setInputFiles('tests/files/invalid_file.txt');
  await page.getByRole('button', { name: 'อัปโหลดไฟล์' }).click();
  await page.getByRole('button', { name: 'ยืนยัน' }).click();
  await page.waitForEvent('dialog')
  await expect(page.getByRole('heading', { name: 'ข้อผิดพลาดในการอัปโหลดไฟล์' })).toBeVisible();
});