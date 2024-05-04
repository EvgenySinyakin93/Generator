import Character from "./Character";

export default class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = "Magician";
    this.attack = 100;
    this.defence = 40;
  }
}
