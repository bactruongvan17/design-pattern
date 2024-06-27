import { LegacyAdaptee } from "./adaptee";
import { PrinterAdapter } from "./adapter";

export class Client {
  print(): string {
    const printer = new LegacyAdaptee();
    const adapter = new PrinterAdapter(printer);
    return adapter.print();
  }
}
