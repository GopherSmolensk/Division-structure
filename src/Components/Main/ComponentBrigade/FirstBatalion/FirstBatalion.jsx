import s from './FirstBatalion.module.css';
import PersonalElement from './Personnel/PersonaleElement/PersonalElement';

const FirstBatalion = (props) => {

    let personalElement = props.elements.map(e => 
        <PersonalElement 
        number={e.number} 
        position={e.position} 
        rank={e.rank} 
        userName={e.userName}
        dateBirth={e.dateBirth} 
        placeBirth={e.placeBirth} 
        key={e.id}
        />)

    return (
        
            
            <div className={s.wrapperFirstBatalion}>
                
                {personalElement}

            </div>
         
    );
}

export default FirstBatalion;