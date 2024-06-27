import { Iterator } from "./iterator";
import { WordsCollection } from "./words-collection";

export class AlphabeticalOrderIterator implements Iterator<string> {
  private position: number = 0;

  constructor(
    private readonly wordsCollection: WordsCollection,
    private readonly reverse: boolean = false,
  ) {
    if (reverse) {
      this.position = wordsCollection.getCount() - 1;
    }
  }

  current(): string {
    return this.wordsCollection.getItems()[this.position];
  }

  next(): string {
    const item = this.wordsCollection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  key(): number {
    return this.position;
  }

  valid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.wordsCollection.getCount();
  }

  rewind(): void {
    this.position = this.reverse ? this.wordsCollection.getCount() - 1 : 0;
  }
}
