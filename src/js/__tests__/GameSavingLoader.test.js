import GameSavingLoader from "../GameSavingLoader";

test("Проверим на состояние fulfilled", async () => {
  const expected = {
    id: 9, // id сохранения
    created: 1546300800, // timestamp создания
    userInfo: {
      id: 1, // user id
      name: "Batman", // user name
      level: 10, // user level
      points: 2000, // user points
    },
  };
  const received = await GameSavingLoader.load();
  expect(received).toEqual(expected);
});

test("Проверим на состояние rejected", async () => {
  expect.assertions(1);
  await expect(Promise.reject(new Error("Ошибка"))).rejects.toThrow("Ошибка");
});
