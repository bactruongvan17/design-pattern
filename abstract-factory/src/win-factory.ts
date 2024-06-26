import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { GUIFactory } from "./gui-factory";
import { WinButton } from "./win-button";
import { WinCheckbox } from "./win-checkbox";

export class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }

  createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}
