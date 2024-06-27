import { describe, expect, test } from "@jest/globals";
import { Client } from "../client";

describe("test adapter pattern", () => {
  test("test print", () => {
    const client = new Client();
    const result = client.print();
    expect(result.startsWith("NEW PRINTER")).toBeTruthy();
  });
});
