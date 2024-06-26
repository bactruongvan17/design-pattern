import { GUIFactory } from "./gui-factory";

export class Application {
  constructor(private readonly factory: GUIFactory) {}

  paintButton(): string {
    return this.factory.createButton().paint();
  }

  paintCheckbox(): string {
    return this.factory.createCheckbox().paint();
  }
}
