import { Command } from "./command";
import { CutReceiver } from "./cut-receiver";

export class CutCommand implements Command {
  constructor(
    private readonly receiver: CutReceiver,
    private readonly text: string,
  ) {}

  execute(): string {
    return this.receiver.handle(this.text);
  }
}
