import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read(); // возвращается обещание
      const value = await json(data); // возвращается обещание
      return JSON.parse(value);
    } catch (error) {
      return "Ошибка";
    }
  }
}
