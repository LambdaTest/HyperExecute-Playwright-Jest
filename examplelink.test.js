jest.setTimeout(40000);

describe("Example Domain", () => {
  beforeAll(async () => {
    await page.goto("https://example.com");
  });

  it("should contain the IANA link", async () => {
    const href = await page.getAttribute("a", "href");

    expect(href).toContain("iana.org");

    await page.evaluate(
      (_) => {},
      `lambdatest_action: ${JSON.stringify({
        action: "setSessionStatus",
        arguments: {
          status: "passed",
          reason: "Link verified"
        }
      })}`
    );
  });
});