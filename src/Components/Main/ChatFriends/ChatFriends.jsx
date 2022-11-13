import MessageField from './ChatDialogs/MessageField';
import s from './ChatFriends.module.css';
import ChatItem from './ChatItem/ChatItem';
import React from 'react';


const ChatFriends = (props) => {
   
    let chatItemElements = props.chatItems.map(c => <ChatItem name={c.name} id={c.id} key={c.id} />)

    let messageFieldElements = props.messageFildes.map(m => <MessageField message={m.message} key={m.id} />)


    let addMessageElementField = React.createRef();

    let addMessageField = () => {
        props.addMessageField();
    }
    let changeNewPostField = () => {
        let text = addMessageElementField.current.value;
        props.updateNewChangeField(text);
    }

    return (
        <div className={s.chatFriends}>
            <div className={s.chatFrindsBlock}>
                <div className={s.chatItemBlock}>
                    {chatItemElements}
                </div>
                <div>
                    {messageFieldElements}
                </div>
            </div>
            <div className={s.newMessageBlock}>
                <textarea className={s.fieldInputText} 
                    onChange={changeNewPostField}
                    ref={addMessageElementField}
                    value={props.addNewMessageFieldText}
                />
                <button onClick={addMessageField} 
                className={s.addBtnText}>add message</button>
            </div>
        </div>
    );
}
export default ChatFriends;