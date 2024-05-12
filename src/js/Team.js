import Character from "./Character";

export default class Team {
  constructor() {
    this.player = 0;
    this.numberPlayers = 0;
  }

  add(player) {
    if (player instanceof Character) {
      this.player.push(player);
      this.numberPlayers++;
    } else {
      throw new Error("Error");
    }
  }

  [Symbol.iterator]() {
    let current = 0;
    const { players, numberOfPlayers } = this;
    return {
      next() {
        if (current < numberOfPlayers) {
          return {
            value: players[current++],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}
