import * as sampleTest from '../util/sampleTest'

beforeAll(async () => {
    await page.goto('https://google.com/')
  })
  
  test('should load google', async () => {
    await sampleTest.testGoogle();
  })