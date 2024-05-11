import GameSavingLoader from "./GameSavingLoader";

async () => {
  try {
    const playerGameSaving = await GameSavingLoader.load();
    console.log(playerGameSaving);
  } catch (error) {
    return "Ошибка";
  }
};

//сразу избавился от цепочки then. Скобка перед async и закрывающая от нее после сохранения пропадают. Так код и чище в принципе.
//У меня стоит плагин - с сохранением выравнивается код
