import { NavLink } from 'react-router-dom';
import FriendsOnLine from './FriendsOnLine/FriendsOnLine';
import s from './Navigation.module.css';

const Navigation = (props) => {
    return (
        <div className={s.navigation}>
            <section className={s.navigationBlock}>
                <nav>

                    <div className={s.navigationItem}>
                        <NavLink className={s.item} to='/main'>Структура бригады</NavLink>
                    </div>

                    <div className={s.navigationItem}>
                        <NavLink className={s.item} to='/commaderBrigade'>Командир бригады</NavLink>
                    </div>

                    <div className={s.navigationItem}>
                        <NavLink className={s.item} to='/HeadquaretsBrigade'>Штаб бригады</NavLink>
                    </div>

                    <div className={s.navigationItem}>
                        <NavLink className={s.item} to='/FirstBatalion'>1ый батальон</NavLink>
                    </div>
                    <div className={s.navigationItem}>
                        <NavLink className={s.item} to='/Messages'>Сообщения</NavLink>
                    </div>
                    <div className={s.navigationItem}>
                        <NavLink className={s.item} to='/Users'>Пользователи</NavLink>
                    </div>
                </nav>
            </section>
            <section className={s.chatFriendsBlock}>
                <div className={s.navigationItem}>
                    <NavLink className={s.item} to='/ChatFriends'>Чат с сотрудниками</NavLink>
                </div>


                <FriendsOnLine />

                
            </section>
        </div>
    );
}

export default Navigation;