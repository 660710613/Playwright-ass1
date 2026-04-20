// Chatmongkon
import { test, expect } from '@playwright/test';

test('TC-35: ลบไฟล์ Excel ที่นำเข้าแล้ว', async ({ page }) => {
  await page.goto('https://project-superend-cen8.vercel.app/');
  const USERNAME = 'Admin1';
  const PASSWORD = 'examroom@1234';

  await page.getByRole('textbox', { name: 'ใส่ชื่อบัญชีผู้ใช้' }).fill(USERNAME);
  await page.getByRole('textbox', { name: 'ใส่รหัสผ่านของคุณ' }).fill(PASSWORD);
  await page.getByRole('button', { name: 'ล็อกอิน' }).click();
  await page.waitForNavigation();

  await page.getByRole('button', { name: 'เปิดเมนู' }).click();
  await page.getByRole('link', { name: 'นำเข้าไฟล์' }).click();
  await page.getByRole('button', { name: 'ดูข้อมูลที่ถูกนำเข้าโดยผู้ดูแลห้องอำนวยการสอบ' }).click();

  await page.getByRole('button', { name: 'ลบไฟล์' }).click();
  await page.getByRole('button', { name: 'ยืนยัน' }).click();

  await expect(page.getByText('ยังไม่มีข้อมูล')).toBeVisible();
});
