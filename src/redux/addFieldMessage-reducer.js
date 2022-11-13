const ADD_MESSAGE_FIELD = 'ADD-MESSAGE-FIELD';
const UPDATE_NEW_CHANGE_FIELD = 'UPDATE-NEW-CHANGE-FIELD';

let initialState = {
    chatItems: [
        { id: 1, name: 'Иванов Иван' },
        { id: 2, name: 'Иванова Маша' },
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
}

const addFieldMessageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE_FIELD:{
            let newMessage = {
                id: 4,
                message: state.addNewMessageFieldText
            };
            let stateCopy = {...state};
            stateCopy.messageFildes = [...state.messageFildes];
            stateCopy.messageFildes.push(newMessage);
            stateCopy.addNewMessageFieldText = '';
            return stateCopy;
        }
        case UPDATE_NEW_CHANGE_FIELD: {
            let stateCopy = { ...state };
            stateCopy.messageFildes = [...state.messageFildes];
            stateCopy.addNewMessageFieldText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addNewMessageFieldAcrionCreator = () => ({ type: ADD_MESSAGE_FIELD })

export const updateNewChangeFieldActionCreator = (text) =>
    ({ type: UPDATE_NEW_CHANGE_FIELD, newText: text })

export default addFieldMessageReducer;