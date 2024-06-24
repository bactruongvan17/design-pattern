import { describe, expect, test } from "@jest/globals";
import { CutCommand } from "../cut-command";
import { CutReceiver } from "../cut-receiver";
import { Invoker } from "../invoker";

describe("test cut command", () => {
  test("cut text", () => {
    const textToCut = "Hello World";
    const command = new CutCommand(new CutReceiver(), textToCut);

    const invoker = new Invoker();
    invoker.setCommand(command);
    const result = invoker.run();

    expect(result).toBe("Handle cut string: " + textToCut);
  });
});
