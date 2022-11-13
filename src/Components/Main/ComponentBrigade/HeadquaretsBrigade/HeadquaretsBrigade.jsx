import s from './HeadquaretsBrigade.module.css';
import UserName from './UserName/UserName';
import UserPosition from './UserPosition/UserPosition';
import UserRank from './UserRank/UserRank';

const HeadquaretsBrigade = (props) => {

    let UserPositionElements = props.positions.map(p => <UserPosition position={p.position} key={p.id} />)

    let UsrerRankElement = props.ranks.map(r => <UserRank rank={r.rank} key={r.id} />)

    let UserNameElements = props.name.map(n => <UserName name={n.name} key={n.id} />)

    return (
        <div className={s.HeadquaretsBrigade}>
            <div className={s.BlockItem}>
                <div className={s.userPosition}>
                    {UserPositionElements}
                </div>
                <div className={s.userRank}>
                    {UsrerRankElement}
                </div>
                <div className={s.userName}>
                    {UserNameElements}
                </div>
            </div>
            
        </div>
    );
}

export default HeadquaretsBrigade; 