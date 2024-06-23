import { Button } from "./button";
import { DialogFactory } from "./dialog-factory";
import { WindowsButton } from "./windows-button";

export class WindowsDialog extends DialogFactory {
  createButton(): Button {
    return new WindowsButton();
  }
}
