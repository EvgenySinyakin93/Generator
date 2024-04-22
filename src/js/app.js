import Team from "./Team";
import Character from "./Character";

const newTeam = new Team();

const player = new Character({ name: "Vedmak", age: 35 });
const player1 = new Character({ name: "Jennifer", age: 35 });
const player2 = new Character({ name: "Ciri", age: 18 });

newTeam.addAll(player, player1, player2, player2);
