// Suwapich
import { test, expect } from '@playwright/test';

test('TC-74: ตรวจสอบข้อมูลกรรมการคุมสอบ (.xlsx)', async ({ page }) => {
  await page.goto('https://project-superend-cen8.vercel.app/',);
  const USERNAME = 'Admin1';
  const PASSWORD = 'examroom@1234';

  await page.getByRole('textbox', { name: 'ใส่ชื่อบัญชีผู้ใช้' }).fill(USERNAME);
  await page.getByRole('textbox', { name: 'ใส่รหัสผ่านของคุณ' }).fill(PASSWORD);
  await page.getByRole('button', { name: 'ล็อกอิน' }).click();
  await page.waitForNavigation();

  await expect(page).toHaveURL(/.*Home/);

  await page.getByRole('button', { name: 'เปิดเมนู' }).click();
  await page.getByRole('link', { name: 'รายละเอียดการส่ง และ คุมการสอบ' }).click();
  await page.getByRole('tab', { name: 'ตารางคุมสอบ' }).click();
  await expect(page.getByRole('heading', { name: 'ตรวจสอบวันที่คุมสอบ :: Admin' })).toBeVisible();
});