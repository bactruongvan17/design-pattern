import { Receiver } from "./receiver";

export class CopyReceiver implements Receiver {
  handle(): string {
    return "Handle Copy";
  }
}
