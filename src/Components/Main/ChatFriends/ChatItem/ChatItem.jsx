import s from './../ChatFriends.module.css';

import {NavLink} from 'react-router-dom'

const ChatItem = (props) => {
    
    let path = "/ChatFriends/" + props.id;
    return (
        <div className={s.chatItem}>
            <NavLink className={s.item} to={path}>{props.name}</NavLink>
        </div>
    );
}

export default ChatItem; 
