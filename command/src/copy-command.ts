import { Command } from "./command";
import { CopyReceiver } from "./copy-receiver";

export class CopyCommand implements Command {
  constructor(private readonly receiver: CopyReceiver) {}

  execute(): void {
    this.receiver.handle();
  }
}
