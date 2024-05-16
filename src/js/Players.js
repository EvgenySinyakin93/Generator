import Team from "./Team";
import Character from "./Character";

const character1 = new Character("Unit1");
const character2 = new Character("Unit2");
const character3 = new Character("Unit3");

const team = new Team("Batman");
team.add(character1);
team.add(character2);
team.add(character3);

const generator = team[Symbol.iterator]();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (const unit of team) {
  console.log(unit);
}
