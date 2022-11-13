
import FirstBatalion from './FirstBatalion';

import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        elements: state.pageElements.elements
    }
}
const FirstBatalionContainer = connect(mapStateToProps)(FirstBatalion);
export default FirstBatalionContainer;