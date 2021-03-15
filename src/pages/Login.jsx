import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginRequest } from '../actions';
import Header from '../components/Header';

import '../assets/styles/pages/Login.scss';
import iconGoogle from '../assets/static/google-icon.png';
import iconTwitter from '../assets/static/twitter-icon.png';

const Login = (props) => {
  const { users, loginRequest, history } = props;

  const [formValues, setformValues] = useState({});
  const [error, setError] = useState(null);

  const handleInput = (event) => {
    setformValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const checkUser = users.filter((user) => user.email === formValues.email);
    if (checkUser.length > 0) {
      loginRequest(formValues);
      history.push('/');
    } else {
      setError('Usuario no registrado');
    }
  };

  return (
    <>
      <Header isLogin />
      <main>
        <section className='Login__container'>
          <div className='Login'>
            <h2>Inicia sesión</h2>
            <form className='Login--form' onSubmit={handleSubmit}>
              <input
                className='input'
                type='email'
                name='email'
                placeholder='Correo'
                onChange={handleInput}
              />
              <input
                className='input'
                type='password'
                name='password'
                placeholder='Contraseña'
                onChange={handleInput}
              />
              <button className='button' type='submit'>
                Iniciar sesión
              </button>
              <div className='Login--remember-me'>
                <label>
                  <input type='checkbox' id='cbox1' value='first_checkbox' />
                  <span>Recuérdame</span>
                </label>
                <a href='/'>Olvidé mi contraseña</a>
              </div>
            </form>
            {error && (
              <div className='error'>
                <p>{error}</p>
              </div>
            )}
            <div className='Login--social-media'>
              <div>
                <img src={iconGoogle} />
                <p>
                  Inicia sesión con <a href=''>Google</a>
                </p>
              </div>
              <div>
                <img src={iconTwitter} />
                <p>
                  Inicia sesión con <a href=''>Twitter</a>
                </p>
              </div>
            </div>
            <p className='Login--register'>
              ¿No tienes ninguna cuenta? <Link to='/register'>Regístrate</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

Login.propTypes = {
  users: PropTypes.array.isRequired,
  loginRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
