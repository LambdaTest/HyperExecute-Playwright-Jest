jest.setTimeout(40000);

describe("Example Domain", () => {
  beforeAll(async () => {
    await page.goto("https://example.com");
  });

  it("should display the Example Domain heading", async () => {
    const heading = await page.textContent("h1");

    expect(heading.trim()).toBe("Example Domain");

    await page.evaluate(
      (_) => {},
      `lambdatest_action: ${JSON.stringify({
        action: "setSessionStatus",
        arguments: {
          status: "passed",
          reason: "Heading verified"
        }
      })}`
    );
  });
});