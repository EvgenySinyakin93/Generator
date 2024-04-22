export default class Team {
  constructor() {
    this.members = new Set();
  }

  // добавляем персонажа
  add(player) {
    if (this.members.has(player)) {
      throw new Error("Такой игрок уже существует");
    } else {
      this.members.add(player);
    }
  }

  // добавляем произвольное количество персонажей
  addAll(...players) {
    players.forEach((player) => {
      this.members.add(player);
    });
  }

  // производим конвертацию Set в массив
  toArray() {
    this.members = Array.from(this.members);
  }
}
