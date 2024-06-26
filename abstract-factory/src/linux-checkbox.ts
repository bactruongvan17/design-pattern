import { Checkbox } from "./checkbox";

export class LinuxCheckbox implements Checkbox {
  paint(): string {
    return "LINUX checkbox";
  }
}
