import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';

import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import avatar from '../assets/static/user-icon.png';

const Header = (props) => {
  const { loggedIn, logoutRequest, isLogin, isRegister } = props;
  const hasUser = Object.keys(loggedIn).length > 0;

  const handleLogout = () => {
    logoutRequest({});
  };

  const headerClass = classNames('Header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to='/' className='Header__logo'>
        <img src={logo} alt='PlatziVideo logo' />
      </Link>
      <div className='Header__menu'>
        <div className='Header__menu--profile'>
          {hasUser ? (
            <img src={gravatar(loggedIn.email)} alt={loggedIn.email} />
          ) : (
            <img src={avatar} alt='Avatar' />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            {hasUser ? (
              <span>{loggedIn.name}</span>
            ) : (
              <Link to='/register'>Crear cuenta</Link>
            )}
          </li>
          <li>
            {hasUser ? (
              <a href='#logout' onClick={handleLogout}>
                Cerrar sesión
              </a>
            ) : (
              <Link to='/login'>Iniciar sesión</Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  loggedIn: PropTypes.object.isRequired,
  logoutRequest: PropTypes.func.isRequired,
  isLogin: PropTypes.bool,
  isRegister: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
