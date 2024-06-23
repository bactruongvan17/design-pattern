import { WindowsDialog } from "./windows-dialog";
import { LinuxDialog } from "./linux-dialog";
import { DialogFactory } from "./dialog-factory";

export enum FactoryType {
  windows = "windows",
  linux = "linux",
}

export class Application {
  static factory(type: FactoryType): DialogFactory {
    switch (type) {
      case FactoryType.windows:
        return new WindowsDialog();
      case FactoryType.linux:
        return new LinuxDialog();
    }
  }
}
