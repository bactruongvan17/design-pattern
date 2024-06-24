import { Bios } from "./bios";
import { OperatingSystem } from "./operating-system";

export class Facade {
  constructor(
    private readonly bios: Bios,
    private readonly os: OperatingSystem,
  ) {}

  turnOn(): void {
    this.bios.execute();
    this.bios.waitForKeyPress();
    this.bios.launch(this.os);
  }

  turnOff() {
    this.os.halt();
    this.bios.powerDown();
  }
}
