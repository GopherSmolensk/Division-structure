import MessageBlock from './MessageBlock/MessageBlock';
import s from './Messages.module.css';
import React from 'react';


const Messages = (props) => {
    
    let messageBlockElement = props.messages.map(m => <MessageBlock message={m.message} key={m.id} />)
    let addMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    }
    let changeNewPost = () => {
        let text = addMessageElement.current.value;
        props.updateNewChangePost(text);
    }
    return (
        <div className={s.messages}>
            <div className={s.addMessageBlock}>
                <textarea
                    onChange={changeNewPost}
                    ref={addMessageElement}
                    value={props.newChangePostArr}
                />
                <button onClick={addMessage}>Добавить сообщение</button>
            </div>
            <div className={s.messageBlock}>
                {messageBlockElement}
            </div>

        </div>
    );
}

export default Messages;