import s from './Main.module.css';


const Main = (props) => {

    let showDescriptionFlag = () => {
        alert("Флаг России");
    }
    let showDescriptionTank = () => {
        alert("Танк Армата");
    }
    let showCommanderBrigade = () => {
        alert("Полковник: Иванов Иван Иванович");
    }

    return (
        <div className={s.main}>

            <div className={s.structureBlockStyle}>
                <div className={s.commandBlock}>
                    <img onClick={ showDescriptionTank } src="https://d-russia.ru/wp-content/uploads/2020/08/armata33.jpg" alt="" />
                    <div>
                        <div onClick={ showCommanderBrigade } className={s.structureItem}>Командир бригады</div>
                        <div className={s.structureItem}>Штаб бригады</div>
                    </div>
                    <img onClick={showDescriptionFlag } src="https://media.istockphoto.com/photos/flag-of-russia-picture-id489481953?k=20&m=489481953&s=612x612&w=0&h=_fxq--gIkMUt4bnhujwK1LDd_hA8Wk1qu5XlGQntsgI=" alt="" />
                </div>
                <div className={s.structureBlockTwo}>
                    <div className={s.structureItem}>Танковый батальон</div>
                    <div className={s.structureItem}>Мотострелковый батальон</div>
                    <div className={s.structureItem}>Гаубичный арт.дивизион</div>
                    <div className={s.structureItem}>Реактивный арт.дивизион</div>
                    <div className={s.structureItem}>Зенит.ракетный арт.дивизион</div>
                </div>
                <div className={s.structureBlockTwo}>
                    <div className={s.structureItem}>Танковый батальон</div>
                    <div className={s.structureItem}>Мотострелковый батальон</div>
                    <div className={s.structureItem}>Гаубичный арт.дивизион</div>
                    <div className={s.structureItem}>Реактивный арт.дивизион</div>
                    <div className={s.structureItem}>Зенит.ракетный арт.дивизион</div>
                </div>
                <div className={s.structureBlockTwo}>
                    <div className={s.structureItem}>Танковый батальон</div>
                    <div className={s.structureItem}>Мотострелковый батальон</div>
                    <div className={s.structureItem}>Гаубичный арт.дивизион</div>
                    <div className={s.structureItem}>Реактивный арт.дивизион</div>
                    <div className={s.structureItem}>Зенит.ракетный арт.дивизион</div>
                </div>
            </div>

        </div>
    );
}

export default Main;