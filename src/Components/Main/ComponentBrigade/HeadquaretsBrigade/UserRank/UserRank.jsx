import s from './UserRank.module.css';

const UserRank = (props) => {

    return (
        <div className={s.userRank}>{props.rank}</div>
    );
}

export default UserRank;