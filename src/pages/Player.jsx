import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getVideoSource } from '../actions';
import NotFound from './NotFound';

import '../assets/styles/pages/Player.scss';

const Player = (props) => {
  const { getVideoSource, playing, history } = props;
  const { id } = props.match.params;

  const hasPlaying = Object.keys(playing).length > 0;

  useLayoutEffect(() => {
    getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <main>
      <div className='Player'>
        <video controls autoPlay>
          <source src={playing.source} type='video/mp4' />
        </video>
        <div className='Player-back'>
          <button type='button' onClick={() => history.goBack()}>
            Regresar
          </button>
        </div>
      </div>
    </main>
  ) : (
    <NotFound />
  );
};

Player.propTypes = {
  getVideoSource: PropTypes.func.isRequired,
  playing: PropTypes.object.isRequired,
  id: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
