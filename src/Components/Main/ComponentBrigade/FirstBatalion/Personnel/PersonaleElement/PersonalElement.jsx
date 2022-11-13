import s from './PersonalElement.module.css';



const PersonalElement = (props) => {



    return (
        <div className={s.personalElement}>
            <div className={s.number}>
                {props.number}
            </div>
            <div className={s.position}>
                {props.position}
            </div>
            <div className={s.rank}>
                {props.rank}
            </div>
            <div className={s.userName}>
                {props.userName}
            </div>
            <div className={s.dateBirth}>
                {props.dateBirth}
            </div>
            <div className={s.placeBirth}>
                {props.placeBirth}
            </div>
        </div>
    );
}

export default PersonalElement;