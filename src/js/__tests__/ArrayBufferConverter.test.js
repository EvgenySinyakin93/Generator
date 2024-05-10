import ArrayBufferConverter from "../ArrayBufferConverter.js";
import { getBuffer } from "../ArrayBufferConverter.js";

test("Тестируем метод load()", () => {
  const buffer = getBuffer();
  ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.buffer).toEqual(buffer);
});

test("Тестируем метод toString()", () => {
  const buffer = getBuffer();
  ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.buffer).toEqual(buffer);
  const receivedString = ArrayBufferConverter.toString();
  const exampleString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(receivedString).toBe(exampleString);
});
