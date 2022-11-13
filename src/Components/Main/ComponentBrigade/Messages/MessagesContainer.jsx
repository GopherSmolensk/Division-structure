
import { addNewMessageAcrionCreator } from '../../../../redux/message-reducer';
import { updateNewChangePostActionCreator } from '../../../../redux/message-reducer';
import Messages from './Messages'
import {connect} from "react-redux"


let mapStateToProps = (state) => {
    return {
        messages: state.messageBlockArr.messages,
        newChangePostArr: state.messageBlockArr.newChangePostArr
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addNewMessageAcrionCreator());
        },
        updateNewChangePost: (text) => {
            dispatch(updateNewChangePostActionCreator(text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)


export default MessagesContainer;