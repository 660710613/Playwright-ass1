//pattarapol
import { test, expect } from '@playwright/test';

test('TC-121:ใส่ User ถูกแต่เป็นพิมพ์ใหญ่ทั้งหมด ', async ({ page }) => {
    await page.goto('https://project-superend-cen8.vercel.app/',);
    const USERNAME = 'ADMIN1';
    const PASSWORD = 'examroom@1234';

    await page.getByRole('textbox', { name: 'ใส่ชื่อบัญชีผู้ใช้' }).fill(USERNAME);
    await page.getByRole('textbox', { name: 'ใส่รหัสผ่านของคุณ' }).fill(PASSWORD);
    await page.getByRole('button', { name: 'ล็อกอิน' }).click();
    const errorMessage = page.getByText('Invalid username or password');
    await expect(errorMessage).toBeVisible();
});