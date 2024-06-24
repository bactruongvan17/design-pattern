import { Command } from "./command";

export class Invoker {
  private command: Command | undefined = undefined;

  setCommand(command: Command) {
    this.command = command;
  }

  run() {
    return this.command!.execute();
  }
}
