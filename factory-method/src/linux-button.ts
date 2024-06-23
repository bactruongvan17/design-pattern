import { Button } from "./button";

export class LinuxButton implements Button {
  render() {
    console.log("Render LinuxButton");
  }

  click(): void {
    console.log("Click LinuxButton");
  }
}
