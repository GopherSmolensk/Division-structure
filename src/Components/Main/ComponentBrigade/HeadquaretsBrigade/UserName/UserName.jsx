import s from './UserName.module.css';

const UserName = (props) => {
    return (
        <div className={s.userName}>{props.name}</div>
    );
}

export default UserName;