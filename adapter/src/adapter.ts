import { LegacyAdaptee } from "./adaptee";
import { PrinterTarget } from "./target";

export class PrinterAdapter implements PrinterTarget {
  constructor(private readonly adaptee: LegacyAdaptee) {}

  print(): string {
    return "NEW PRINTER: " + this.adaptee.printDocument();
  }
}
