import s from './CommaderBrigade.module.css';
import React from 'react'

const CommaderBrigade = () => {
    let showMessageElement = React.createRef();

    let showMessage = () => {
        let showtext = showMessageElement.current.value;
        alert(showtext);
    }
    return (
        <div className={s.CommaderBrigade}>
            <div className={s.CommaderWrapper}>
                <img src="https://exactnews.ru/wp-content/uploads/2020/07/polkovnik-zapasa-obyasnil-proverku-vojsk-rf-besporyadkom-v-armii-1.jpg" alt="" />
                <div className={s.description}>
                    <div className={s.userPosition}>Должность: Коммандир бригады</div>
                    <div className={s.userName}>Ф.И.О: Иванов Иван Иванович</div>
                    <div className={s.userRank}>Звание: Полковник</div>
                </div>
            </div>
            <div>
                <textarea ref={showMessageElement}></textarea>
                <button onClick={ showMessage }>Жмякай</button>
            </div>

        </div>
    );
}

export default CommaderBrigade;