import { beforeEach, describe, expect, test } from "@jest/globals";
import { jest } from "@jest/globals";
import { OperatingSystem } from "../operating-system";
import { Bios } from "../bios";
import { Facade } from "../facade";

const osMock: jest.Mocked<OperatingSystem> = {
  halt: jest.fn(),
  getName: jest.fn(),
};

const biosMock: jest.Mocked<Bios> = {
  execute: jest.fn(),
  waitForKeyPress: jest.fn(),
  launch: jest.fn(),
  powerDown: jest.fn(),
};

describe("Test Facade", () => {
  let facade: Facade;

  beforeEach(() => {
    facade = new Facade(biosMock, osMock);
  });

  test("turn on", () => {
    facade.turnOn();
    expect(biosMock.execute).toHaveBeenCalledTimes(1);
    expect(biosMock.waitForKeyPress).toHaveBeenCalledTimes(1);
    expect(biosMock.launch).toHaveBeenCalledWith(osMock);
  });

  test("turn off", () => {
    facade.turnOff();
    expect(osMock.halt).toHaveBeenCalledTimes(1);
    expect(biosMock.powerDown).toHaveBeenCalledTimes(1);
  });
});
