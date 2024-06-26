import { describe, expect, test } from "@jest/globals";
import { Application } from "../application";
import { LinuxFactory } from "../linux-factory";

describe("test linux painting", () => {
  test("linux button", () => {
    const factory = new LinuxFactory();
    const app = new Application(factory);
    const result = app.paintButton();
    expect(result).toBe("LINUX button");
  });
  test("linux checkbox", () => {
    const factory = new LinuxFactory();
    const app = new Application(factory);
    const result = app.paintCheckbox();
    expect(result).toBe("LINUX checkbox");
  });
});
