import s from './Header.module.css';

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.headerBlock}>
                Организационная структура дивизии армии РФ
            </div>
        </div>
    );
}

export default Header;