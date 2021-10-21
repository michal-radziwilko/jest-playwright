export async function testGoogle(){
    await page.screenshot({path: './target/sampleTest/sampleTest.png'})
    await expect(page).toHaveTitle('Google');
}