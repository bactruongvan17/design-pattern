import { Button } from "./button";

export abstract class DialogFactory {
  abstract createButton(): Button;

  render() {
    const button = this.createButton();
    button.click();
    button.render();
  }
}
