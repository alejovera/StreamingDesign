import React from 'react';
import { connect } from 'react-redux';
import { lookingResults } from '../actions';
import '../assets/styles/components/Search.scss';
import classNames from 'classnames';
const Search = (props) => {
    
    const { isHome, lookingResults } = props;

    const handleInput = e =>{
        lookingResults(e.target.value)
    }


    const inputStyles = classNames('input', {
        isHome 
    });

    return(
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input
                type="text"
                className={inputStyles}
                placeholder="Buscar..."
                onKeyDown={handleInput}
            />
        </section>
    )
};
const mapStateToProps = state => {
    return {
        looking: state.looking,        
    }
}

const mapDispatchToProps = {
    lookingResults,
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
