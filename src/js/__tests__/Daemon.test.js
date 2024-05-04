import Daemon from "../Daemon";

test("новый персонаж Character", () => {
  const daemon = new Daemon("Bowman");
  const result = {
    name: "Bowman",
    level: 1,
    health: 100,
    _attack: 10,
    defense: 40,
    type: "Daemon",
    _stoned: false,
  };
  expect(daemon).toEqual(result);
});
