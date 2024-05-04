import Magician from "../Magician";

test("новый персонаж Magician", () => {
  const magician = new Magician("Bowman");
  const result = {
    name: "Bowman",
    level: 1,
    health: 100,
    _attack: 100,
    defense: 40,
    type: "Magician",
    _stoned: false,
  };
  expect(magician).toEqual(result);
});
