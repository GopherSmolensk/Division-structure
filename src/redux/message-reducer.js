const NEW_MESSAGE = 'NEW-MESSAGE';
const UPDATE_NEW_CHANGE_POST = 'UPDATE-NEW-CHANGE-POST';


let initialState = {
    messages: [
        { id: 1, message: "Привет" },
        { id: 2, message: "Привет" },
        { id: 3, message: "Привет привет" }
    ],
    newChangePostArr: 'Gopher'
}

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEW_MESSAGE:{
            let newMessage = {
                id: 4,
                message: state.newChangePostArr
            }
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newChangePostArr = '';
            return stateCopy;
        }
        case UPDATE_NEW_CHANGE_POST:{
            let stateCopy = { ...state };
            stateCopy.messages = [...state.messages]
            stateCopy.newChangePostArr = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addNewMessageAcrionCreator = () => ({ type: NEW_MESSAGE })

export const updateNewChangePostActionCreator = (text) =>
    ({ type: UPDATE_NEW_CHANGE_POST, newText: text })

    export default messageReducer;