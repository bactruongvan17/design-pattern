import { Receiver } from "./receiver";

export class CutReceiver implements Receiver {
  handle(text: string): string {
    return "Handle cut string: " + text;
  }
}
