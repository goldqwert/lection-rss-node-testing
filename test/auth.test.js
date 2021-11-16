const { expect } = require("@jest/globals");
const {
  describe,
  beforeEach,
  afterEach,
  beforeAll,
  afterAll,
} = require("jest-circus");

const { auth } = require("../src/auth");

const MATURE_AGE = 18;

const dummyError = new Error("test");

describe("User auth", () => {
  beforeEach(() => {});
  afterEach(() => {});

  beforeAll(() => {});
  afterAll(() => {});

  test("should throw error with text test", () => {
    expect().toThrowError(dummyError);
  });

  test("should have name Ivan", () => {
    const { userName } = auth();

    expect(userName).toBe("ivan");
  });

  test("should have correct password", () => {
    const { password } = auth();

    expect(password).toEqual("12345");
  });

  test("should be mature", () => {
    const { age } = auth();

    expect(age).toBeGreaterThanOrEqual(MATURE_AGE);
  });
});

describe("User balance", () => {
  test("should have increased balance at 0.2", () => {
    const { balance } = auth();

    const increase = (input) => input + 0.2;

    expect(increase(balance)).toBeCloseTo(0.3);
  });
});
