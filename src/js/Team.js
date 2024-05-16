export default class Team {
  constructor(name) {
    this.name = name;
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error("Такой персонаж уже есть");
    }
    this.members.add(member);
  }

  *[Symbol.iterator]() {
    const teamArray = Array.from(this.members);

    for (let i = 0; i <= teamArray.length; i += 1) {
      yield teamArray[i];
    }
  }
}
