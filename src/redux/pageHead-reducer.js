
let initialState = {
    positions: [
        { id: 1, position: "Начальник штаба" },
        { id: 2, position: "Зам.начальника штаба" },
        { id: 3, position: "Офицер штаба" },
        { id: 4, position: "Офицер штаба" },
        { id: 5, position: "Офицер штаба" },
        { id: 6, position: "Офицер штаба" },
        { id: 7, position: "Офицер штаба" }
    ],
    ranks: [
        { id: 1, rank: "Подполковник" },
        { id: 2, rank: "Майор" },
        { id: 3, rank: "Майор" },
        { id: 4, rank: "Капитан" },
        { id: 5, rank: "Капитан" },
        { id: 6, rank: "ст.Лейтенант" },
        { id: 7, rank: "ст.Лейтенант" }
    ],
    name: [
        { id: 1, name: "Живоглазов Степан Валерьевич" },
        { id: 2, name: "Иванов Иван Иванович" },
        { id: 3, name: "Стург Жупан Стогнович" },
        { id: 4, name: "Екрмаков Дон Доддн" },
        { id: 5, name: "Серпухов Разман Каитвич" },
        { id: 6, name: "Смирнов Валерий Сергеевич" },
        { id: 7, name: "Попов Иван Попович" }
    ]
}

const pageHeadReducer = (state = initialState, action) => {
    return state;
}
export default pageHeadReducer;