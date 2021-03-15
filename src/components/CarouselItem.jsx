import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setFavorite, removeFavorite } from '../actions';

import '../assets/styles/components/CarouselItem.scss';
import iconPlay from '../assets/static/play-icon.png';
import iconAdd from '../assets/static/plus-icon.png';
import iconRemove from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const {
    id,
    cover,
    title,
    year,
    contentRating,
    duration,
    isList,
    setFavorite,
    removeFavorite,
  } = props;

  const handleSetFavorite = () => {
    setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };

  const handleRemoveFavorite = (itemId) => {
    removeFavorite(itemId);
  };

  return (
    <div className='CarouselItem'>
      <img className='CarouselItem__img' src={cover} alt={title} />
      <div className='CarouselItem__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='CarouselItem__details--img'
              src={iconPlay}
              alt='Play'
            />
          </Link>
          {isList ? (
            <img
              className='CarouselItem__details--img'
              src={iconRemove}
              alt='Remove'
              onClick={() => handleRemoveFavorite(id)}
            />
          ) : (
            <img
              className='CarouselItem__details--img'
              src={iconAdd}
              alt='Add'
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className='CarouselItem__details--title'>{title}</p>
        <p className='CarouselItem__details--subtitle'>{`${year} ${contentRating} ${duration} minutos`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  id: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  contentRating: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  isList: PropTypes.bool,
  setFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setFavorite,
  removeFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
