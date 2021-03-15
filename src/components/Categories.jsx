import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
  <div className='Categories'>
    <h3 className='Categories__title'>{title}</h3>
    {children}
  </div>
);

Categories.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Categories;
