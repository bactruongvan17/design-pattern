import { OperatingSystem } from "./operating-system";

export interface Bios {
  execute(): void;
  waitForKeyPress(): void;
  launch(os: OperatingSystem): void;
  powerDown(): void;
}
