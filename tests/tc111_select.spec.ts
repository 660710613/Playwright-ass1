// Napat
import { test, expect } from '@playwright/test';

test('TC111: search department should show result', async ({ page }) => {
    await page.goto('https://project-superend-cen8.vercel.app/',);
    const USERNAME = 'Admin1';
    const PASSWORD = 'examroom@1234';

    await page.getByRole('textbox', { name: 'ใส่ชื่อบัญชีผู้ใช้' }).fill(USERNAME);
    await page.getByRole('textbox', { name: 'ใส่รหัสผ่านของคุณ' }).fill(PASSWORD);
    await page.getByRole('button', { name: 'ล็อกอิน' }).click();
    await page.waitForNavigation();

    await expect(page).toHaveURL(/.*Home/);
    await page.getByRole('button', { name: 'เปิดเมนู' }).click();
    await page.getByRole('link', { name: 'ให้สิทธิ์กรรมการห้องอำนวยการสอบ' }).click();

    const searchBox = page.getByRole('textbox', { name: 'ค้นหาตามชื่อหรือภาควิชา' });

    await searchBox.fill('ภาควิชาคอมพิวเตอร์');

    await expect(page.getByRole('cell', { name: 'ภาควิชาคอมพิวเตอร์' })).toBeVisible();
});
