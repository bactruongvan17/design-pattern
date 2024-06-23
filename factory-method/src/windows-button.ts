import { Button } from "./button";

export class WindowsButton implements Button {
  render() {
    console.log("Render WindowsButton");
  }

  click(): void {
    console.log("Click WindowsButton");
  }
}
