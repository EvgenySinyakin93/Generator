import Character from "../Character";

test("новый персонаж Character", () => {
  const character = new Character("Bowman");
  const result = {
    name: "Bowman",
    level: 1,
    health: 100,
  };
  expect(character).toEqual(result);
});
