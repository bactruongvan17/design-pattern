import { describe, expect, test } from "@jest/globals";
import { WinFactory } from "../win-factory";
import { Application } from "../application";

describe("test win painting", () => {
  test("win button", () => {
    const factory = new WinFactory();
    const app = new Application(factory);
    const result = app.paintButton();
    expect(result).toBe("WIN button");
  });
  test("win checkbox", () => {
    const factory = new WinFactory();
    const app = new Application(factory);
    const result = app.paintCheckbox();
    expect(result).toBe("WIN checkbox");
  });
});
