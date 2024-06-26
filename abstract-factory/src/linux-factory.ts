import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { GUIFactory } from "./gui-factory";
import { LinuxButton } from "./linux-button";
import { LinuxCheckbox } from "./linux-checkbox";

export class LinuxFactory implements GUIFactory {
  createButton(): Button {
    return new LinuxButton();
  }

  createCheckbox(): Checkbox {
    return new LinuxCheckbox();
  }
}
