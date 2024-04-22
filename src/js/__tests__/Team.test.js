import Team from "../Team";
import Character from "../Character";

test("Проверка на добавление нового игрока", () => {
  const newTeam = new Team();

  const player = new Character({ name: "Vedmak", age: 35 });

  newTeam.add(player);

  const newSet = new Set();
  newSet.add({ name: "Vedmak", age: 35 });

  expect(newTeam.members).toEqual(newSet);
});

test("Проверка на добавление cуществующего игрока", () => {
  const newTeam = new Team();

  const player = new Character({ name: "Vedmak", age: 35 });

  newTeam.add(player);

  expect(function () {
    newTeam.add(player);
  }).toThrow("Данный игрок уже есть в команде.");
});

test("Проверка на отсутсвие дубликатов при добавлении новых игроков", () => {
  const newTeam = new Team();

  const player = new Character({ name: "Vedmak", age: 35 });
  const player1 = new Character({ name: "Jennifer", age: 35 });
  const player2 = new Character({ name: "Ciri", age: 18 });

  newTeam.addAll(player, player1, player2, player2);

  expect(newTeam.members.size).toEqual(3);
});

test("Проверка на преобразование Set в массив", () => {
  const newTeam = new Team();

  const player = new Character({ name: "Vedmak", age: 35 });
  const player1 = new Character({ name: "Jennifer", age: 35 });
  const player2 = new Character({ name: "Ciri", age: 18 });

  newTeam.addAll(player, player1, player2);

  newTeam.toArray();

  const sample = [
    { age: 35, name: "Vedmak" },
    { age: 35, name: "Jennifer" },
    { age: 18, name: "Ciri" },
  ];

  expect(newTeam.members).toEqual(sample);
});
