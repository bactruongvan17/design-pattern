import { Button } from "./button";

export class LinuxButton implements Button {
  paint(): string {
    return "LINUX button";
  }
}
