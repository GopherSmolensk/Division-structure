
import HeadquaretsBrigade from './HeadquaretsBrigade'

import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        positions: state.pageHead.positions,
        ranks: state.pageHead.ranks,
        name: state.pageHead.name
    }
}

const HeadquaretsBrigadeContainer = connect(mapStateToProps)(HeadquaretsBrigade);


export default HeadquaretsBrigadeContainer; 