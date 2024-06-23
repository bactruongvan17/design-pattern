import { Button } from "./button";
import { DialogFactory } from "./dialog-factory";
import { LinuxButton } from "./linux-button";

export class LinuxDialog extends DialogFactory {
  createButton(): Button {
    return new LinuxButton();
  }
}
