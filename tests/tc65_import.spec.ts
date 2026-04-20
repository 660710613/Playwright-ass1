// Suwapich
import { test, expect } from '@playwright/test';

test('TC-65: นำเข้าไฟล์เงื่อนไขกรรมการคุมสอบ (.xlsx)', async ({ page }) => {
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
  await page.locator('input[type="file"]').setInputFiles('files/condition_proctor.xlsx');
  await page.getByRole('button', { name: 'อัปโหลดไฟล์' }).click();
  await page.getByRole('button', { name: 'ยืนยัน' }).click();
  await expect(page.getByText('สำเร็จ')).toBeVisible();
});