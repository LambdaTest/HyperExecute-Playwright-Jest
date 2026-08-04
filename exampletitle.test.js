jest.setTimeout(40000);

describe("Example Domain", () => {
  beforeAll(async () => {
    await page.goto("https://example.com");
  });

  it("should have the correct title", async () => {
    expect(await page.title()).toBe("Example Domain");

    await page.evaluate(
      (_) => {},
      `lambdatest_action: ${JSON.stringify({
        action: "setSessionStatus",
        arguments: {
          status: "passed",
          reason: "Title matched"
        }
      })}`
    );
  });
});