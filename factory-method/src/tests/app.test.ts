import { Application, FactoryType } from "../application";
import { describe, expect, test } from "@jest/globals";
import { WindowsDialog } from "../windows-dialog";
import { LinuxDialog } from "../linux-dialog";
import { WindowsButton } from "../windows-button";
import { LinuxButton } from "../linux-button";

describe("Factory Method test", () => {
  test("windows dialog", () => {
    const app = Application.factory(FactoryType.windows);
    expect(app).toBeInstanceOf(WindowsDialog);

    const button = app.createButton();
    expect(button).toBeInstanceOf(WindowsButton);
  });

  test("linux dialog", () => {
    const app = Application.factory(FactoryType.linux);
    expect(app).toBeInstanceOf(LinuxDialog);

    const button = app.createButton();
    expect(button).toBeInstanceOf(LinuxButton);
  });
});
