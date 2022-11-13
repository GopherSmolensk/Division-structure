import s from './MessageBlock.module.css';

const MessageBlock = (props) => {
    return (
        <div className={s.messageBlock}>
            <div className={s.imgMessageBlock}>
                <img className={s.img} src="https://cdnimg.rg.ru/i/gallery/2cff9087/1_a957b1d7.jpg" alt="images" />
            </div>
            <div className={s.message}>
                {props.message}
            </div>
        </div>
    );
}

export default MessageBlock;