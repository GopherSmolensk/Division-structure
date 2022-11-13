import messageReducer from './message-reducer';
import addFieldMessagereducer from './addFieldMessage-reducer';

let store = {
    _state: {
        messageBlockArr: {
            messages: [
                { id: 1, message: "Вы все говно!!!!!!!" },
                { id: 2, message: "Мы все говно!!!!!!!" },
                { id: 3, message: "Говно должно кричать громче!!!" }
            ],
            newChangePostArr: 'Gopher'
        },
        pageHead: {
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
        },
        pageElements: {
            elements: [
                {
                    id: 1,
                    number: "1",
                    position: "Должность",
                    rank: "Звание",
                    userName: "Ф.И.О",
                    dateBirth: "Дата рождения",
                    placeBirth: "Место рождения"
                },
                {
                    id: 1,
                    number: "1",
                    position: "Должность",
                    rank: "Звание",
                    userName: "Ф.И.О",
                    dateBirth: "Дата рождения",
                    placeBirth: "Место рождения"
                },
                {
                    id: 1,
                    number: "1",
                    position: "Должность",
                    rank: "Звание",
                    userName: "Ф.И.О",
                    dateBirth: "Дата рождения",
                    placeBirth: "Место рождения"
                },
                {
                    id: 1,
                    number: "1",
                    position: "Должность",
                    rank: "Звание",
                    userName: "Ф.И.О",
                    dateBirth: "Дата рождения",
                    placeBirth: "Место рождения"
                },
            ]
        },
        chatPage: {
            chatItems: [
                { id: 1, name: 'Екатерина Ермакова' },
                { id: 2, name: 'Алексей Фёдоров' },
                { id: 3, name: 'Gopher' },
                { id: 4, name: 'Куратор' },
                { id: 5, name: 'Полковник Будильник' },
                { id: 6, name: 'Самовар' },
            ],
            messageFildes: [
                { id: 1, message: 'hi how are you?' },
                { id: 2, message: 'Lorem ipsum dolor' },
                { id: 3, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sint assumenda placeat natus cum fuga suscipit repellat' },
            ],
            addNewMessageFieldText: 'NewGopher'
        },

    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('GopherChange');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.messageBlockArr = messageReducer(this._state.messageBlockArr, action);
        this._state.chatPage = addFieldMessagereducer(this._state.chatPage, action);

        this._callSubscriber(this._state);


    },

}

export default store;