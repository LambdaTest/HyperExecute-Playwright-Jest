// Needs to be higher than the default Playwright timeout
jest.setTimeout(40 * 1000)

describe("Google", () => {
  failedCount = 0;
  beforeAll(async () => {
    await page.goto('https://google.com')
  })
  it('title should match HyperExecute - Google Search', async () => {
    await page.type('textarea[name="q"]', "Lambdatest");
    await page.press('textarea[name="q"]', "Enter");
    expect(await page.title()).toBe('Lambdatest - Google Search');
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({action: 'setSessionStatus',arguments: {status: 'passed',reason: 'Test assertion passed'}})}`);
  })
})
