import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { registerRequest, loginRequest } from '../actions';
import Header from '../components/Header';

import '../assets/styles/pages/Register.scss';

const Register = (props) => {
  const { users, registerRequest, loginRequest, history } = props;

  const [formValues, setFormValues] = useState({});
  const [error, setError] = useState(null);

  const handleInput = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const checkUser = users.find((user) => user.email === formValues.email);
    if (!checkUser) {
      registerRequest(formValues);
      loginRequest(formValues);
      history.push('/');
    } else {
      setError('Usuario ya registrado');
    }
  };

  return (
    <>
      <Header isRegister />
      <main>
        <section className='Register__container'>
          <section className='Register'>
            <h2>Regístrate</h2>
            <form className='Register--form' onSubmit={handleSubmit}>
              <input
                className='input'
                type='text'
                name='name'
                placeholder='Nombre'
                onChange={handleInput}
              />
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
                Registrarme
              </button>
            </form>
            {error && (
              <div className='error'>
                <p>{error}</p>
              </div>
            )}
            <Link to='/login'>Iniciar sesión</Link>
          </section>
        </section>
      </main>
    </>
  );
};

Register.propTypes = {
  users: PropTypes.array.isRequired,
  registerRequest: PropTypes.func.isRequired,
  loginRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  registerRequest,
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
