/* eslint-disable no-useless-escape */
export default class ArrayBufferConverter {
  // Загрузка данных
  static load(buffer) {
    this.buffer = buffer;
  }

  // перевод содержимого загруженного ArrayBuffer в строку.
  static toString() {
    const buffer = new Uint16Array(this.buffer);
    let outputString = "";
    for (let i = 0; i < buffer.length; i += 1) {
      outputString += String.fromCharCode(buffer[i]);
    }
    return outputString;
  }
}

export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
