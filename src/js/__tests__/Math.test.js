import Math from "../Math";
import Daemon from "../Daemon";
import Magician from "../Magician";

test("новый персонаж Math", () => {
  const math = new Math("Bowman");
  const result = {
    name: "Bowman",
    level: 1,
    health: 100,
    _stoned: false,
  };
  expect(math).toEqual(result);
});

test("Magician атакует вторую клетку без дурмана", () => {
  const magician = new Magician("Bowman");
  magician.stoned = false;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(100);
});

test("Magician атакует вторую клетку с дурманом", () => {
  const magician = new Magician("Bowman");
  magician.stoned = true;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(100);
});

test("Daemon атакует шестую клетку без дурмана", () => {
  const daemon = new Daemon("Bowman");
  daemon.stoned = false;
  daemon.distance = 6;
  const result = daemon.attack;
  expect(result).toBe(10);
});

test("Daemon атакует вторую клетку с дурманом", () => {
  const daemon = new Daemon("Bowman");
  daemon.stoned = true;
  daemon.distance = 2;
  const result = daemon.attack;
  expect(result).toBe(10);
});
