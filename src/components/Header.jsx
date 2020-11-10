import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import Proptypes from 'prop-types';
import '../assets/styles/components/Header.scss';
import userIcon from '../assets/static/user-icon.png';
import logo from '../assets/static/logo-platzi-video-BW2.png';

const Header = props => {
    
    const { user } = props;
    console.log(user);
    
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        props.logoutRequest({})
    }

    return(
        <header className="header">
            <Link to='/'>
                <img className="header__img" src={logo} alt="Platzi Video" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {hasUser ?
                        <img src={gravatar(user.email)} alt={user.email}/>
                        : <img src={userIcon} alt="Imagen usuario" />                        
                    }
                    <p>Perfil</p>
                </div>
                <ul>
                    {hasUser ?
                        <li><a href="/">{user.name}</a></li> :
                        null
                    }
                    {hasUser ?
                        <li><a href="#logout" onClick={handleLogout}>Cerrar sesion</a></li>
                        :
                        <li>
                            <Link to='/login'>Iniciar sesion</Link>
                        </li> 
                    }
                </ul>
            </div>
        </header>
    )
}

const mapStateToProps = state =>{
            
    return {
        user: state.user,                
    };

};

const mapDispatchToProps = {
    logoutRequest,
}
Header.propTypes = {
    user: Proptypes.object,
    logoutRequest:Proptypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)