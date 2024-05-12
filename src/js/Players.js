import Character from "./Character";
import Team from "./Team";

const player1 = new Character({
  name: "Геральт",
  type: "Ведьмак",
  health: 100,
  level: 1,
  attack: 100,
  defence: 100,
});

const player2 = new Character({
  name: "Йениффер",
  type: "Ведьма",
  health: 100,
  level: 1,
  attack: 100,
  defence: 60,
});

const player3 = new Character({
  name: "Цири",
  type: "Ученица",
  health: 100,
  level: 1,
  attack: 100,
  defence: 100,
});

const team = new Team();

team.add(player1);
team.add(player2);
team.add(player3);

for (const player of team) {
  console.log(player);
}
