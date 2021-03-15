import React from 'react';

import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <section className='Carousel'>
    <div className='Carousel__container'>{children}</div>
  </section>
);

export default Carousel;
