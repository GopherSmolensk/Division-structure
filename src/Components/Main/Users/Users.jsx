import s from './Users.module.css'
import React from 'react';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://dictionary.cambridge.org/ru/images/thumb/gopher_noun_002_16207.jpg?version=5.0.243', followed: false, fullName: 'Иванов Иван', status: 'Я сказочный )))', location: { city: 'Smolensk', country: 'Russia' } },
            { id: 2, photoUrl: 'https://dictionary.cambridge.org/ru/images/thumb/gopher_noun_002_16207.jpg?version=5.0.243', followed: true, fullName: 'Иванова Маша', status: 'Я, мне, быстрей!', location: { city: 'Smolensk', country: 'Russia' } },
            { id: 3, photoUrl: 'https://dictionary.cambridge.org/ru/images/thumb/gopher_noun_002_16207.jpg?version=5.0.243', followed: false, fullName: 'Петров Петя', status: 'Всё хорошо', location: { city: 'Smolensk', country: 'Russia' } }
        ]
        )
    }
    return (
        <div className={s.Users}>
            <div className={s.containerUsers}>
                {
                    props.users.map(u => <div className={s.blockDescriptionUsers} key={u.id}>

                        <div className={s.blockAvatar}>
                            <div>
                                <img src={u.photoUrl} alt="" />
                            </div>
                            <div>
                                {u.followed
                                    ? <button className={s.btn} onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                                    : <button className={s.btn} onClick={() => { props.follow(u.id) }} >Follow</button>}
                            </div>
                        </div>
                        <div className={s.blockUserDescription} >

                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
}

export default Users;