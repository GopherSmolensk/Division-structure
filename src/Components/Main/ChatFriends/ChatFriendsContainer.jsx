
import { connect } from 'react-redux';
import { addNewMessageFieldAcrionCreator } from '../../../redux/addFieldMessage-reducer';
import { updateNewChangeFieldActionCreator } from '../../../redux/addFieldMessage-reducer';
import ChatFriends from './ChatFriends';



let mapStateToProps = (state) => {
    return {
        messageFildes: state.chatPage.messageFildes,
        addNewMessageFieldText: state.chatPage.addNewMessageFieldText,
        chatItems: state.chatPage.chatItems
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessageField : () => {
            dispatch(addNewMessageFieldAcrionCreator());
        },
        updateNewChangeField: (text) => {
            dispatch(updateNewChangeFieldActionCreator(text))
        }
    }
}

const ChatFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(ChatFriends)
export default ChatFriendsContainer;