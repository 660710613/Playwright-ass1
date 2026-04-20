// Napat
import { test, expect } from '@playwright/test';

test('TC94: show error when submitting empty form', async ({ page }) => {
    await page.goto('https://project-superend-cen8.vercel.app/',);
    const USERNAME = 'Admin1';
    const PASSWORD = 'examroom@1234';

    await page.getByRole('textbox', { name: 'ใส่ชื่อบัญชีผู้ใช้' }).fill(USERNAME);
    await page.getByRole('textbox', { name: 'ใส่รหัสผ่านของคุณ' }).fill(PASSWORD);
    await page.getByRole('button', { name: 'ล็อกอิน' }).click();
    await page.waitForNavigation();

    await expect(page).toHaveURL(/.*Home/);
    await page.getByRole('button', { name: 'เปิดเมนู' }).click();
    await page.getByRole('link', { name: 'จัดห้องสอบ' }).click();

    await page.getByRole('button', { name: 'เพิ่มห้องสอบ' }).click();
    await page.getByRole('button', { name: 'เพิ่มห้องใหม่' }).click();

    await page.getByRole('button', { name: 'บันทึก' }).click();

    await expect(page.getByText('กรุณากรอกข้อมูลให้ครบทุกช่อง')).toBeVisible();
});
