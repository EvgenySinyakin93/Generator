import Validator from "../Validator";

test("Проверяем корректность присвоения никнеймов по заданным параметрам", () => {
  expect(Boolean(Validator.validateUsername)).toBeTruthy();
  expect(Validator.validateUsername("rOW123-456sIn")).toBeTruthy();
  expect(Validator.validateUsername("f12_90uV")).toBeTruthy();
  expect(Validator.validateUsername("-Znenya")).toBeFalsy();
  expect(Validator.validateUsername("Leopold-")).toBeFalsy();
});
