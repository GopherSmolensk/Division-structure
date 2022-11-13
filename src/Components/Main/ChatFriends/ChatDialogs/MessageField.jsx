import s from './../ChatFriends.module.css';

const MessageField = (props) => {
    return (
        <div className={s.messageField}>
            <div className={s.messageItem}>{props.message}</div>
        </div>
    );
}

export default MessageField;