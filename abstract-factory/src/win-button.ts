import { Button } from "./button";

export class WinButton implements Button {
  paint(): string {
    return "WIN button";
  }
}
