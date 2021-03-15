import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Searcher from '../components/Searcher';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = (props) => {
  const { myList, trends, originals } = props;

  return (
    <>
      <Header />
      <main>
        <Searcher isHome />
        {myList.length > 0 && (
          <Categories title='Mi lista'>
            <Carousel>
              {myList.map((video) => (
                <CarouselItem key={video.id} {...video} isList />
              ))}
            </Carousel>
          </Categories>
        )}
        {trends.length > 0 && (
          <Categories title='Tendencias'>
            <Carousel>
              {trends.map((video) => (
                <CarouselItem key={video.id} {...video} />
              ))}
            </Carousel>
          </Categories>
        )}
        {originals.length > 0 && (
          <Categories title='Originales de PlatziVideo'>
            <Carousel>
              {originals.map((video) => (
                <CarouselItem key={video.id} {...video} />
              ))}
            </Carousel>
          </Categories>
        )}
      </main>
    </>
  );
};

Home.propTypes = {
  myList: PropTypes.array.isRequired,
  trends: PropTypes.array.isRequired,
  originals: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
