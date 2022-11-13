import s from './FriendsOnLine.module.css';

const FriendsOnLine = () => {
    return (
        <div className={s.friendsOnLine}>
            <div className={s.onLine}>
                onLine
            </div>
            <div className={s.friendsOnLineItem}>
                <div className={s.circleItem}></div>
                <div className={s.nameFriends}>Иванов Иван</div>
            </div>
            <div className={s.friendsOnLineItem}>
                <div className={s.circleItem}></div>
                <div className={s.nameFriends}>Иванова Маша</div>
            </div>
            <div className={s.friendsOnLineItem}>
                <div className={s.circleItem}></div>
                <div className={s.nameFriends}>Gopher</div>
            </div>
            <div className={s.friendsOnLineItem}>
                <div className={s.circleItem}></div>
                <div className={s.nameFriends}>Куратор</div>
            </div>
        </div>
    );
}

export default FriendsOnLine;