import { describe, expect, test } from "@jest/globals";
import { WordsCollection } from "../words-collection";

describe("test words collection iterator", () => {
  test("test not reverse", () => {
    const collection = new WordsCollection();
    collection.addItem("First");
    collection.addItem("Second");
    collection.addItem("Third");

    const iterator = collection.getIterator();
    expect(iterator.valid()).toBeTruthy();
    expect(iterator.next()).toBe("First");
    expect(iterator.valid()).toBeTruthy();
    expect(iterator.next()).toBe("Second");
    expect(iterator.valid()).toBeTruthy();
    expect(iterator.next()).toBe("Third");
    expect(iterator.next()).toBeFalsy();
  });

  test("test reverse", () => {
    const collection = new WordsCollection();
    collection.addItem("First");
    collection.addItem("Second");
    collection.addItem("Third");

    const iterator = collection.getReverseIterator();

    expect(iterator.valid()).toBeTruthy();
    expect(iterator.next()).toBe("Third");
    expect(iterator.valid()).toBeTruthy();
    expect(iterator.next()).toBe("Second");
    expect(iterator.valid()).toBeTruthy();
    expect(iterator.next()).toBe("First");
    expect(iterator.next()).toBeFalsy();
    expect(iterator.key()).toBe(-2);
  });
});
