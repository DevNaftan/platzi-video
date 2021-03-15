import React from 'react';

import '../assets/styles/components/SearcherItem.scss';

const SearcherItem = ({ video }) => (
  <li className='SearcherItem'>
    <img src={video.cover} />
    <div>
      <p>
        {video.title} <span>({video.year})</span>
      </p>
      <p>{video.description}</p>
    </div>
  </li>
);

export default SearcherItem;
