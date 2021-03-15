import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../assets/styles/components/Searcher.scss';
import { Link } from 'react-router-dom';
import SearcherItem from './SearcherItem';

const Searcher = (props) => {
  const { trends, originals, isHome } = props;

  const [query, setQuery] = useState([]);

  const handleInput = (event) => {
    if (event.target.value.length > 0) {
      setQuery(
        [].concat(
          trends.filter((item) =>
            item.title.toLowerCase().includes(event.target.value.toLowerCase())
          ),
          originals.filter((item) =>
            item.title.toLowerCase().includes(event.target.value.toLowerCase())
          )
        )
      );
    } else {
      setQuery([]);
    }
  };

  let isSearch = false;
  if (query.length > 0) {
    isSearch = true;
  }

  const inputStyle = classNames('input', {
    isHome,
    isSearch: isSearch,
  });

  return (
    <section className='Searcher'>
      <h2 className='Searcher__title'>¿Qué quieres ver hoy?</h2>
      <div className='Searcher__input-container'>
        <input
          type='text'
          className={inputStyle}
          name='query'
          placeholder='Buscar...'
          onChange={handleInput}
        />
        {query.length > 0 && (
          <ul className='Searcher__results'>
            {query.map((video) => (
              <Link to={`/player/${video.id}`} key={video.id}>
                <SearcherItem video={video} />
              </Link>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

Searcher.propTypes = {
  trends: PropTypes.array.isRequired,
  originals: PropTypes.array.isRequired,
  isHome: PropTypes.bool,
};

const mapStateToProps = (store) => {
  return {
    trends: store.trends,
    originals: store.originals,
  };
};

export default connect(mapStateToProps, null)(Searcher);
