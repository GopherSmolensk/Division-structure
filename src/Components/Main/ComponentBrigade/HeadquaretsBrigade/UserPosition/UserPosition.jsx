import s from './UserPosition.module.css';

const UserPosition = (props) => {

    
    return (
        <div className={s.userPosition}>{props.position}</div>
    );
}
export default UserPosition;